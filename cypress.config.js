const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const fs = require("fs");
const path = require("path");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  projectId: "ga2geq",
  e2e: {
    setupNodeEvents(on, config) {
      // ✅ Enable Allure reporting
      allureWriter(on, config);

      // ✅ Add custom logError task for catching app exceptions
      on("task", {
        logError({ message, stack, spec }) {
          const logMessage = `[${new Date().toISOString()}] Test: ${spec}\nError: ${message}\nStack: ${stack}\n\n`;
          const logPath = path.join(__dirname, "error-log.txt");
          fs.appendFileSync(logPath, logMessage, "utf8");
          return null;
        },
      });

      // ✅ Browser launch options
      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.family === "chromium" && browser.name === "chrome") {
          // 🚀 Fresh temporary profile (prevents Chrome reusing old user profile)
          // launchOptions.args.push("--user-data-dir=/tmp/cypress-temp-profile");
          

          // Optional incognito
          launchOptions.args.push("--incognito");
          launchOptions.args.push(
            '--use-fake-ui-for-media-stream',    // auto-allow camera/mic
            '--use-fake-device-for-media-stream',
            '--enable-geolocation',              // enable location
            '--use-fake-ui-for-media-stream',
            '--no-sandbox',
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--lang=en'                          // set Chrome language to English
          )

          

          return launchOptions;
        }

        if (browser.family === "firefox") {
          // ✅ Firefox equivalent for geolocation
          launchOptions.preferences["geo.prompt.testing"] = true;
          launchOptions.preferences["geo.prompt.testing.allow"] = true;
          launchOptions.preferences["geo.provider.network.url"] =
            'data:application/json,{"location":{"lat":37.7749,"lng":-122.4194},"accuracy":100.0}';
          return launchOptions;
        }
      });

      return config;
    },

    env: {
      allure: true,
      allureResultsPath: "allure-results",
    },
  },
});
