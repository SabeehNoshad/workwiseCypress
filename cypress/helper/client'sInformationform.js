

const values ={
    name:{
        first:'laptops',
        second:'phones',
        third:'monitors',
        fourth:'cables',
    },
    price:{
        first:'80000',
        second:'100000',
        third:'66000',
        fourth:'12500',
    },
    quantity:{
        first:'20',
        second:'22',
        third:'65',
        fourth:'11',
    },
    tax:{
        first:'12.5',
        second:'17.35',
        third:'17.45',
        fourth:'20',
    }
};




function client(subject,name,email,number){
  cy.get('#addQuotation_subject').first().type(subject);
  cy.get('#addQuotation_name').type(name);
  cy.get('#addQuotation_email').type(email);
  cy.get('.form-control').type(number);
  
  cy.get('#addQuotation_quotationDate').click().type('2025-03-03');
  cy.get('#addQuotation_deliveryDate').click() .type('2025-05-01');
  cy.get('.ant-radio-wrapper:nth-child(1) .ant-radio-input').click();

  cy.get('.quotationRow:nth-child(1) > td:nth-child(2) > input').type(values.name.first);
  cy.get('.quotationRow:nth-child(1) > td:nth-child(3) > input').type(values.price.first);
  cy.get(".quotationRow:nth-child(1) > td:nth-child(4) > input").type(values.quantity.first);
  cy.get(':nth-child(1) > :nth-child(5) > input').type(values.tax.first);
  
  cy.get('.quotationRow:nth-child(2) > td:nth-child(2) > input').type(values.name.second);
  cy.get('.quotationRow:nth-child(2) > td:nth-child(3) > input').type(values.price.second);
  cy.get('.quotationRow:nth-child(2) > td:nth-child(4) > input').type(values.quantity.second);
  cy.get(':nth-child(2) > :nth-child(5) > input').type(values.tax.second);

  cy.get('.quotationRow:nth-child(3) > td:nth-child(2) > input').type(values.name.third);
  cy.get('.quotationRow:nth-child(3) > td:nth-child(3) > input').type(values.price.third);
  cy.get('.quotationRow:nth-child(3) > td:nth-child(4) > input').type(values.quantity.third);
  cy.get(':nth-child(3) > :nth-child(5) > input').type(values.tax.third);

  cy.get('.quotationRow:nth-child(4) > td:nth-child(2) > input').type(values.name.fourth);
  cy.get('.quotationRow:nth-child(4) > td:nth-child(3) > input').type(values.price.fourth);
  cy.get('.quotationRow:nth-child(4) > td:nth-child(4) > input').type(values.quantity.fourth);
  cy.get(':nth-child(4) > :nth-child(5) > input').type(values.tax.fourth);
}
module.exports = {client}