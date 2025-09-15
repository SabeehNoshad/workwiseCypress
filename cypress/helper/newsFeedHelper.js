function paragraph(params) {
    const mainInput = '.ant-form > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)';
    cy.get(mainInput).type(params.text);

    if (params.tag === 'yes') {
        cy.get('.tags > input').type("hadiqa");
        cy.get('span.sc-jsEeTM.cwIgVV > div', { timeout: 10000 })
            .contains("hadiqa shakil", { timeout: 50000 })
            .should('be.visible')
            .click({ force: true });
    } else if (params.tag === 'poll') {
        cy.get(':nth-child(3) > .wrapper > span').should('be.visible').click();
        switch (params.number) {
            case "2":
                cy.get('.ant-form > :nth-child(2)').type("option 1");
                cy.get('.ant-form > :nth-child(3)').type("option 2");
               
                break;
            case "3":
                cy.get('.ant-form > :nth-child(2)').type("option 1");
                cy.get('.ant-form > :nth-child(3)').type("option 2");
                cy.get('.ant-form > :nth-child(4)').type("option 3");
                break;
            // Add more cases as needed
            default:
                cy.log("Unsupported poll option count");
        }
    }
}
module.exports = { paragraph };
