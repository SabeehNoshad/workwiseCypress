const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  projectId: 'ga2geq',
  e2e: {
    setupNodeEvents(on, config) {
      // ✅ Enable Allure reporting
      allureWriter(on, config);

      // ✅ Add custom logError task for catching app exceptions
      on('task', {
        logError({ message, stack, spec }) {
          const logMessage = `[${new Date().toISOString()}] Test: ${spec}\nError: ${message}\nStack: ${stack}\n\n`;
          const logPath = path.join(__dirname, 'error-log.txt');
          fs.appendFileSync(logPath, logMessage, 'utf8');
          return null;
        },
      });

      // ✅ Optional Chrome incognito
      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.name === "chrome") {
          launchOptions.args.push("--incognito");
        }
        return launchOptions;
      });

      return config;
    },

    env: {
      allure: true,
      allureResultsPath: "allure-results",
    },
  },
});
