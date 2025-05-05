const { generateRandomText } = require("./nameTextgenerator");

function voucherDetailsDr(amount) {
    const narration = generateRandomText();
    const cheque = Math.random().toString(36).substring(2, 10); // Generates a random alphanumeric string

    cy.get('#rc_select_1').click({force:true}).type("test");
    cy.get('.ant-select-tree-treenode:nth-child(3) .ant-select-tree-title').click();
    
    // Cheque
    cy.get(':nth-child(1) > :nth-child(3) > input').type(cheque);
    
    // Narration
    cy.get(':nth-child(1) > :nth-child(4) > .w-full').type(narration);
    
    // Amount
    cy.get(':nth-child(1) > :nth-child(5) > input').type(amount);
}

function voucherDetailsCr(amount) {
    const narration = generateRandomText();
    const cheque = Math.random().toString(36).substring(2, 10); // Generates a random alphanumeric string

    cy.get('#rc_select_3').click({force:true,multiple:true}).type("test");
    cy.get('.ant-select-tree-treenode:nth-child(3) .ant-select-tree-title      ').click({multiple:true,force:true});
    
    // Cheque
    cy.get(':nth-child(2) > :nth-child(3) > input').type(cheque);
    
    // Narration
    cy.get(':nth-child(2) > :nth-child(4) > .w-full').type(narration);
    
    // Amount
    cy.get(':nth-child(2) > :nth-child(5) > input').type(amount);
    
    // Click on Cr
    cy.get(':nth-child(1) > :nth-child(6) > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
    cy.get('.ant-select-item-option-active > .ant-select-item-option-content').click();
}

// Export both functions correctly
module.exports = { voucherDetailsDr, voucherDetailsCr };
