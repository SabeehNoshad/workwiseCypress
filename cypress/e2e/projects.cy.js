const { randomName,trimmedText } = require("../helper/taskCreate");
const {login} = require("../helper/login")
const {projectCreation} = require("../helper/projectCreation")

describe('project module testing', () => {
    Cypress.on('uncaught:exception',(err,runnable) => {
        cy.task('logError',{
          message: err.message,
          stack: err.stack,
          spec: runnable.titlePath().join(' >'),
           });
        return false
      })
    it('should create the project with the verification of listing', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
        cy.visit('https://www.workw.com/projects');
        cy.get('.list__item > .active',{timeout:10000}).should('be.visible');
        cy.get('.ant-btn').click();
        projectCreation ({
            name:randomName,
            description:trimmedText,
            startDate:"22/04/2025",
            endDate:"29/05/2025",
            category:"test",
            member:"hadiqa shakil"
            
        })
        cy.get('.flex > .ant-btn').click()
        cy.get('div.ant-notification-notice-with-icon').should('have.text','Schedule Created Successfully');
    });
});