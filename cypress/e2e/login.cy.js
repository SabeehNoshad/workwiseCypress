const { login } = require("../helper/login");
const { main } = require("../locators/mainLocators");

describe('login validation', () => {
  it('should verify of the url', () => {
    cy.visit('https://www.workw.com');
    cy.url().should('contain','work').and('contain','login');
  });
  it('should verify of the title', () => {
    cy.visit('https://www.workw.com');
    cy.title().should('contain','Workwise');
  });
});
describe('Login Use cases', () => {
  it('should contains the email field / pasword /  and button ', () => {
    cy.visit("https://www.workw.com");
    cy.get(':nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type("workwise");
    cy.get(':nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type("Abcd1234@");
    cy.get('.button').click()
  });
  it('should login attemp with locator and encapsulation', () => {
    login('workwisetesting@gmail.com','Abcd1234@');
    cy.url().should('equal','https://www.workw.com/login')
  
  });
});