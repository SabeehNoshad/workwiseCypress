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

    it('should update own user sucessfully',()=>{
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'))
         cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
         cy.visit('https://www.workw.com/employees');
         cy.get('.topBar__buttons > .active').should('be.visible')
         cy.get('.ant-input').type("Work").should('be.visible')
         cy.get('.sc-hsaIUA').contains("WOrk Test")
         cy.get('.jCKWYE').click();
         cy.get(URL).should('include',"basicinfo")

    })
})