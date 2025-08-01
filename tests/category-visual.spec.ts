import {test, expect} from '@playwright/test';

test('category page visual test', async ({page}) => {
  await page.goto('https://frontends-demo.vercel.app/Products/');
  await expect(page).toHaveScreenshot();
});