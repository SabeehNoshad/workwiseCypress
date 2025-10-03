const { login } = require("../helper/login");
const {careersform} = require("../helper/careerModule")
const {randomNumber,randomDateSimple} = require("../helper/taskCreate")


describe('Careers module', () => {
  
//     beforeEach(() => {
//   // 1. Grant geolocation permission for your app’s origin
//   cy.wrap(null).then(() => {
//     Cypress.automation("remote:debugger:protocol", {
//       command: "Browser.grantPermissions",
//       params: {
//         permissions: ["geolocation"],
//         origin: "https://your-app-domain.com", // 👈 replace with your app’s URL
//       },
//     });
//   });

//   // 2. Override location with fake lat/lon
//   cy.wrap(null).then(() => {
//     Cypress.automation("remote:debugger:protocol", {
//       command: "Emulation.setGeolocationOverride",
//       params: {
//         latitude: 37.7749,      // 👈 fake lat
//         longitude: -122.4194,   // 👈 fake lon
//         accuracy: 100
//       },
//     });
//   });
// });

    it('creation of career',{retries:1}, () => {
        
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
        cy.visit('https://www.workw.com/careers');
        cy.get('.buttons > .ant-btn').should("be.visible").click();
        careersform ({
            designation : '4',
            grades: "Director",
            salarylo: randomNumber,
            salaryup: randomNumber,
            language: ["english" , "urdu" , "czech" , "french" , "spanish"],
            workingType: "Hybrid",
            probation: "30",
            jobType: "Part Time",
            jobShift: "Morning",
            certificate:["programing" , "ISTQB" , "HRM" , "FireSafety"],
            travelRequirement : "30",
            leaves: "30",
            department: "Admin",
            city: "Karachi",
            supervisor:"hadiqa shakil",
            interviewer: "hadiqa shakil",
            approver: "hadiqa shakil",
            education: "Graduate",
            career: "Mid Level",
            enddate : randomDateSimple
        })
       cy.get('.ant-form-item-control-input-content > .ant-btn').click()
       cy.get('.ant-form-item-control-input-content > .ant-btn').click()

          //checking and login the error from the system the method is in the / support/command.js
    cy.getErrorMessage().then((errorMessage) => {
    cy.log("Error Message: " + errorMessage);
    console.log("Error Message:", errorMessage);
    })

         cy.get('.ant-notification-notice')
         .should('be.visible')
         .should('have.text','Successfully Posted');
    });
});