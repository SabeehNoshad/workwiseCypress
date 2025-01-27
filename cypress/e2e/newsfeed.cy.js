const { login } = require("../helper/login");
const { main } = require("../locators/mainLocators");

describe('newsfeed module', () => {
    const postBody = {
        text:Math.random().toString(36).substring()
    }
    it('create a simple post', () => {
       login('workwisetesting@gmail.com','Abc12345@');
       cy.get('.text-area').click();
       cy.get('.ant-form > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').type(postBody.text);
       cy.get('.submit-wrapper > .ant-btn').click();
       cy.get('.ant-notification-notice').should('have.text','Successfully Posted');
    });
    it('posting with the tag member only', () => {
        login('workwisetesting@gmail.com','Abc12345@');
        cy.get('.text-area').click();
        cy.get('.ant-form > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').type('thu is @hadiqa shakil ');
       // cy.get('.ant-mentions-dropdown-menu-item-active .sc-gjLLEI').click();
        cy.get('.submit-wrapper > .ant-btn').click();
        cy.get('.ant-notification-notice').should('have.text','Successfully Posted');
    });
});