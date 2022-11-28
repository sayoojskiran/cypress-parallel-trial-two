const { defineConfig } = require("cypress");
const readXlsx = require("./cypress/support/read-xlsx");
module.exports = defineConfig({
  projectId: "ea41fa",

  /*reporter: "../node_modules/mochawesome/src/mochawesome.js",
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true,
  },*/
  video: false,
  e2e: {
    baseUrl: "https://rahulshettyacademy.com/angularpractice/",
    env: {
      url: "https://rahulshettyacademy.com/angularpractice/",
    },
    setupNodeEvents(on, config) {
      //require("cypress-mochawesome-reporter/plugin")(on);
      // implement node event listeners here
      on("task", {
        readXlsx: readXlsx.read,
      });
    },

    specPattern: "cypress/Integration/Example/*.js",
  },
});
