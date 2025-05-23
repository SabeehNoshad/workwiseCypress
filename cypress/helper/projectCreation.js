function projectCreation(params) {
    cy.get('#name').type(params.name);
    cy.get('.ant-form-item-control-input-content > .ant-input-affix-wrapper').type(params.description);
    cy.get('#startEndDate').type(params.startDate);
    cy.get(':nth-child(3) > input').type(params.endDate);
    cy.get('.ant-form').click({force:true})
    cy.get('#categoryId').click();
    cy.get("div.ant-select-item-option-content")
    .contains(params.category)
    .should('be.visible')
    .click({force:true});
    cy.get(':nth-child(8) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tags > input')
    .type(params.member)
    cy.get('[style="display: flex; align-items: center;"]')
    .contains(params.member)
    .should('be.visible')
    .click({force:true});
    cy.get('.ant-form-item-control-input-content > .flex > .ant-btn').click({multiple:true});
}
module.exports = {projectCreation}