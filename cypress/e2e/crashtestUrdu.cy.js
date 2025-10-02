const { login } = require("../helper/login");
const {routing} = require('../helper/routing')

describe("crashtest for the modules against each URL for the Language choosed",()=>{
    it('should display the contents against each URL in Urdu', () => {
     

           login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible');
        cy.get('.userDetails__footer > img').click();
        cy.get('.dropDown > :nth-child(2) > .ant-collapse-item > .ant-collapse-header > .ant-collapse-expand-icon').click();
        //selecting urdu
        cy.get('.ant-collapse-content-box > .list > :nth-child(2)').click()



        routing({
            route:['https://www.workw.com/schedules?f=cal','https://www.workw.com/messenger','https://www.workw.com/mail/INBOX'],
            selectors: [
                '.fc', // Selector for the schedules page
                '.HeadName', // Selector for the messenger page
                // '.bg-blue-800' // Selector for the mail inbox page
            ]
        
    });
})
it('should display the content in turkish ',()=>{
   

            login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible');
        cy.get('.userDetails__footer > img').click();
        cy.get('.dropDown > :nth-child(2) > .ant-collapse-item > .ant-collapse-header > .ant-collapse-expand-icon').click();
        //selecting Turkish
       cy.get('.ant-collapse-content-box > .list > :nth-child(5)').click()



        routing({
            route:['https://www.workw.com/schedules?f=cal','https://www.workw.com/messenger','https://www.workw.com/mail/INBOX'],
            selectors: [
                '.fc', // Selector for the schedules page
                '.HeadName', // Selector for the messenger page
                // '.bg-blue-800' // Selector for the mail inbox page
            ]
        
    });
})
it('should display the content in english',()=>{
   

            login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible');
        cy.get('.userDetails__footer > img').click();
        cy.get('.dropDown > :nth-child(2) > .ant-collapse-item > .ant-collapse-header > .ant-collapse-expand-icon').click();
        //selecting German
        cy.get('.ant-collapse-content-box > .list > :nth-child(1)').click()
})
})