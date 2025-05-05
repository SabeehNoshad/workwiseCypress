const { login } = require("../helper/login");
const {trimmedText,randomName} = require("../helper/taskCreate")
const {schedule} = require("../helper/scheduleCreate")

describe("Schedule module", () => {
    Cypress.on('uncaught:exception',(err,runnable) => {
        cy.task('logError',{
          message: err.message,
          stack: err.stack,
          spec: runnable.titlePath().join(' >'),
           });
        return false
      })
it('should create a simple schedule', () => {
    login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
    cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
    cy.visit('https://www.workw.com/schedules?f=cal');
   // cy.get(':nth-child(1) > .active',{timeout:5000}).should('be.visible').click({force:true})
   cy.get('.ant-btn-square',{timeout:10000}).should("be.visible").click()
   cy.get('.ant-btn-square',{timeout:10000}).should("be.visible").click()
    schedule ({
        subject:randomName,
        description:trimmedText,
        type:"meeting",
        OnWorkcall:"es",
        venue:"workwise",
                 })
    cy.get(':nth-child(13) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click()
    cy.get('div.ant-notification-notice-with-icon').should('have.text','Schedule Created Successfully');
});
it('should create schedule for the type appointments', () => {
    login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
    cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
    cy.visit('https://www.workw.com/schedules?f=cal');
   // cy.get(':nth-child(1) > .active',{timeout:5000}).should('be.visible').click({force:true})
    cy.get('.ant-btn-square',{timeout:10000}).should("be.visible").click()
    cy.get('.ant-btn-square',{timeout:10000}).should("be.visible").click()
    schedule ({
        subject:randomName,
        description:trimmedText,
        type:"appointment",
        OnWorkcall:"yes",
        venue:"workwise",
                 })
    cy.get(':nth-child(13) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click()
    cy.get('div.ant-notification-notice-with-icon').should('have.text','Schedule Created Successfully');
});
it.only('should create the schedule for the board meetings', () => {
    login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
    cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
    cy.visit('https://www.workw.com/schedules?f=cal');
   // cy.get(':nth-child(1) > .active',{timeout:5000}).should('be.visible').click({force:true})
    cy.get('.ant-btn-square',{timeout:10000}).should("be.visible").click()
    cy.get('.ant-btn-square',{timeout:10000}).should("be.visible").click()
    schedule ({
        subject:randomName,
        description:trimmedText,
        type:"boardmeeting",
        OnWorkcall:"yes",
        venue:"workwise",
                 })
    cy.get(':nth-child(13) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click()
    cy.get('div.ant-notification-notice-with-icon').should('have.text','Schedule Created Successfully');
});
})