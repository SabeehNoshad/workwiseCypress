const { main } = require("../locators/mainLocators")

  function login(username,password){
    cy.visit("https://www.workw.com");
    cy.get(':nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input',{timeout:10000}).should('be.visible').type(username);
    cy.get(':nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input',{timeout:10000}).should('be.visible').type(password);
    cy.get('.button').click()
}
module.exports = {login}

