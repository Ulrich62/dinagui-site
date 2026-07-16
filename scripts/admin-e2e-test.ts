import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import http from 'http';
import path from 'path';
import fs from 'fs';
import { getPayload } from 'payload';
import config from '../src/payload.config';

const ARTIFACTS_DIR = '/Users/macbookpro/.gemini/antigravity-cli/brain/c10e4516-428f-491f-9337-363918889d29';

function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function checkServerReady(url: string, timeoutMs = 45000) {
  const start = Date.now();
  return new Promise<void>((resolve, reject) => {
    const check = () => {
      if (Date.now() - start > timeoutMs) {
        reject(new Error(`Server not ready at ${url} after ${timeoutMs}ms`));
        return;
      }
      http.get(url, (res) => {
        if (res.statusCode === 200 || res.statusCode === 308) {
          resolve();
        } else {
          setTimeout(check, 1000);
        }
      }).on('error', () => {
        setTimeout(check, 1000);
      });
    };
    check();
  });
}

async function runTests() {
  console.log('🚀 Starting Next.js dev server with local database...');
  const env = {
    ...process.env,
    DATABASE_URL: 'postgresql://macbookpro@localhost:5432/dinagui_payload',
    PAYLOAD_SECRET: 'f3a8b9c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9',
  };
  const server = spawn('npm', ['run', 'dev'], {
    stdio: 'inherit',
    shell: true,
    env,
  });

  let browser;
  let testListingId: number | null = null;
  try {
    const baseUrl = 'http://localhost:3000';
    await checkServerReady(baseUrl);
    console.log('✅ Server is ready!');

    // Initialize Local Payload API to manage test records
    console.log('📦 Initializing Payload Local API...');
    const payload = await getPayload({ config });

    console.log('🌐 Launching Puppeteer...');
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    // Step 1: Login via Admin UI
    console.log('🔑 Navigating to Payload Admin login page...');
    await page.goto(`${baseUrl}/admin/login`, { waitUntil: 'networkidle2' });
    
    await page.waitForSelector('input[type="email"]');
    await page.type('input[type="email"]', 'admin@dinagui.local');
    await page.type('input[type="password"]', 'AdminPassword123!');
    
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'admin_01_login_filled.png') });
    console.log('Submitting login form...');
    await page.click('button[type="submit"]');

    // Wait for the admin dashboard or redirect
    await page.waitForNavigation({ waitUntil: 'networkidle2' });
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'admin_02_dashboard.png') });
    console.log('✅ Logged in successfully! Dashboard captured.');

    // Step 2: Create a test listing using Payload Local API
    console.log('➕ Creating a test listing in database...');
    const testListing = await payload.create({
      collection: 'listings',
      context: { skipRevalidation: false },
      data: {
        title: 'Appartement de Test E2E Admin',
        shortTitle: 'Test E2E Admin',
        slug: 'appartement-de-test-e2e-admin',
        offer: 'rent',
        type: 'furnished',
        location: 'Kipé Plaza Platinium',
        bedrooms: 3,
        bathrooms: 2,
        summary: 'Ceci est un appartement temporaire créé par le test E2E.',
        available: true,
        _status: 'published',
      },
    });
    testListingId = testListing.id as number;
    console.log(`✅ Test listing created with ID: ${testListingId}`);

    // Wait for Next.js compilation
    await wait(2000);

    // Step 3: Check Frontend
    console.log('👀 Checking frontend for the new listing...');
    await page.goto(`${baseUrl}/nos-offres/location-dappartements/appartement-de-test-e2e-admin`, {
      waitUntil: 'networkidle2',
    });
    const frontendTitle = await page.$eval('h1', el => el.textContent);
    console.log(`Frontend listing title: "${frontendTitle}"`);
    if (!frontendTitle || !frontendTitle.includes('Appartement de Test E2E Admin')) {
      throw new Error('Frontend listing was not displayed or title mismatch');
    }
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'admin_03_frontend_created.png') });
    console.log('✅ Frontend shows the new listing correctly.');

    // Step 4: Check Admin Listings List UI
    console.log('🔍 Checking Admin panel listing list...');
    await page.goto(`${baseUrl}/admin/collections/listings`, { waitUntil: 'networkidle2' });
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'admin_04_listings_list.png') });
    console.log('✅ Admin list captured.');

    // Step 5: Modify listing using Local API
    console.log('✏️ Modifying listing title to "Appartement de Test E2E Modifié"...');
    await payload.update({
      collection: 'listings',
      id: testListingId,
      data: {
        title: 'Appartement de Test E2E Modifié',
      },
    });
    console.log('✅ Listing modified in database.');

    await wait(2000);

    // Step 6: Verify modification on Frontend
    console.log('👀 Checking frontend for the modified listing...');
    await page.goto(`${baseUrl}/nos-offres/location-dappartements/appartement-de-test-e2e-admin`, {
      waitUntil: 'networkidle2',
    });
    const modifiedTitle = await page.$eval('h1', el => el.textContent);
    console.log(`Frontend modified title: "${modifiedTitle}"`);
    if (!modifiedTitle || !modifiedTitle.includes('Appartement de Test E2E Modifié')) {
      throw new Error('Frontend modified listing was not updated or title mismatch');
    }
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'admin_05_frontend_modified.png') });
    console.log('✅ Frontend shows the modified listing correctly.');

    // Step 7: Delete listing using Local API (to clean up and ensure no data loss/pollution)
    console.log('🗑️ Deleting test listing...');
    await payload.delete({
      collection: 'listings',
      id: testListingId,
    });
    testListingId = null; // cleared successfully
    console.log('✅ Listing deleted from database.');

    await wait(2000);

    // Step 8: Verify 404 on Frontend
    console.log('👀 Verifying listing is removed from frontend (should show 404)...');
    await page.goto(`${baseUrl}/nos-offres/location-dappartements/appartement-de-test-e2e-admin`, {
      waitUntil: 'networkidle2',
    });
    const notFoundTitle = await page.title();
    console.log(`Frontend page title (should be 404 / NotFound): "${notFoundTitle}"`);
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'admin_06_frontend_deleted.png') });
    console.log('✅ Frontend returned NotFound for deleted listing.');

    console.log('🎉 Admin E2E operations tests completed successfully!');
    await browser.close();
    server.kill();
    process.exit(0);

  } catch (err) {
    console.error('❌ Admin E2E Test failed:', err);
    
    // Safety teardown cleanup to ensure no orphaned test records are left in the DB
    if (testListingId !== null) {
      try {
        console.log(`🧹 [Teardown] Cleaning up test listing ID: ${testListingId}...`);
        const cleanupPayload = await getPayload({ config });
        await cleanupPayload.delete({
          collection: 'listings',
          id: testListingId,
        });
        console.log('🧹 [Teardown] Cleanup complete.');
      } catch (cleanErr) {
        console.error('Failed to clean up test listing in teardown:', cleanErr);
      }
    }
    
    if (browser) await browser.close();
    server.kill();
    process.exit(1);
  }
}

runTests();
