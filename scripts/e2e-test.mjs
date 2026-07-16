import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import http from 'http';
import path from 'path';
import fs from 'fs';

const ARTIFACTS_DIR = '/Users/macbookpro/.gemini/antigravity-cli/brain/c10e4516-428f-491f-9337-363918889d29';

// Ensure artifacts dir exists
if (!fs.existsSync(ARTIFACTS_DIR)) {
  fs.mkdirSync(ARTIFACTS_DIR, { recursive: true });
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function checkServerReady(url, timeoutMs = 45000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
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
  console.log('🚀 Starting Next.js production server...');
  const server = spawn('npm', ['run', 'start'], {
    stdio: 'inherit',
    shell: true,
  });

  try {
    const baseUrl = 'http://localhost:3000';
    await checkServerReady(baseUrl);
    console.log('✅ Server is ready! Launching Puppeteer...');

    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    // Enable request interception to mock Web3Forms contact form submission
    await page.setRequestInterception(true);
    page.on('request', (request) => {
      if (request.url().includes('api.web3forms.com/submit')) {
        console.log('⚡ Intercepted Web3Forms submission, mocking response...');
        request.respond({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ success: true, message: 'Mocked submission' }),
        });
      } else {
        request.continue();
      }
    });

    // TEST 1: Homepage
    console.log('Testing Homepage...');
    await page.goto(baseUrl, { waitUntil: 'networkidle2' });
    const homepageTitle = await page.title();
    console.log(`Homepage title: "${homepageTitle}"`);
    if (!homepageTitle.includes('DINAGUI')) {
      throw new Error('Homepage title check failed');
    }
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'screenshot_homepage.png') });
    console.log('✅ Homepage test passed. Screenshot saved.');

    // TEST 2: À propos
    console.log('Testing À propos...');
    await page.goto(`${baseUrl}/a-propos`, { waitUntil: 'networkidle2' });
    const aboutHeader = await page.$eval('h1', el => el.textContent);
    console.log(`À propos H1: "${aboutHeader}"`);
    if (!aboutHeader.toLowerCase().includes('propos')) {
      throw new Error('À propos page check failed');
    }
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'screenshot_about.png') });
    console.log('✅ À propos test passed. Screenshot saved.');

    // TEST 3: Notre équipe
    console.log('Testing Notre équipe...');
    await page.goto(`${baseUrl}/notre-equipe`, { waitUntil: 'networkidle2' });
    // Check if the team members are rendered
    const membersCount = await page.$$eval('h3', els => els.filter(el => {
      return el.textContent.trim().length > 0;
    }).length);
    console.log(`Found headings in team page: ${membersCount}`);
    if (membersCount === 0) {
      throw new Error('Team page member headings check failed');
    }
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'screenshot_team.png') });
    console.log('✅ Team test passed. Screenshot saved.');

    // TEST 4: Contact Form
    console.log('Testing Contact form...');
    await page.goto(`${baseUrl}/contact`, { waitUntil: 'networkidle2' });
    
    // Fill out form
    await page.type('input[name="prenom"]', 'E2E');
    await page.type('input[name="nom"]', 'Tester');
    await page.type('input[name="email"]', 'e2e-test@dinagui.com');
    await page.type('input[name="telephone"]', '+224600000000');
    await page.type('textarea[name="message"]', 'Ceci est un test E2E automatique.');
    
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'screenshot_contact_filled.png') });

    // Submit form
    console.log('Submitting form...');
    await page.click('button[type="submit"]');

    // Wait a couple seconds for mock api response and state update
    await wait(2000);
    
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'screenshot_contact_submitted.png') });
    console.log('✅ Contact form test completed. Screenshots saved.');

    // TEST 5: Nos offres / Location
    console.log('Testing Rentals page...');
    await page.goto(`${baseUrl}/nos-offres/location-dappartements`, { waitUntil: 'networkidle2' });
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'screenshot_rentals.png') });
    console.log('✅ Rentals page test passed. Screenshot saved.');

    console.log('🎉 All E2E tests completed successfully!');
    await browser.close();
    server.kill();
    process.exit(0);

  } catch (err) {
    console.error('❌ E2E Test failed:', err);
    server.kill();
    process.exit(1);
  }
}

runTests();
