const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.demoblaze.com/",
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 30000,
    requestTimeout: 5000,
    timeout: 10000,
    responseTimeout	: 10000

  },
  setupNodeEvents(on, config) {
    // implement node event listeners here
  },
});