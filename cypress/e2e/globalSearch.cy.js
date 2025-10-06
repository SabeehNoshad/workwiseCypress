const { login } = require("../helper/login")

describe('Main Universal search testing',()=>{
    it('should be viewed and clicked from the main menu',()=>{
        login(Cypress.env('adminemail'),Cypress.env("adminpassword")); //login user and password
        cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); // user name verification 
        cy.get('.searchBar').should('be.visible').click();     // search icon main menu
        cy.get('.searchBar > .globalSearchInput').click().type("test{enter")  // search input field
    })
})