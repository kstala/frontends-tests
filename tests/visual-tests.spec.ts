import {test, expect} from '@playwright/test';

test('home page visual test', async ({page}) => {
  await page.goto('https://frontends-demo.vercel.app/');
  await expect(page).toHaveScreenshot();
});