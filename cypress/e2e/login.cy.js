const { login } = require("../helper/login");
const { main } = require("../locators/mainLocators");

describe('login validation', () => {
  it('verification of the url', () => {
    cy.visit('https://www.workw.com');
    cy.url().should('contain','work').and('contain','login');
  });
  it('verification of the title', () => {
    cy.visit('https://www.workw.com');
    cy.title().should('contain','Workwise');
  });
});
describe('Login form', () => {
  it('contains the email field / pasword /  and button ', () => {
    cy.visit("https://www.workw.com");
    cy.get('[style="margin-bottom: 16px;"] > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type("workwise");
    cy.get(':nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type("Abc12345@");
    cy.get('.button').click()
  });
  it('login attemp with locator and encapsulation', () => {
    login('workwisetesting@gmail.com','Abc12345@');
    cy.url().should('equal','https://www.workw.com/login')
  
  });
});