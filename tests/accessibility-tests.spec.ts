import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright'; // 1
import { createHtmlReport } from 'axe-html-reporter';
const fs = require('fs');


test.describe('homepage', () => { 
  test('should not have any automatically detectable accessibility issues', async ({ page }, testInfo) => {
    await page.goto('https://frontends-demo.vercel.app/'); 

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    const reportHTML = createHtmlReport({
      results: accessibilityScanResults,
      options: {
        projectKey: "PlaywrightHomepage"
      },
    });

    if (!fs.existsSync("build/reports/homepage-report.html")) {
      fs.mkdirSync("build/reports", {
        recursive: true,
      });
    }
    fs.writeFileSync("build/reports/homepage-report.html", reportHTML);

  //Expect violations to be empty
  expect(accessibilityScanResults.violations).toEqual([]);
});
});

test.describe('product page', () => { // 2
  test('should not have any automatically detectable accessibility issues', async ({ page }, testInfo) => {
    await page.goto('https://frontends-demo.vercel.app/FIRE-BOWL-DAO/SW10413'); // 3

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    const reportHTML = createHtmlReport({
      results: accessibilityScanResults,
      options: {
        projectKey: "PlaywrightHomepage"
      },
    });

    if (!fs.existsSync("build/reports/product-page-report.html")) {
      fs.mkdirSync("build/reports", {
        recursive: true,
      });
    }
    fs.writeFileSync("build/reports/product-page-report.html", reportHTML);

  //Expect violations to be empty
  expect(accessibilityScanResults.violations).toEqual([]);
});
});

test.describe('category page', () => { // 2
  test('should not have any automatically detectable accessibility issues', async ({ page }, testInfo) => {
    await page.goto('https://frontends-demo.vercel.app/Products/Product-listing-1/'); // 3

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    const reportHTML = createHtmlReport({
      results: accessibilityScanResults,
      options: {
        projectKey: "PlaywrightHomepage"
      },
    });

    if (!fs.existsSync("build/reports/category-page-report.html")) {
      fs.mkdirSync("build/reports", {
        recursive: true,
      });
    }
    fs.writeFileSync("build/reports/category-page-report.html", reportHTML);

  //Expect violations to be empty
  expect(accessibilityScanResults.violations).toEqual([]);
});
});