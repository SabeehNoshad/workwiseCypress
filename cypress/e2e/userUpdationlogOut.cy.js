const { login } = require("../helper/login");
const { routing } = require("../helper/routing");

describe('User updation',()=>{
    it('should allow the admin to see the employee details',()=>{
     login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
     cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
      routing({
            route:['https://www.workw.com/employees'],
            selectors: [
                '.topBar__buttons > .active', // employee tab
                ':nth-child(1) > .sc-isTsfW > .items-end > .sc-hFkIQk > .gMZWpF', // disable button
                ':nth-child(1) > .sc-isTsfW > .items-end > .sc-hFkIQk > .cmzdbK' // update button
            ]
        })
})

    it.only('should update own user sucessfully',()=>{
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'))
         cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
         cy.visit('https://www.workw.com/employees');
         cy.get('.topBar__buttons > .active').should('be.visible')
         cy.get('.ant-input').type("Work").should('be.visible')
        cy.get('.sc-dVdSBb > :nth-child(1)').contains("Work Test")
         cy.get('.jCKWYE').click();
        cy.url().should('include', 'basicInfo');
    })

     it.only('should update own user sucessfully with sucessfull alert and automatic logout',()=>{
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'))
         cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
         cy.visit('https://www.workw.com/employees');
         cy.get('.topBar__buttons > .active').should('be.visible')
         cy.get('.ant-input').type("Work").should('be.visible')
        cy.get('.sc-dVdSBb > :nth-child(1)').contains("Work Test")
         cy.get('.jCKWYE').first().click();
        cy.url().should('include', 'basicInfo');
        cy.get(':nth-child(26) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-item').click()
        cy.get(':nth-child(29) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-overflow')
        .scrollIntoView()
        .should('be.visible')
        .click()
        cy.get('.editButtons > .ant-btn').should('be.visible').scrollIntoView().click();
         cy.get('.submit-wrapper > .ant-btn').click();
       cy.get('.ant-notification-notice').should('include','Successfully');

    })
})