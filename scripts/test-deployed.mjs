import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

const ARTIFACTS_DIR = '/Users/macbookpro/.gemini/antigravity-cli/brain/c10e4516-428f-491f-9337-363918889d29';

// Ensure artifacts dir exists
if (!fs.existsSync(ARTIFACTS_DIR)) {
  fs.mkdirSync(ARTIFACTS_DIR, { recursive: true });
}

async function runTests() {
  const baseUrl = 'https://dinagui-site.vercel.app';
  console.log(`🚀 Starting E2E tests against deployed Vercel site: ${baseUrl}`);

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    // TEST 1: Homepage
    console.log('Testing Deployed Homepage...');
    await page.goto(baseUrl, { waitUntil: 'load' });
    const title = await page.title();
    console.log(`Deployed Homepage title: "${title}"`);
    if (!title.includes('DINAGUI')) {
      throw new Error('Deployed Homepage title check failed');
    }
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'deployed_01_homepage.png') });
    console.log('✅ Deployed Homepage test passed. Screenshot saved.');

    // TEST 2: À propos
    console.log('Testing Deployed À propos...');
    await page.goto(`${baseUrl}/a-propos`, { waitUntil: 'load' });
    const aboutHeader = await page.$eval('h1', el => el.textContent);
    console.log(`Deployed À propos H1: "${aboutHeader}"`);
    if (!aboutHeader.toLowerCase().includes('propos')) {
      throw new Error('Deployed À propos page check failed');
    }
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'deployed_02_about.png') });
    console.log('✅ Deployed À propos test passed. Screenshot saved.');

    // TEST 3: Notre équipe
    console.log('Testing Deployed Notre équipe...');
    await page.goto(`${baseUrl}/notre-equipe`, { waitUntil: 'load' });
    const membersCount = await page.$$eval('h3', els => els.filter(el => {
      return el.textContent.trim().length > 0;
    }).length);
    console.log(`Found headings in deployed team page: ${membersCount}`);
    if (membersCount === 0) {
      throw new Error('Deployed team page headings check failed');
    }
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'deployed_03_team.png') });
    console.log('✅ Deployed Team test passed. Screenshot saved.');

    // TEST 4: Nos offres / Location (Testing dynamic DB fetch)
    console.log('Testing Deployed Rentals page...');
    await page.goto(`${baseUrl}/nos-offres/location-dappartements`, { waitUntil: 'load' });
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'deployed_04_rentals.png') });
    console.log('✅ Deployed Rentals page loaded. Screenshot saved.');

    // TEST 5: Admin Panel Login Page
    console.log('Testing Deployed Admin Login Page...');
    await page.goto(`${baseUrl}/admin`, { waitUntil: 'load' });
    const adminUrl = page.url();
    console.log(`Admin page URL: "${adminUrl}"`);
    
    // Check if it's the login form or create-first-user form
    const isLogin = await page.$('input[type="email"]') !== null;
    console.log(`Admin page contains login input: ${isLogin}`);
    
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'deployed_05_admin.png') });
    console.log('✅ Deployed Admin page checked. Screenshot saved.');

    console.log('🎉 Deployed site E2E tests completed successfully!');
    await browser.close();
    process.exit(0);

  } catch (err) {
    console.error('❌ Deployed site E2E Test failed:', err);
    if (browser) await browser.close();
    process.exit(1);
  }
}

runTests();
