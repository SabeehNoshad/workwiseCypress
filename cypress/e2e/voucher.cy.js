const { login } = require("../helper/login");
const voucherDetails = require("../helper/voucherDetails");


describe('Create Voucher Module', () => {
    it('verify clicking Create Voucher open a new form ', () => {
        login('workwisetesting@gmail.com','Abc12345@');
        cy.get(':nth-child(3) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(3) > a').click();
       // cy.get('.list__item > .active').should('be.visible').and('have,text','Create Voucher');
        cy.url().should('eq','https://www.workw.com/createVoucher')
    });
    it('mandatory field requirments',()=>{
        login('workwisetesting@gmail.com','Abc12345@'); 
        cy.get(':nth-child(3) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(3) > a').click();
        cy.get('.mt-5 > :nth-child(1) > :nth-child(2)').click();
        cy.url().should('eq','https://www.workw.com/createVoucher');
        cy.get('.ant-message-custom-content > :nth-child(2)').should('be.visible').and('have.text','Dr & Cr cannot be zero!');
    })
    it('verification of the alert messages ', () => {
        login('workwisetesting@gmail.com','Abc12345@');
        cy.get(':nth-child(3) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(3) > a').click();
      voucherDetails.voucherDetailsDr('100')
        cy.get('.mt-5 > :nth-child(1) > :nth-child(2)').click();
        cy.get('.ant-message-custom-content > :nth-child(2)').should('be.visible').and('have.text','Debit and Credit should be equal');
    });
    it.skip('verificaation of the sucessfull creation of the voucher', () => {
        login('workwisetesting@gmail.com','Abc12345@');
        cy.get(':nth-child(3) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(3) > a').click();
        voucherDetails.voucherDetailsDr('100')
       voucherDetails.voucherDetailsCr('100')
        cy.get().should('eq','0.00');
        cy.get('.mt-5 > :nth-child(1) > :nth-child(2)').click();
    });
});