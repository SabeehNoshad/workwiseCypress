
const { login } = require("../helper/login");
import { faker } from '@faker-js/faker';
const {randomName,taskCreate,taskCreatedescriptio,taskCreateSubject25,taskCreateSubject50} = require("../helper/taskCreate");
const {scheduleCreate} = require("../helper/scheduleCreate")

const randomText = faker.lorem.paragraphs(5); // Generate paragraphs of text
const trimmedText = randomText.substring(0, 500); 
beforeEach(()=>{
    cy.viewport('macbook-15');
})
describe('Verification of the Notification counter newsfeed',{retries:2}, () => {
   
it('notification counter reset', () => {
    login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
    cy.get('[title="Notifications"] > img').click();
    cy.get('.approval_header_child2 > :nth-child(1)').click({force:true});
    cy.get('.inline-block').should('not.be.eq','5');
});

    it('upon creating feed task verifying the feed ', () => {
        login(Cypress.env('empemail'),Cypress.env('emppassword'));
        for (let i = 0; i < 5; i++) {
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false; // Prevents Cypress from failing the test
              });
              cy.get('.text-area').click({force:true});
        cy.get('.ant-form > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').type(trimmedText);
        cy.get('.submit-wrapper > .ant-btn').click();
        cy.get('.ant-notification-notice').should('have.text','Successfully Posted');
    }
    });
    it('should verify the count of the notification effected by the above test ', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.mr-2 > .ant-badge > .ant-scroll-number > .ant-scroll-number-only > .ant-scroll-number-only-unit').contains(5);
        cy.get('.inline-block').contains(5);
        cy.get('.inline-block').contains(5);


    });

});
describe('verification of the notification counter for the TASK ',{retries:2}, () => {
   
it('notification counter reset', () => {
    login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
    cy.get('[title="Notifications"] > img').click();
    cy.get('.approval_header_child2 > :nth-child(1)').click({force:true});
    cy.get('.inline-block').should('not.be.eq','5');
});

    it('upon creating task task verifying the task ', () => {
        login(Cypress.env('empemail'),Cypress.env('emppassword'));
        for (let i = 0; i < 5; i++) {
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false; // Prevents Cypress from failing the test
              });
              cy.get(':nth-child(1) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(11) > a').scrollIntoView().should('be.visible').click()
    cy.get('.buttons > :nth-child(2) > .ant-btn').click();
    cy.get(':nth-child(4) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tags > input').click().type("work");
    cy.get('[style="display: flex; align-items: center;"]').contains("Work Test").click({force:true})

    taskCreate();
    cy.get('.ant-form-item-control-input-content > .ant-btn').click();
    
    }
    });
    it('should verify the count of the notification effected by the above test ', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.mr-2 > .ant-badge > .ant-scroll-number > .ant-scroll-number-only > .ant-scroll-number-only-unit').contains(5);
        cy.get('.inline-block').contains(5);
        cy.get('.inline-block').contains(5);


    });
  
});
describe.skip('verification of the notification counter for the schedule ',{retries:2}, () => {
   
    it('notification counter reset', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('[title="Notifications"] > img').click();
        cy.get('.approval_header_child2 > :nth-child(1)').click({force:true});
        cy.get('.inline-block').should('not.be.eq','5');
    });
    // it has issues with the schedule composer there for will rectify it later 
        it('should increment the 3 counters upon sucessfull creation of the schedule ', () => {
            login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
            for (let i = 0; i < 5; i++) {
                Cypress.on('uncaught:exception', (err, runnable) => {
                    return false; // Prevents Cypress from failing the test
                  });
                  cy.get(':nth-child(1) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(2) > a').click()
                  cy.get('.ant-btn-square > span').contains('Create Schedule').click({force:true});
                  scheduleCreate();
                  cy.get(':nth-child(13) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click();
            }
        });
       
    });
    describe.only('verification of the notification counter for the schedule ',{retries:2}, () => {
   
        it('notification counter reset', () => {
            login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
            cy.get('[title="Notifications"] > img').click();
            cy.get('.approval_header_child2 > :nth-child(1)').click({force:true});
            cy.get('.inline-block').should('not.be.eq','5');
        });
        // it has issues with the schedule composer there for will rectify it later 
            it('should increment the 3 counters upon sucessfull creation of the schedule ', () => {
                login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
                for (let i = 0; i < 5; i++) {
                    Cypress.on('uncaught:exception', (err, runnable) => {
                        return false; // Prevents Cypress from failing the test
                      });
                      cy.get(':nth-child(1) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(2) > a').click()
                      cy.get('.ant-btn-square > span').contains('Create Schedule').click({force:true});
                      scheduleCreate();
                      cy.get(':nth-child(13) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click();
                }
            });
           
        });