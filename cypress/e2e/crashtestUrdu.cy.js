describe("crashtest for the modules against each URL for the Language Urdu",()=>{
    it('should display the contents against each URL', () => {
           login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible');

        routing({
            route:['https://www.workw.com/schedules?f=cal','https://www.workw.com/messenger','https://www.workw.com/mail/INBOX'],
            selectors: [
                '.fc', // Selector for the schedules page
                '.HeadName', // Selector for the messenger page
                '.bg-blue-800' // Selector for the mail inbox page
            ]
        
    });
})
})