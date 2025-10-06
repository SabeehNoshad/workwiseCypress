const { login } = require("../helper/login")

describe('Quick Task Creation', () => { 
    it('should create a quick task with only subject',()=>{
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
         cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
    cy.visit('https://www.workw.com/tasks')
    cy.get('#dropdown-container > .ant-btn').click()
    .type("cypress test{enter}")
    })
 })