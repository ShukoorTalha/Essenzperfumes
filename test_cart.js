const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || puppeteer.executablePath(),
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  await page.goto(`file://${__dirname}/essenz-perfumes.html`);
  await page.waitForSelector('.product-add');

  const buttons = await page.$$('.product-add');
  console.log('Found buttons:', buttons.length);

  if (buttons.length > 0) {
    try {
      await buttons[0].click();
      console.log('Clicked first button');
    } catch (e) {
      console.log('Click error:', e);
    }
  }

  const cartText = await page.evaluate(() => document.querySelector('.cart-count').innerText);
  console.log('Cart count after click:', cartText);
  await browser.close();
})();
