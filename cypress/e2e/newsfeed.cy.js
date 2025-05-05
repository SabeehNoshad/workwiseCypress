const { login } = require("../helper/login");
const { main } = require("../locators/mainLocators");
const {trimmedText} = require ("../helper/taskCreate");
const { paragraph } = require("../helper/newsFeedHelper");


describe('Newsfeed module', () => {
    const postBody = {
        text:Math.random().toString(36).substring()
    }
    beforeEach(()=>{
        cy.viewport('macbook-15');
    })
    it('should create a simple post', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
       
       cy.get('.composer',{timeout:10000}).should('be.visible').click();
       paragraph  ({ 
        text:trimmedText,
        tag:"no"
      })
       cy.get('.submit-wrapper > .ant-btn').click();
       cy.get('.ant-notification-notice').should('have.text','Successfully Posted');
    });
    it('should create posting with the tag member only ', () => {
       login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.composer',{timeout:10000}).should('be.visible').click();
        paragraph  ({
            text:trimmedText,
            tag:"yes"
          })
      
        cy.get('.submit-wrapper > .ant-btn').click();
        cy.get('.ant-notification-notice').should('have.text','Successfully Posted');
    });
    it('should creating simple pole without the description// no error and loader is shown ', () => {

        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.composer',{timeout:10000}).should('be.visible').click();
        cy.get(':nth-child(3) > .wrapper',{timeout:5000}).click();
        paragraph  ({
            text:trimmedText,
            tag:"poll",
            number:"2"
          })
        cy.get('.submit-wrapper > .ant-btn').click();
       
    });
    it('should create poll 2 options and visible to none ', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.composer').should('be.visible').click();
        cy.get(':nth-child(3) > .wrapper').click();
        paragraph  ({
            text:trimmedText,
            tag:"poll",
            number:"2"
          })
        cy.get('.submit-wrapper > .ant-btn').click();
    });
    it('should create poll with 3 options', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.composer').should('be.visible').click();
        cy.get(':nth-child(3) > .wrapper').click();
        cy.get('.poll-options > :nth-child(1)')
        paragraph  ({
            text:trimmedText,
            tag:"poll",
            number:"3"
          })
        cy.get('.submit-wrapper > .ant-btn').click();
    });
    it('should create poll with 4 options', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.composer').should('be.visible').click();
        cy.get(':nth-child(3) > .wrapper').click();
        cy.get('.ant-form > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').type(postBody.text);
        cy.get('.poll-options > :nth-child(1)');
        cy.get('.poll-options > :nth-child(1)')
        cy.get('.ant-form > :nth-child(2)').type(postBody.text);
        cy.get('.ant-form > :nth-child(3)').type(postBody.text);
        cy.get('.ant-form > :nth-child(4)').type(postBody.text);
        cy.get('.ant-form > :nth-child(5)').type(postBody.text);
        cy.get('.submit-wrapper > .ant-btn').click();
    });
    it('should remove poll ', () => {
       login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.composer',{timeout:10000}).should('be.visible').click();
        cy.get(':nth-child(3) > .wrapper').click();
        cy.get('.ant-form > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').type(postBody.text);
        cy.get('.ant-form > :nth-child(2)').type(postBody.text);
        cy.get('.ant-form > :nth-child(3)').type(postBody.text);
        cy.get('.poll-options > :nth-child(2)').click();
        cy.get('.ant-form > :nth-child(2)').should('not.have.focus')
        
    });

});
describe('Newsfeed on Mobile Layout ', () => {
    const postBody = {
        text:Math.random().toString(36).substring()
    }
    beforeEach(() => {
        cy.viewport('iphone-xr'); // Sets viewport before each test
    });
    it('should create a simple post', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
       cy.get('.composer',{timeout:10000}).should('be.visible').click();
       cy.get('.ant-form > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').type(postBody.text);
       cy.get('.Post-wrapper-Btn > .ant-btn').click();
       cy.get('.ant-notification-notice').should('have.text','Successfully Posted');
    });
    it('should create posting with the tag member only', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.composer').should('be.visible').click();
        cy.get('.ant-form > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').type('this is @hadiqa shakil ');
       // cy.get('.ant-mentions-dropdown-menu-item-active .sc-gjLLEI').click();
       cy.get('.Post-wrapper-Btn > .ant-btn').click();
        cy.get('.ant-notification-notice').should('have.text','Successfully Posted');
    });
    it('should create simple pole without the description', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.composer').should('be.visible').click();
        cy.get(':nth-child(3) > .wrapper').click();
        cy.get('.ant-form > :nth-child(2)').type(postBody.text);
        cy.get('.ant-form > :nth-child(3)').type(postBody.text);
        cy.get('.Post-wrapper-Btn > .ant-btn').click();
      
    });
    it('should create poll 2 options and visible to none ', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.composer').should('be.visible').click();
        cy.get(':nth-child(3) > .wrapper').click();
        cy.get('.ant-form > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').type(postBody.text);
        cy.get('.ant-form > :nth-child(2)').type(postBody.text);
        cy.get('.ant-form > :nth-child(3)').type(postBody.text);
        cy.get('.Post-wrapper-Btn > .ant-btn').click();
    });
    it('should create poll with 3 options', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.composer').should('be.visible').click();
        cy.get(':nth-child(3) > .wrapper').click();
        cy.get('.ant-form > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').type(postBody.text);
        cy.get('.poll-options > :nth-child(1)').click()
        cy.get('.ant-form > :nth-child(2)').type(postBody.text);
        cy.get('.ant-form > :nth-child(3)').type(postBody.text);
        cy.get('.ant-form > :nth-child(4)').type(postBody.text);
        cy.get('.Post-wrapper-Btn > .ant-btn').click();
    });
    it('should create poll with 4 options', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.composer').should('be.visible').click();
        cy.get(':nth-child(3) > .wrapper').click();
        cy.get('.ant-form > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').type(postBody.text);
        cy.get('.poll-options > :nth-child(1)').click();
        cy.get('.poll-options > :nth-child(1)').click();
        cy.get('.ant-form > :nth-child(2)').type(postBody.text);
        cy.get('.ant-form > :nth-child(3)').type(postBody.text);
        cy.get('.ant-form > :nth-child(4)').type(postBody.text);
        cy.get('.ant-form > :nth-child(5)').type(postBody.text);
        cy.get('.Post-wrapper-Btn > .ant-btn').click();
    });
    it('should remove poll ', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.composer',{timeout:10000}).should('be.visible').click();
        cy.get(':nth-child(3) > .wrapper').click();
        cy.get('.ant-form > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').type(postBody.text);
        cy.get('.ant-form > :nth-child(2)').type(postBody.text);
        cy.get('.ant-form > :nth-child(3)').type(postBody.text);
        cy.get('.poll-options > :nth-child(2)').click();
    
        
    });
});