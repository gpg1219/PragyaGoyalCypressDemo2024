const { defineConfig } = require("cypress");
const { mochawesome } = require("cypress-mochawesome-reporter");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    // ... other reporter options
  },

  e2e: {
    baseUrl:'https://www.saucedemo.com/',
    //baseUrl: 'https://www.google.com',

    "defaultCommandTimeout": 12000, // Set to a higher value if needed
    "responseTimeout": 30000,
    testIsolation:true,
    "experimentalOriginDependencies":true,
    failOnStatusCode:false,
    cacheAcrossSpecs:false,
    "viewportWidth": 1920,
    "viewportHeight": 1080,
    "videoUploadOnPasses": false,
    "video": false,
    "trashAssetsBeforeRuns": true,
    "chromeWebSecurity": true,
    experimentalOriginDependencies: true,
    experimentalRunAllSpecs: true,
    //experimentalSingleTabRunMode: true,
    experimentalModifyObstructiveThirdPartyCode:true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
