const { login } = require("../helper/login");
const { rosterCreate, rosterNoSelected, rosterLargeselected, roasterLessselected } = require("../helper/rosterCreate");

describe('test cases for the rosters', () => {
    it('verification of the Create new shift', () => {
        login('workwisetesting@gmail.com','Abc12345@');
        cy.get(':nth-child(2) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(18) > a').click();
        cy.get('.list__item > .active').contains('Roster');
        cy.get('.buttons > div > .ant-btn').click();
        rosterCreate();
        cy.get(':nth-child(11) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click();
        cy.get('.ant-modal-header').should('be.visible').contains('Roster Preview');
     });
     it('should not create withouth mandatory fields', () => {
        login('workwisetesting@gmail.com','Abc12345@');
        cy.get(':nth-child(2) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(18) > a').click();
        cy.get('.list__item > .active').contains('Roster');
        cy.get('.buttons > div > .ant-btn').click();
        cy.get(':nth-child(11) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click();
        cy.get('#title_help > .ant-form-item-explain-error').should('have.text','Please enter shift title');
        cy.get('#shifts_0_help > :nth-child(1)').should('have.text','Min members required');
        cy.get('#employees_help > .ant-form-item-explain-error').scrollIntoView().should('be.visible').contains('Please select employees')
     });
     it('selected members should not be larger than the max', () => {
        login('workwisetesting@gmail.com','Abc12345@');
        cy.get(':nth-child(2) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(18) > a').click();
        cy.get('.buttons > div > .ant-btn').click();
        rosterLargeselected();
        cy.get(':nth-child(11) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click();
        cy.get('.ant-modal-header').should('not.be.visible');
     });
     it('should not create if the selected member is empty', () => {
        login('workwisetesting@gmail.com','Abc12345@');
        cy.get(':nth-child(2) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(18) > a').click();
        cy.get('.list__item > .active').contains('Roster');
        cy.get('.buttons > div > .ant-btn').click();
        rosterNoSelected();
        cy.get(':nth-child(11) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click();
        cy.get('#employees_help > .ant-form-item-explain-error').scrollIntoView().should('be.visible').contains('Please select employees')
     });
     it('should not create if the selected member is less than min', () => {
        login('workwisetesting@gmail.com','Abc12345@');
        cy.get(':nth-child(2) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(18) > a').click();
        cy.get('.list__item > .active').contains('Roster');
        cy.get('.buttons > div > .ant-btn').click();
        roasterLessselected();
        cy.get(':nth-child(11) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click();
        cy.get('.ant-modal-header').should('not.be.visible');
     });
     it('should not create if min value is larger than the max value ', () => {
        login('workwisetesting@gmail.com','Abc12345@');
        cy.get(':nth-child(2) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(18) > a').click();
        cy.get('.list__item > .active').contains('Roster');
        cy.get('.buttons > div > .ant-btn').click();
        roasterLessselected();
        cy.get(':nth-child(11) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click();
        cy.get('#shifts_0_help > :nth-child(1)').should('have.text','Min should be less than tha max');
     });
     it('should be able to edit the created roster', () => {
        
     });
     it('should be able to regenerate the roaster', () => {
        
     });
     it('should be able to allocate the members ', () => {
        
     });
     it('should be able to remove the members', () => {
        
     });
     it('alert should be send to the selected members ', () => {
        
     });
     it('rules should be visible to the selected members ', () => {
        
     });
     it('pop up alert messages should be there once roster is created ', () => {
            login('workwisetesting@gmail.com','Abc12345@');
            cy.get(':nth-child(2) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(18) > a').click();
            cy.get('.list__item > .active').contains('Roster');
            cy.get('.buttons > div > .ant-btn').click();
            rosterCreate();
            cy.get(':nth-child(11) > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click();
            cy.get('.ant-notification-notice').should('have.text','Successfully Created');
     });
});