import {test, expect} from '@playwright/test';

test('home page visual test', async ({page}) => {
  await page.goto('https://demo-frontends.shopware.store/');
  await expect(page).toHaveScreenshot();
});
