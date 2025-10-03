const { login } = require("../helper/login");
const {randomName,taskCreate,taskCreatedescriptio,taskCreateSubject25,taskCreateSubject50} = require("../helper/taskCreate");

describe('Task module Type General', () => {
  let errorMessage
  it('should check for the correct url', () => {
    login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
      cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
    cy.visit('https://www.workw.com/tasks')
    cy.url().should('eq','https://www.workw.com/tasks')
  });
  it('should not create without mandatory fields', () => {
    login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
     cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
    cy.visit('https://www.workw.com/tasks')
    cy.get('.buttons > :nth-child(2) > .ant-btn').click();
    cy.get('.ant-form-item-control-input-content > .ant-btn').click();
    cy.get('#createTask_subject_help > .ant-form-item-explain-error').should('have.text','Subject Required');
    cy.get('#createTask_description_help > .ant-form-item-explain-error').should('have.text','Enter Description')
    });
    it('showld create task with only mandatory fields', () => {
      login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
      cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
    cy.visit('https://www.workw.com/tasks')
    cy.get('.buttons > :nth-child(2) > .ant-btn').click();
    taskCreate();
    cy.get('.ant-form-item-control-input-content > .ant-btn').click();
    
    });
    it('should create with desc of 500 characters', () => {
      login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
       cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
    cy.visit('https://www.workw.com/tasks')
      cy.get('.buttons > :nth-child(2) > .ant-btn').click();
      taskCreatedescriptio();
      cy.get('.ant-form-item-control-input-content > .ant-btn').click();
      cy.get('.ant-drawer-header').should('be.visible');
    
      //checking and login the error from the system the method is in the / support/command.js
    cy.getErrorMessage().then((errorMessage) => {
    cy.log("Error Message: " + errorMessage);
    console.log("Error Message:", errorMessage);
    })
  
  cy.get('.ant-notification-notice-description',{timeout:3000}).should('have.text','Task Created Successfully');
    });
    it('should create with the subject character limit of the 25 ', () => {
      login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
       cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
    cy.visit('https://www.workw.com/tasks')
      cy.get('.buttons > :nth-child(2) > .ant-btn').click();
      taskCreateSubject25();
      cy.get('.ant-form-item-control-input-content > .ant-btn').click();

         //checking and login the error from the system the method is in the / support/command.js
    cy.getErrorMessage().then((errorMessage) => {
    cy.log("Error Message: " + errorMessage);
    console.log("Error Message:", errorMessage);
    })
      cy.get('.ant-notification-notice-description',{timeout:3000}).should('have.text','Task Created Successfully');
    });
    it('should create with the subject character limit of the 50 ', () => {
      login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
       cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
    cy.visit('https://www.workw.com/tasks')
      cy.get('.buttons > :nth-child(2) > .ant-btn').click();
      taskCreateSubject50();
      cy.get('.ant-form-item-control-input-content > .ant-btn').click();

         //checking and login the error from the system the method is in the / support/command.js
    cy.getErrorMessage().then((errorMessage) => {
    cy.log("Error Message: " + errorMessage);
    console.log("Error Message:", errorMessage);
    })
      cy.get('.ant-notification-notice-description',{timeout:3000}).should('have.text','Task Created Successfully');
    });
})

describe('Task module Type project', () => {
  beforeEach(()=>{
    cy.viewport('macbook-15');
})
 
  it('should not create without mandatory fields', () => {
    login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
     cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
    cy.visit('https://www.workw.com/tasks')
    cy.get('.buttons > :nth-child(2) > .ant-btn').click();
    cy.get('.ant-form-item-control-input-content > .ant-btn').click();
    cy.get('#createTask_subject_help > .ant-form-item-explain-error').should('have.text','Subject Required');
    cy.get('#createTask_description_help > .ant-form-item-explain-error').should('have.text','Enter Description')
    });
    it('should create task with only mandatory fields', () => {
      login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
     cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
    cy.visit('https://www.workw.com/tasks')
    cy.get('.buttons > :nth-child(2) > .ant-btn').click();
    cy.get('#createTask_referenceType > :nth-child(2)').click({force:true})
    cy.get(':nth-child(4) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tags',{timeout:5000}).click({force:true}).type('Testt')
    cy.get('[style="display: flex; align-items: center;"]').contains("Testt").scrollIntoView().click({force:true});
    taskCreate();
    cy.get('.ant-form-item-control-input-content > .ant-btn').click();
    cy.get('.ant-form-item-control-input-content > .ant-btn').click()

       //checking and login the error from the system the method is in the / support/command.js
    cy.getErrorMessage().then((errorMessage) => {
    cy.log("Error Message: " + errorMessage);
    console.log("Error Message:", errorMessage);
    })
    cy.get('.ant-message-custom-content > :nth-child(2)').contains('Task created Sucessfull')
    cy.get('.ant-notification-notice-description').contains('Task created Sucessfull')
  //  checking in the projects is it created or not 
     cy.get('.list__item > .active').click();
     cy.get('.ant-input').click({multiple:true,force:true}).type(randomName);
     cy.get('.flex-1 > :nth-child(1)').contains(randomName).click();
 
    });
  
})
