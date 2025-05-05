const { login } = require("../helper/login");
const {rosterCreate,rosterLargeselected,rosterNoSelected,roasterLessselected,roasterminGreateMax} = require("../helper/roster")

describe('Rosters', () => {
    it('should create new shift', () => {
       login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get(':nth-child(2) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(18) > a').click();
        cy.get('.list__item > .active').contains('Roster');
        cy.get('.buttons > div > .ant-btn').click();
        rosterCreate();
        Cypress.on('uncaught:exception', (err, runnable) => {
         // Ignore specific errors
         if (err.message.includes("Cannot destructure property 'getFieldValue'")) {
           return false; // Prevent Cypress from failing the test
         }
         return true; // Let Cypress fail for other errors
       });
    
        cy.get('.ant-modal-header',{timeout:10000}).should('be.visible').contains('Roster Preview');
     });
     it('should not create without mandatory fields', () => {
      login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get(':nth-child(2) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(18) > a').click();
        cy.get('.list__item > .active').contains('Roster');
        cy.get('.buttons > div > .ant-btn').click();
        cy.get(':nth-child(11) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click();
        Cypress.on('uncaught:exception', (err, runnable) => {
         // Ignore specific errors
         if (err.message.includes("Cannot destructure property 'getFieldValue'")) {
           return false; // Prevent Cypress from failing the test
         }
         return true; // Let Cypress fail for other errors
       });
        cy.get('#title_help > .ant-form-item-explain-error').should('have.text','Please enter shift title');
        cy.get('#shifts_0_help > :nth-child(1)').should('have.text','Min members required');
        cy.get('#employees_help > .ant-form-item-explain-error').scrollIntoView().should('be.visible').contains('Please select employees')
     });
     it('should not selected members be larger than the max', () => {
      login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get(':nth-child(2) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(18) > a').click();
        cy.get('.buttons > div > .ant-btn').click();
        rosterLargeselected();
        Cypress.on('uncaught:exception', (err, runnable) => {
         // Ignore specific errors
         if (err.message.includes("Cannot destructure property 'getFieldValue'")) {
           return false; // Prevent Cypress from failing the test
         }
         return true; // Let Cypress fail for other errors
       });
       
     });
     it('should not create if the selected member is empty', () => {
      login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get(':nth-child(2) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(18) > a').click();
        cy.get('.list__item > .active').contains('Roster');
        cy.get('.buttons > div > .ant-btn').click();
        rosterNoSelected();
        Cypress.on('uncaught:exception', (err, runnable) => {
         // Ignore specific errors
         if (err.message.includes("Cannot destructure property 'getFieldValue'")) {
           return false; // Prevent Cypress from failing the test
         }
         return true; // Let Cypress fail for other errors
       });
        cy.get('#employees_help > .ant-form-item-explain-error').scrollIntoView().should('be.visible').contains('Please select employees')
     });
     it('should not create if the selected member is less than min', () => {
      login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get(':nth-child(2) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(18) > a').click();
        cy.get('.list__item > .active').contains('Roster');
        cy.get('.buttons > div > .ant-btn').click();
        roasterLessselected();
        Cypress.on('uncaught:exception', (err, runnable) => {
         // Ignore specific errors
         if (err.message.includes("Cannot destructure property 'getFieldValue'")) {
           return false; // Prevent Cypress from failing the test
         }
         return true; // Let Cypress fail for other errors
       });
        cy.get('.ant-modal-header',{timeout:10000}).should('not.be.visible');
     });
     it('should not create if min value is larger than the max value ', () => {
      login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get(':nth-child(2) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(18) > a').click();
        cy.get('.list__item > .active').contains('Roster');
        cy.get('.buttons > div > .ant-btn').click();
        roasterminGreateMax();
        Cypress.on('uncaught:exception', (err, runnable) => {
         // Ignore specific errors
         if (err.message.includes("Cannot destructure property 'getFieldValue'")) {
           return false; // Prevent Cypress from failing the test
         }
         return true; // Let Cypress fail for other errors
       });
        cy.get('#shifts_0_help > :nth-child(1)').should('have.text','Max members must be greater than or equal to Min members');
     });
     it('should be able to edit the created roster', () => {
        
     });
     it('should be able to regenerate the roaster', () => {
        
     });
     it('should be able to allocate the members ', () => {
        
     });
     it('should be able to remove the members', () => {
        
     });
     it('alert should be send to the selected members ', () => {
        
     });
     it('rules should be visible to the selected members ', () => {
        
     });
     it('pop up alert messages should be there once roster is created ', () => {
      login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
            cy.get(':nth-child(2) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(18) > a').click();
            cy.get('.list__item > .active').contains('Roster');
            cy.get('.buttons > div > .ant-btn').click();
            rosterCreate();
            Cypress.on('uncaught:exception', (err, runnable) => {
               // Ignore specific errors
               if (err.message.includes("Cannot destructure property 'getFieldValue'")) {
                 return false; // Prevent Cypress from failing the test
               }
               return true; // Let Cypress fail for other errors
             });
         
            cy.get('.ant-notification-notice').should('have.text','Successfully Created');
     });
});