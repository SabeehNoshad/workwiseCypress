
const { client } = require("../helper/client'sInformationform");
const { login } = require("../helper/login");
const { generateRandomText } = require("../helper/nameTextgenerator");

describe('creation of quotation ',{retries:3}, () => {
    const data = {
        subject: generateRandomText(),
        name: generateRandomText(),
        email: generateRandomText() + '@gmail.com'
    };
    it('verification of the Title quotations', () => {
        login("workwisetesting@gmail.com",'Abc12345@');
        cy.get('.ant-collapse:nth-child(3) .menu-item:nth-child(2) p').first().click();
        cy.get('.active:nth-child(2)',{timeout:5000}).should('contain.text','Quotations');
    });
    it('validating the form field titles in  the quotation', () => {
        login("workwisetesting@gmail.com",'Abc12345@');
        cy.get('.ant-collapse:nth-child(3) .menu-item:nth-child(2) p',{timeout:50000}).should('be.visible').first().click();
         cy.get('.buttons > div > a > .ant-btn').click();
         Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Ignore errors that are unrelated to Cypress
          })
        cy.url().should('eq', 'https://www.workw.com/quotation/create');
        cy.get('#addQuotation_subject',{timeout:5000}).should('exist').and('be.visible');
        cy.get(':nth-child(1) > :nth-child(2) > .ant-row > .ant-form-item-label > .ant-form-item-required').should('be.visible').and('have.text',"Client's Name");
        cy.get(':nth-child(3) > .ant-row > .ant-form-item-label > .ant-form-item-required').and('have.text',"Client's Email");
        cy.get(':nth-child(1) > :nth-child(4) > .ant-row > .ant-form-item-label > .ant-form-item-required').should('be.visible').and('not.have.text',"Enter Phone Number");

    });
    it.only('Verification of the quotation creates a new quotation after sucessfull submission / notification appears ', () => {
        login("workwisetesting@gmail.com",'Abc12345@');
        cy.get('.ant-collapse:nth-child(3) .menu-item:nth-child(2) p').first().click();
        cy.get('.buttons span').click();
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Ignore errors that are unrelated to Cypress
          });
        cy.url().should('eq', 'https://www.workw.com/quotation/create');
        cy.get('#addQuotation_subject').should('exist').and('be.visible');
        client(data.subject,data.name,data.email,'5567721496');
        cy.get('.ant-form-item-control-input-content > .ant-btn').should('be.visible').click();
        cy.get('.ant-notification-notice').should('have.text','Successfully created')
        

    });
});