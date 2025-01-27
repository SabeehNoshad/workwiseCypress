const { main } = require("../locators/mainLocators")

  function login(username,password){
    cy.visit("https://www.workw.com");
    cy.get('[style="margin-bottom: 16px;"] > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type(username);
    cy.get(':nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input').type(password);
    cy.get('.button').click()
}
module.exports = {login}

