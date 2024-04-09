import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright'; // 1
import { createHtmlReport } from 'axe-html-reporter';
const fs = require('fs');


test.describe('homepage', () => { // 2
  test('should not have any automatically detectable accessibility issues', async ({ page }, testInfo) => {
    await page.goto('https://frontends-demo.vercel.app/'); // 3

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    const reportHTML = createHtmlReport({
      results: accessibilityScanResults,
      options: {
        projectKey: "PlaywrightHomepage"
      },
    });

    if (!fs.existsSync("build/reports/accessibility-report.html")) {
      fs.mkdirSync("build/reports", {
        recursive: true,
      });
    }
    fs.writeFileSync("build/reports/accessibility-report.html", reportHTML);

  //Attached the violations to the test report
  await testInfo.attach("accessibility-scan-results", {
    body: JSON.stringify(accessibilityScanResults.violations, null, 2),
    contentType: "application/json",
  });

  //Console log the violations
  let violation = accessibilityScanResults.violations;
  violation.forEach(function (entry) {
    console.log(entry.impact + " " + entry.description);
  });

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

    if (!fs.existsSync("build/reports/accessibility-report.html")) {
      fs.mkdirSync("build/reports", {
        recursive: true,
      });
    }
    fs.writeFileSync("build/reports/accessibility-report.html", reportHTML);

  //Attached the violations to the test report
  await testInfo.attach("accessibility-scan-results", {
    body: JSON.stringify(accessibilityScanResults.violations, null, 2),
    contentType: "application/json",
  });

  //Console log the violations
  let violation = accessibilityScanResults.violations;
  violation.forEach(function (entry) {
    console.log(entry.impact + " " + entry.description);
  });

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

    if (!fs.existsSync("build/reports/accessibility-report.html")) {
      fs.mkdirSync("build/reports", {
        recursive: true,
      });
    }
    fs.writeFileSync("build/reports/accessibility-report.html", reportHTML);

  //Attached the violations to the test report
  // await testInfo.attach("accessibility-scan-results", {
  //   body: JSON.stringify(accessibilityScanResults.violations, null, 2),
  //   contentType: "application/json",
  // });

  // //Console log the violations
  // let violation = accessibilityScanResults.violations;
  // violation.forEach(function (entry) {
  //   console.log(entry.impact + " " + entry.description);
  // });

  //Expect violations to be empty
  expect(accessibilityScanResults.violations).toEqual([]);
});
});