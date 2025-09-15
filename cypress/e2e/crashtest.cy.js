const { login } = require("../helper/login");
const { routing } = require("../helper/routing");

describe('testing the urls of the Main Menu', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        cy.task('logError', {
            message: err.message,
            stack: err.stack,
            spec: runnable.titlePath().join(' > '),
          });
        
        return false;
      });
    it('should have the proper data against schedule messenger mailbox ', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
        routing({
            route:['https://www.workw.com/schedules?f=cal','https://www.workw.com/messenger','https://www.workw.com/mail/INBOX'],
            selectors: [
                '.fc', // Selector for the schedules page
                '.HeadName', // Selector for the messenger page
                '.bg-blue-800' // Selector for the mail inbox page
            ]
        })
    });
    it ('should have the proper data against each URL LEADMANAGER/CUSTOMAPPROVALS/TRAVELS ', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
        routing({
            route:['https://www.workw.com/leadManager','https://www.workw.com/customApprovals','https://www.workw.com/travel?f=trv'],
            selectors: [
                '.list__item > .active', // Selector LEAD-MANAGER page
                '.list__item > .active', // Selector CUSTOM-APPROVALS page
                '.list__item > .active' // Selector for the mail inbox page
            ]
        })
    });
    it('should have the proper data against each URL l&D/CLIENTS/PROJECTS/WORK-BOARDS ', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
        routing({
            route:['https://www.workw.com/eLearning','https://www.workw.com/clients','https://www.workw.com/projects','https://www.workw.com/workboard'],
            selectors: [
                '.list__item > .active', // Selector l&D page
                '.list__item > .active', // Selector Client page
                '.list__item > .active', // Selector for the Projects page
                '.list__item > .active' // Selector for the work-board page
            ]
        })
    });
    it('should have the proper data agalinst each URL TICKETS/COMPANY-POLICY/FORMS/MARKET-PLACE', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
        routing({
            route:['https://www.workw.com/businessPolicy','https://www.workw.com/forms','https://www.workw.com/marketplace'],
            selectors: [
                
                '.list__item > .active', 
                '.list__item > .active', 
                '.list__item > .active' 
            ]
        })
    });
    it('should have the proper data against each URL AUCTION/DISCUSSION-BOARD/PAGES/FLOW', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
        routing({
            route:['https://www.workw.com/auction','https://www.workw.com/discussionBoard','https://www.workw.com/pages'],
            selectors: [
                '.list__item > .active', 
                '.list__item > .active', 
                '.list__item > .active' 
            ]
        })
    });
});
describe('testing the urls of the Hr Menu', () => {
    it('should have the proper data against each URL EMPLOYEES/APPRIASALS/ADMINISTRATION/PROMOTION', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
        routing({
            route:['https://www.workw.com/employees','https://www.workw.com/appraisals','https://www.workw.com/administrator/','https://www.workw.com/promotions'],
            selectors: [
                '.list__item > .active', 
                '.list__item > .active', 
                '.li', 
                '.list__item > .active' 
            ]
        })
    });
    it('should have the proper data against each URL WARNINGS/BONUS/QRG-CHART/COMPLAIN', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
        routing({
            route:['https://www.workw.com/warnings','https://www.workw.com/bonus','https://www.workw.com/orgChart','https://www.workw.com/complains'],
            selectors: [
                '.list__item > .active', 
                '.list__item > .active', 
                ':nth-child(1) > .m-0', 
                '.list__item > .active' 
            ]
        })
    });
    it('should have the proper data against each URL REWARDS/MY-TEAM/LEAVES/DEPARTMENTS', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
        routing({
            route:['https://www.workw.com/rewards','https://www.workw.com/teams','https://www.workw.com/leaves','https://www.workw.com/departments'],
            selectors: [
                '.list__item > .active', 
                '.list__item > .active', 
                '.list__item > .active', 
                '.list__item > .active' 
            ]
        })
    });
    it('should have the proper data against each URL CAREERS/SALARY/LOAN/RESGINATION/ATTENDANCE/ROASTER', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
        routing({
            route:['https://www.workw.com/careers','https://www.workw.com/salary','https://www.workw.com/loan','https://www.workw.com/resignation','https://www.workw.com/attendance/checkinForApproval','https://www.workw.com/roster'],
            selectors: [
                '.list__item > .active', 
                '.list__item > .active', 
                '.list__item > .active', 
                '.list__item > .active',
                '.list__item > .active',
                '.list__item > .active'  
            ]
        })
    });

})

