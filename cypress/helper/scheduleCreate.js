function schedule(params) {
    cy.get('#subject').type(params.subject);
    cy.get('.notranslate').type(params.description);
    if (params.type == "appointment") {
        cy.get('#scheduleType > :nth-child(2)').click()
     if(params.OnWorkcall=="yes"){
            cy.get(':nth-child(4) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn').click()
        }
     if (params.type == "boardmeeting") {
        cy.get('#scheduleType > :nth-child(3)').click();
        cy.get('.text-base').should('contain.text',"Board Meeting Agenda")
        cy.get('.max-w-3xl > .ant-btn').click();
        cy.get('#question-input-0').type('agenda 1{enter}')
     }
    }
   
    cy.get('#location').type(params.venue)
}
module.exports = {schedule}
