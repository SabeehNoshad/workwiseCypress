const { login } = require("../helper/login");

describe('validate the field text of CustomApproval/Expenses/Appraisals/Promotions/Warning/Bonus/Complains/Rewards/leaves/Careers/Salary/Loans/Resignation/QuotatinsPayroll', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    cy.task('logError', {
        message: err.message,
        stack: err.stack,
        spec: runnable.titlePath().join(' > '),
      });
    
    return false;
  });
  it('should have the correct fields in Custom Approvals', () => {
    login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
    cy.get(':nth-child(1) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(6) > a').click();
    cy.get('.buttons > div > .ant-btn').click();
    cy.get(':nth-child(1) > .ant-row > .ant-form-item-label > .ant-form-item-required',{timeout:5000}).should('be.visible').contains('Subject');
    cy.get(':nth-child(2) > .ant-form-item > .ant-row > .ant-form-item-label > .ant-form-item-required',{timeout:5000}).should('be.visible').contains('Category');
    cy.get('.w-full > .ant-row > .ant-form-item-label > label').contains('Amount')
    cy.get('label > .flex > :nth-child(1)').contains('Approvers')
    cy.get(':nth-child(5) > .ant-form-item > .ant-row > .ant-form-item-label > .ant-form-item-required').contains('Description');
  });
  it('should have the correct fields in Expense ', () => {
    login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
    cy.get(':nth-child(1) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(13) > a').click();
    cy.get('.buttons > div > .ant-btn').click();
    cy.get(':nth-child(3) > .ant-form-item > .ant-row > .ant-form-item-label > .ant-form-item-required').contains('Header');
   
    cy.get('.gap-1 > :nth-child(1) > .ant-form-item > .ant-row > .ant-form-item-label > .ant-form-item-required').contains('Amount')
    cy.get(':nth-child(6) > .ant-form-item > .ant-row > .ant-form-item-label > label > .flex > :nth-child(1)').contains('Approvers')
    cy.get(':nth-child(9) > .ant-form-item > .ant-row > .ant-form-item-label > .ant-form-item-required').contains('Description');
  });
  it('should have the correct fields in the Appraisal', () => {
    login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
    cy.get(':nth-child(2) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(2) > a').click();
    cy.get('.buttons > div > .ant-btn').click();
    cy.get('label > .flex > :nth-child(1)').contains('Approvers')
    
  });
  it('should have the correct fields in the Promotions', () => {
    login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
    cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
    cy.visit('https://www.workw.com/promotions')
    cy.get('.buttons > div > .ant-btn').click();
    cy.get(':nth-child(1) > .ant-row > .ant-form-item-label > .ant-form-item-required').contains('Promotion To');
    cy.get('label > .flex > :nth-child(1)').contains('Approvers')
    cy.get(':nth-child(5) > .ant-row > .ant-form-item-label > .ant-form-item-required').contains('Description');
  });
  it('should have the correct fields in the warning ', () => {
    login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
    cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
    cy.visit('https://www.workw.com/warnings')
    cy.get('.buttons > div > .ant-btn').click();
    cy.get(':nth-child(1) > .ant-row > .ant-form-item-label > .ant-form-item-required').contains('Category');
    cy.get('label > .flex > :nth-child(1)').contains('Approvers')
    cy.get(':nth-child(4) > .ant-row > .ant-form-item-label > .ant-form-item-required').contains('Description');
  });
  it('should have the correct fields in the Bonus', () => {
    login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
    cy.get(':nth-child(2) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(6) > a').click();
    cy.get('.buttons > div > .ant-btn').click();
    cy.get(':nth-child(3) > .ant-form-item > .ant-row > .ant-form-item-label > .ant-form-item-required').contains('Amount');
    cy.get('label > .flex > :nth-child(1)').contains('Approvers')
    
  });
  it('should have the correct fields in the Complain', () => {
    login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
    cy.get(':nth-child(2) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(8) > a').click();
    cy.get('.buttons > div > .ant-btn').click();
    cy.get(':nth-child(1) > .ant-row > .ant-form-item-label > .ant-form-item-required').contains('Category');
    cy.get('label > .flex > :nth-child(1)').contains('Approvers')
    cy.get(':nth-child(2) > .ant-row > .ant-form-item-label > .ant-form-item-required',{timeout:5000}).should('be.visible').contains('Complain of')
    cy.get(':nth-child(4) > .ant-row > .ant-form-item-label > .ant-form-item-required').contains('Description')
  });
  it('should have the correct fields in the Rewards', () => {
    login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
    cy.get(':nth-child(2) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(9) > a').click();
    cy.get('.buttons > div > .ant-btn').click();
    cy.get(':nth-child(1) > .ant-row > .ant-form-item-label > .ant-form-item-required').contains('Category');
    cy.get('label > .flex > :nth-child(1)').contains('Approvers')
    cy.get(':nth-child(4) > .ant-row > .ant-form-item-label > .ant-form-item-required').contains('Member')
    cy.get(':nth-child(3) > .ant-row > .ant-form-item-label > .ant-form-item-required').contains('Reason')
    cy.get(':nth-child(6) > .ant-row > .ant-form-item-label > .ant-form-item-required').contains('Description')
  });
  it('should have the correct fields in the leaves', () => {
    login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
    cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
    cy.visit('https://www.workw.com/leaves')
    cy.get('.buttons > div > .ant-btn').click();
    cy.get(':nth-child(6) > .ant-form-item > .ant-row > .ant-form-item-label > label').contains('Leave Dates');
    cy.get('label > .flex > :nth-child(1)').contains('Approvers')
    cy.get(':nth-child(5) > .ant-row > .ant-form-item-label > .ant-form-item-required').contains('Description')
  });
  it('should have the correct fields in the Careers', () => {
    login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
    cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
    cy.visit('https://www.workw.com/careers')
    cy.get('.buttons > .ant-btn').click();
   
    cy.get('label > .flex > :nth-child(1)').contains('Approvers')
    cy.get(':nth-child(29) > .ant-row > .ant-form-item-label > label').contains('Job Description')
  });
  it('should have the correct fields in the Salary', () => {
    login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
    cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
    cy.visit('https://www.workw.com/salary')
    cy.get(':nth-child(1) > .ant-btn').click({force:true,multiple:true});
   
    cy.get('label > .flex > :nth-child(1)').contains('Approvers')
    
  });
  it('should have the correct fields in the Loan', () => {
    login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
    cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
    cy.visit('https://www.workw.com/loan')
    cy.get('.buttons > div > .ant-btn').click();
   
    cy.get('label > .flex > :nth-child(1)').contains('Approvers')
  });
  it('should have the correct fields in the resignation ', () => {
    login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
    cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
    cy.visit('https://www.workw.com/resignation')
    cy.get('.buttons > div > .ant-btn').click();
   
    cy.get(':nth-child(9) > .ant-row > .ant-form-item-label > label > .flex > span').contains('Approvers')
  });
  it('should have the correct fields in the quotation', () => {
    login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
    cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
    cy.visit('https://www.workw.com/quotation')
    cy.get('a > .ant-btn > span').click({force:true})
   
    cy.get('label > .flex > :nth-child(1)').contains('Approvers')
  });
})
