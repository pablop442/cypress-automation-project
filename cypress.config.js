const { defineConfig } = require("cypress");
const { verifyDownloadTasks } = require("cy-verify-downloads");

module.exports = defineConfig({
  env: {
    url: "https://the-internet.herokuapp.com",
  },
  e2e: {
    setupNodeEvents(on, config) {
      on("task", verifyDownloadTasks);
    },
    specPattern: "cypress/integration/examples/*.js",
    pageLoadTimeout: 90000,
  },
});
