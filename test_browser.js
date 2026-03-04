const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || puppeteer.executablePath(),
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  // Capture console messages
  page.on('console', msg => console.log('PAGE LOG:', msg.type(), msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));

  await page.goto(`file://${__dirname}/essenz-perfumes.html`);

  await page.waitForSelector('.product-add');
  const buttons = await page.$$('.product-add');

  console.log('Found Add to Cart buttons:', buttons.length);
  if (buttons.length > 0) {
    try {
      await buttons[0].click();
      console.log('Clicked Add to Cart');
      // Wait a moment for JS to fire
      await new Promise(r => setTimeout(r, 500));

      const cartCount = await page.$eval('.cart-count', el => el.textContent);
      console.log('Cart count UI shows:', cartCount);

      const isCartVisible = await page.$eval('.cart-sidebar', el => el.classList.contains('active'));
      console.log('Cart sidebar is visible:', isCartVisible);
    } catch (e) {
      console.log('Error during click:', e.message);
    }
  }

  await browser.close();
})();
