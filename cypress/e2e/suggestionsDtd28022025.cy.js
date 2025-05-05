const cypress = require("cypress");
const { login } = require("../helper/login");

describe('Owais Bhaes | suggestions dtd 28/02/2025', () => {
    it('should have the refresh button next to the mail option in the nav bar ', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get(':nth-child(1) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(4) > a').contains("refresh")
    });

});