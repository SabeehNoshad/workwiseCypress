
const { trimmedText } = require("./taskCreate");

function jobDescription(params) {
    cy.get('#createJobDescription_designationId').click().type(params.designation);
    cy.get('div.ant-select-item-option-content').contains(params.designation).should('be.visible').click({force:true})
    // Select grade
    cy.get(':nth-child(2) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-item') .type(params.grade);
    
    //  Wait for and click the option
      cy.get('div.ant-select-item-option-content',{timeout:10000})
        .contains(params.grade)
        .should('be.visible')
        .click({ force: true });

        //min salary
        cy.get('#createJobDescription_minSalary').type(params.minSalary);
        cy.get('#createJobDescription_maxSalary').type(params.maxSalary);

        //language
        params.languages.forEach(language => {
            cy.get(':nth-child(4) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-overflow')
            .type(`${language}{enter}`);
        })
        cy.get(':nth-child(4) > .ant-row > .ant-form-item-label').click();

        //Education
        cy.get('#createJobDescription_educationId')
        .click();
        cy.get('div.ant-select-item-option-content')
        .contains(params.education)
        .should('be.visible')
        .click({force:true});
       
        //working type 
        cy.get(':nth-child(6) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-item')
        .click()
        cy.get('div.ant-select-item-option-content')
        .contains(params.workingType)
        .should('be.visible')
        .click({force:true})
       
        //probation period
        cy.get('#createJobDescription_probationPeriod')
        .type(params.probationPeriod)

        //working role
        cy.get(':nth-child(8) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-item')
        .click()
        cy.get('div.ant-select-item-option-content')
        .contains(params.workingRole)
        .click({force:true});

        //job shift
        cy.get(':nth-child(9) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-item')
        .click();
        cy.get('div.ant-select-item-option-content')
        .contains(params.shift)
        .click({force:true});

        //experience
        cy.get('#createJobDescription_experience')
        .type(params.experience);
        
        //hard skills 
        params.hardSkills.forEach(hardSkills => {
        cy.get(':nth-child(11) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-overflow')
        .scrollIntoView()
        .type(`${hardSkills}{enter}`)
        cy.get(':nth-child(11) > .ant-row > .ant-form-item-label > label').click()
    })

        //softskills
        params.softSkills.forEach(softSkills =>{
            cy.get(':nth-child(12) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-overflow',{timeout:5000})
            .type(`${softSkills}{enter}`)
            cy.get(':nth-child(12) > .ant-row > .ant-form-item-label > label').click();
        })

        //certificate
        params.certification.forEach(certification => {
            cy.get(':nth-child(13) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-overflow')
            .type(`${certification}{enter}`) 
            cy.get(':nth-child(13) > .ant-row > .ant-form-item-label > .ant-form-item-required').click();
        })

        //travel requirments
        cy.get('#createJobDescription_travelRequirements')
        .click();
        cy.get("div.ant-select-item-option-content")
        .contains(params.travelReq)
        .should('be.visible')
        .click({force:true});

        //leaves
        cy.get('#createJobDescription_leaves')
        .type(params.leaves);

        //department
        cy.get('#createJobDescription_departmentId').click()
        cy.get("div.ant-select-item-option-content")
        .contains(params.department)
        .click({force:true})

        //city
        cy.get(':nth-child(1) > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-item')
        .type(params.city)
       cy.get('div.ant-select-item-option-content > div.flex.gap-1.items-center',{timeout:20000}).should('be.visible').click({force:true})

        // summary of the job
        cy.get('#createJobDescription_summaryOfTheJob')
        .type(params.summary);

        //mission
        cy.get("#createJobDescription_mission")
        .type(params.mission);

        //vision
        cy.get("#createJobDescription_vision")
        .type(params.vision);
        // values
        params.values.forEach(values => {
            cy.get(':nth-child(21) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-overflow')
            .type(`${values}{enter}`)
        })

        //description\
        cy.get('div.notranslate.public-DraftEditor-content')
        .type(params.description)
}
module.exports = { jobDescription };