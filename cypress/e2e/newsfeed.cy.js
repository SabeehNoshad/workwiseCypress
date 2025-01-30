const { login } = require("../helper/login");
const { main } = require("../locators/mainLocators");

describe('newsfeed module', () => {
    const postBody = {
        text:Math.random().toString(36).substring()
    }
    beforeEach(()=>{
        cy.viewport('macbook-15');
    })
    it('create a simple post', () => {
       login('workwisetesting@gmail.com','Abc12345@');
       
       cy.get('.composer',{timeout:10000}).should('be.visible').click();
       cy.get('.ant-form > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').type(postBody.text);
       cy.get('.submit-wrapper > .ant-btn').click();
       cy.get('.ant-notification-notice').should('have.text','Successfully Posted');
    });
    it('posting with the tag member only', () => {
        login('workwisetesting@gmail.com','Abc12345@');
        cy.get('.composer').should('be.visible').click();
        cy.get('.ant-form > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').type('this is @hadiqa shakil ');
       // cy.get('.ant-mentions-dropdown-menu-item-active .sc-gjLLEI').click();
        cy.get('.submit-wrapper > .ant-btn').click();
        cy.get('.ant-notification-notice').should('have.text','Successfully Posted');
    });
    it('creating simple pole without the description', () => {

        login('workwisetesting@gmail.com','Abc12345@');
        cy.get('.composer').should('be.visible').click();
        cy.get(':nth-child(3) > .wrapper').click();
        cy.get('.ant-form > :nth-child(2)').type(postBody.text);
        cy.get('.ant-form > :nth-child(3)').type(postBody.text);
        cy.get('.submit-wrapper > .ant-btn').click();
        cy.get().should('include.text',"please place the description")
    });
    it('creating poll 2 options and visible to none ', () => {
        login('workwisetesting@gmail.com','Abc12345@');
        cy.get('.composer').should('be.visible').click();
        cy.get(':nth-child(3) > .wrapper').click();
        cy.get('.ant-form > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').type(postBody.text);
        cy.get('.ant-form > :nth-child(2)').type(postBody.text);
        cy.get('.ant-form > :nth-child(3)').type(postBody.text);
        cy.get('.submit-wrapper > .ant-btn').click();
    });
    it('creating poll with 3 options', () => {
        login('workwisetesting@gmail.com','Abc12345@');
        cy.get('.composer').should('be.visible').click();
        cy.get(':nth-child(3) > .wrapper').click();
        cy.get('.ant-form > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').type(postBody.text);
        cy.get('.poll-options > :nth-child(1)')
        cy.get('.ant-form > :nth-child(2)').type(postBody.text);
        cy.get('.ant-form > :nth-child(3)').type(postBody.text);
        cy.get('.ant-form > :nth-child(4)').type(postBody.text);
        cy.get('.submit-wrapper > .ant-btn').click();
    });
    it('creating poll with 4 options', () => {
        login('workwisetesting@gmail.com','Abc12345@');
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
    it('remove poll ', () => {
        login('workwisetesting@gmail.com','Abc12345@');
        cy.get('.composer',{timeout:10000}).should('be.visible').click();
        cy.get(':nth-child(3) > .wrapper').click();
        cy.get('.ant-form > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').type(postBody.text);
        cy.get('.ant-form > :nth-child(2)').type(postBody.text);
        cy.get('.ant-form > :nth-child(3)').type(postBody.text);
        cy.get('.poll-options > :nth-child(2)').click();
        cy.get('.ant-form > :nth-child(2)').should('not.have.focus')
        
    });

});
describe('reruning the test on the iphone browser for the resaponsivness', () => {
    const postBody = {
        text:Math.random().toString(36).substring()
    }
    beforeEach(() => {
        cy.viewport('iphone-xr'); // Sets viewport before each test
    });
    it('create a simple post', () => {
       login('workwisetesting@gmail.com','Abc12345@');
       cy.get('.toggleButton > img').click();
       cy.get('.composer',{timeout:10000}).should('be.visible').click();
       cy.get('.ant-form > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').type(postBody.text);
       cy.get('.submit-wrapper > .ant-btn').click();
       cy.get('.ant-notification-notice').should('have.text','Successfully Posted');
    });
    it('posting with the tag member only', () => {
        login('workwisetesting@gmail.com','Abc12345@');
        cy.get('.toggleButton > img').click();
        cy.get('.composer').should('be.visible').click();
        cy.get('.ant-form > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').type('this is @hadiqa shakil ');
       // cy.get('.ant-mentions-dropdown-menu-item-active .sc-gjLLEI').click();
        cy.get('.submit-wrapper > .ant-btn').click();
        cy.get('.ant-notification-notice').should('have.text','Successfully Posted');
    });
    it('creating simple pole without the description', () => {

        login('workwisetesting@gmail.com','Abc12345@');
        cy.get('.toggleButton > img').click();
        cy.get('.composer').should('be.visible').click();
        cy.get(':nth-child(3) > .wrapper').click();
        cy.get('.ant-form > :nth-child(2)').type(postBody.text);
        cy.get('.ant-form > :nth-child(3)').type(postBody.text);
        cy.get('.submit-wrapper > .ant-btn').click();
        cy.get().should('include.text',"please place the description")
    });
    it('creating poll 2 options and visible to none ', () => {
        login('workwisetesting@gmail.com','Abc12345@');
        cy.get('.toggleButton > img').click();
        cy.get('.composer').should('be.visible').click();
        cy.get(':nth-child(3) > .wrapper').click();
        cy.get('.ant-form > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').type(postBody.text);
        cy.get('.ant-form > :nth-child(2)').type(postBody.text);
        cy.get('.ant-form > :nth-child(3)').type(postBody.text);
        cy.get('.submit-wrapper > .ant-btn').click();
    });
    it('creating poll with 3 options', () => {
        login('workwisetesting@gmail.com','Abc12345@');
        cy.get('.toggleButton > img').click();
        cy.get('.composer').should('be.visible').click();
        cy.get(':nth-child(3) > .wrapper').click();
        cy.get('.ant-form > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').type(postBody.text);
        cy.get('.poll-options > :nth-child(1)')
        cy.get('.ant-form > :nth-child(2)').type(postBody.text);
        cy.get('.ant-form > :nth-child(3)').type(postBody.text);
        cy.get('.ant-form > :nth-child(4)').type(postBody.text);
        cy.get('.submit-wrapper > .ant-btn').click();
    });
    it('creating poll with 4 options', () => {
        login('workwisetesting@gmail.com','Abc12345@');
        cy.get('.toggleButton > img').click();
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
    it('remove poll ', () => {
        login('workwisetesting@gmail.com','Abc12345@');
        cy.get('.toggleButton > img').click();
        cy.get('.composer',{timeout:10000}).should('be.visible').click();
        cy.get(':nth-child(3) > .wrapper').click();
        cy.get('.ant-form > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').type(postBody.text);
        cy.get('.ant-form > :nth-child(2)').type(postBody.text);
        cy.get('.ant-form > :nth-child(3)').type(postBody.text);
        cy.get('.poll-options > :nth-child(2)').click();
        cy.get('.ant-form > :nth-child(2)').should('not.have.focus')
        
    });
});