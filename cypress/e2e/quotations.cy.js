
const { client } = require("../helper/client'sInformationform");
const { login } = require("../helper/login");
const { generateRandomText } = require("../helper/nameTextgenerator");

describe('Quotation ', () => {
    const data = {
        subject: generateRandomText(),
        name: generateRandomText(),
        email: generateRandomText() + '@gmail.com'
    };
    it('should verify of the Title quotations', () => {
        login("workwisetesting@gmail.com",'Abcd1234@');
        cy.get('.ant-collapse:nth-child(3) .menu-item:nth-child(2) p').first().click();
        cy.get('.active:nth-child(2)',{timeout:5000}).should('contain.text','Quotations');
    });
    it('should validate the form field titles in  the quotation', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.ant-collapse:nth-child(3) .menu-item:nth-child(2) p',{timeout:50000}).should('be.visible').first().click();
         cy.get('.buttons > div > a > .ant-btn').click();
         Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Ignore errors that are unrelated to Cypress
          })
        cy.url().should('eq', 'https://www.workw.com/quotation/create');
        cy.get('#addQuotation_subject',{timeout:5000}).should('exist').and('be.visible');
        cy.get(':nth-child(1) > :nth-child(2) > .ant-row > .ant-form-item-label > .ant-form-item-required').should('be.visible').and('have.text',"Client's Name");
        cy.get(':nth-child(3) > .ant-row > .ant-form-item-label > .ant-form-item-required').and('have.text',"Client's Email");
        cy.get(':nth-child(1) > :nth-child(4) > .ant-row > .ant-form-item-label > .ant-form-item-required').should('be.visible').and('have.text',"Enter Phone Number");

    });
    it('should Verify of the quotation creates a new quotation after sucessfull submission / notification appears ', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.ant-collapse:nth-child(3) .menu-item:nth-child(2) p').first().click();
        cy.get('.buttons span').click();
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Ignore errors that are unrelated to Cypress
          });
        cy.url().should('eq', 'https://www.workw.com/quotation/create');
        cy.get('#addQuotation_subject').should('exist').and('be.visible');
        client(data.subject,data.name,data.email,'5567721496');
        cy.get('.tags > input').click().type('hadiqa');
        cy.get('.sc-bBkKde > div').contains('hadiqa shakil').click({force:true})
        cy.get('.ant-form-item-control-input-content > .ant-btn').should('be.visible').click();
        cy.get('.ant-notification-notice').should('include.text','Quotation Created Successfully')
        

    });
    it('should not create without approver and should how the validation message properly ', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.ant-collapse:nth-child(3) .menu-item:nth-child(2) p').first().click();
        cy.get('.buttons span').click();
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Ignore errors that are unrelated to Cypress
          });
        cy.url().should('eq', 'https://www.workw.com/quotation/create');
        cy.get('#addQuotation_subject').should('exist').and('be.visible');
        client(data.subject,data.name,data.email,'5567721496');
        cy.get('.ant-form-item-control-input-content > .ant-btn').should('be.visible').click();
        cy.get(".ant-message-custom-content > span:nth-child(2)").should('be.visible').and('include.text','approver required')
        

    });
    it.only('should have the mandatory field mark in the title  ', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.ant-collapse:nth-child(3) .menu-item:nth-child(2) p').first().click();
        cy.get('.buttons span').click();
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Ignore errors that are unrelated to Cypress
          });
        cy.url().should('eq', 'https://www.workw.com/quotation/create');
        cy.get('#addQuotation_subject').should('exist').and('be.visible');
        cy.get('label > .flex > :nth-child(1)').should('be.visible').and('have.text','*Approval')
        cy.get('.ant-form-item-control-input-content > .ant-btn').should('be.visible').click();
        cy.get(".ant-message-custom-content > span:nth-child(2)").should('be.visible').and('include.text','approver required')
        

    });
});