module.exports = {
  ci: {
    collect: {
      numberOfRuns: 5,
      url: ["https://frontends-demo.vercel.app/"],
      settings: {
        onlyCategories: [
          "performance",
          "accessibility",
          "best-practices",
          "seo",
        ],
        skipAudits: ["uses-http2"],
        chromeFlags: "--no-sandbox",
      },
    },
    assert: {
      assertions: {
        "categories:performance": [
          "error",
          { minScore: 0.9, aggregationMethod: "median-run" },
        ],
        "categories:accessibility": [
          "error",
          { minScore: 0.9, aggregationMethod: "median-run" },
        ],
        "categories:best-practices": [
          "error",
          { minScore: 0.9, aggregationMethod: "median-run" },
        ],
        "categories:seo": [
          "error",
          { minScore: 0.9, aggregationMethod: "median-run" },
        ],
      },
    },
    upload: {
      target: "lhci",
      serverBaseUrl: "https://lhci-server.apps.shopware.io",
      token: "${{ secrets.LHCI_GITHUB_TOKEN }}",
    },
  },
};
