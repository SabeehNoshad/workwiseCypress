import { faker } from '@faker-js/faker';

const randomName = faker.person.firstName();

function rosterCreate(params) {
    cy.get("#title").type(randomName);
    
    cy.get('#shifts_0_minMembers').type('1');
    cy.get('#shifts_0_maxMembers').type('3')

    cy.get(".tags > input").type("hadiqa");
    cy.get('.sc-dmXWDj.ftUXiS.select-box-popup') // Target the dropdown container
   .should('be.visible') // Ensure it appears
    .contains('hadiqa') // Find the option
    .click({force:true});
  //  cy.get("contentBox > p:nth-child(1)").click();
    cy.get("#startDate")
    .click()
    cy.get('.ant-picker-today-btn')
    .click({force:true});
    cy.get('#numberOfDays').type("7")
   
    cy.get(".ant-btn-lg").click();
    
}
function rosterLargeselected(params) {
    cy.get("#title").type(randomName);
    
    cy.get('#shifts_0_minMembers').type('1');
    cy.get('#shifts_0_maxMembers').type('1')

    cy.get(".tags > input").type("hadiqa");
    cy.get('.sc-dmXWDj.ftUXiS.select-box-popup') // Target the dropdown container
   .should('be.visible') // Ensure it appears
    .contains('hadiqa') // Find the option
    .click({force:true});
    cy.get(".tags > input").type("james");
    cy.get('.sc-dmXWDj.ftUXiS.select-box-popup') // Target the dropdown container
   .should('be.visible') // Ensure it appears
    .contains('james') // Find the option
    .click({force:true});
    cy.get(".tags > input").type("Mike");
    cy.get('.sc-dmXWDj.ftUXiS.select-box-popup') // Target the dropdown container
   .should('be.visible') // Ensure it appears
    .contains('Mike') // Find the option
    .click({force:true});
    cy.get(".tags > input").type("john");
    cy.get('.sc-dmXWDj.ftUXiS.select-box-popup') // Target the dropdown container
   .should('be.visible') // Ensure it appears
    .contains('john') // Find the option
    .click({force:true});
  //  cy.get("contentBox > p:nth-child(1)").click();
    cy.get("#startDate")
    .click()
    cy.get('.ant-picker-today-btn')
    .click({force:true});
    cy.get('#numberOfDays').type("7")
   
    cy.get(".ant-btn-lg").click();
}
function rosterNoSelected(params) {
    cy.get("#title").type(randomName);
    
    cy.get('#shifts_0_minMembers').type('1');
    cy.get('#shifts_0_maxMembers').type('3')

 
    cy.get("#startDate")
    .click()
    cy.get('.ant-picker-today-btn')
    .click({force:true});
    cy.get('#numberOfDays').type("7")
   
    cy.get(".ant-btn-lg").click();
}
function roasterLessselected(params) {
    cy.get("#title").type(randomName);
    
    cy.get('#shifts_0_minMembers').type('2');
    cy.get('#shifts_0_maxMembers').type('3')

    cy.get(".tags > input").type("hadiqa");
    cy.get('.sc-dmXWDj.ftUXiS.select-box-popup') // Target the dropdown container
   .should('be.visible') // Ensure it appears
    .contains('hadiqa') // Find the option
    .click({force:true});
  //  cy.get("contentBox > p:nth-child(1)").click();
    cy.get("#startDate")
    .click()
    cy.get('.ant-picker-today-btn')
    .click({force:true});
    cy.get('#numberOfDays').type("7")
   
    cy.get(".ant-btn-lg").click();
    
}
function roasterminGreateMax(params) {
    cy.get("#title").type(randomName);
    
    cy.get('#shifts_0_minMembers').type('5');
    cy.get('#shifts_0_maxMembers').type('3')

    cy.get(".tags > input").type("hadiqa");
    cy.get('.sc-dmXWDj.ftUXiS.select-box-popup') // Target the dropdown container
   .should('be.visible') // Ensure it appears
    .contains('hadiqa') // Find the option
    .click({force:true});
  //  cy.get("contentBox > p:nth-child(1)").click();
    cy.get("#startDate")
    .click()
    cy.get('.ant-picker-today-btn')
    .click({force:true});
    cy.get('#numberOfDays').type("7")
   
    cy.get(".ant-btn-lg").click();
    
}
module.exports = {rosterCreate,rosterLargeselected,rosterNoSelected,roasterLessselected,roasterminGreateMax};