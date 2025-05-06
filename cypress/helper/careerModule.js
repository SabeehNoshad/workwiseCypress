function careersform(params) {
    //designation 
    cy.get('#createCareer_designationId',{timeout:40000}).click();
    cy.get('.ant-select-dropdown',{timeout:400000})
    .should('be.visible')
    .find('.ant-select-item-option-content',{timeout:400000})
    .contains(params.designation)
    .scrollIntoView()
    .click({force:true}); 

    // grade
    cy.get('#createCareer_gradeId').click();
    cy.get('.ant-select-dropdown')
    .should('be.visible')
    .find('.ant-select-item-option-content')
    .contains(params.grades)
    .scrollIntoView()
    .click({force:true});

    //salaryRange 
    cy.get('#createCareer_minSalary').type(params.salarylo);
    cy.get('#createCareer_maxSalary').type(params.salaryup);

    //languages
    cy.get(':nth-child(4) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-overflow')
    .click();
    params.language.forEach(language => {
        cy.get(':nth-child(4) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-overflow')
        .type(`${language}{enter}`);
    })
    cy.get(':nth-child(4) > .ant-row > .ant-form-item-label').click();
    // working type 
    cy.get('#createCareer_workingType').click();
    cy.get('.ant-select-dropdown')
    .contains(params.workingType)
    .click(); 

    //probation period
    cy.get('#createCareer_probationPeriod').type(params.probation);

    //job type 
    cy.get('#createCareer_jobTypeId').click();
    cy.get('.ant-select-dropdown')
    .contains(params.jobType)
    .click(); 
    
    //job shift
    cy.get('#createCareer_jobShiftId').click();
    cy.get('.ant-select-dropdown')
    .contains(params.jobShift)
    .click(); 

    //certificate
    cy.get(':nth-child(11) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-wrap > .ant-select-selection-overflow')
    .click()
    if(params.certificate && params.certificate.lenght > 0 ){
        params.certificate.forEach((certificate)=>{
            cy.get('.ant-select-dropdown')
            .contains(params.certificate)
            .click(); 
        })
    }
    // travel requirment
    cy.get('#createCareer_travelRequirements').click()
    cy.get('.ant-select-dropdown')
    .contains(params.travelRequirement)
    .click(); 

    //leaves
    cy.get('#createCareer_leaves').type(params.leaves)

    //department
    cy.get('#createCareer_departmentId').click()
    cy.get('.ant-select-dropdown')
    .contains(params.department)
    .click(); 

    //city
    cy.get('#rc_select_25')
        .type(params.city)
       cy.get('div.flex.items-center.gap-1',{timeout:20000}).should('be.visible').click({multiple:true,force:true})


    //supervisor
    cy.get(':nth-child(16) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tags')
    .click().type(params.supervisor)
    cy.get('.ant-select-dropdown',{timeout:400000})
    .contains(params.supervisor)
    .click(); 

    //interviewer
    cy.get(':nth-child(17) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tags > input')
    .click().type(params.interviewer)
    cy.get('.ant-select-dropdown',{timeout:400000})
    .contains(params.interviewer)
    .click(); 

    //approver
    cy.get('.custom-label > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .tags > input')
    .click().type(params.approver)
    cy.get('.ant-select-dropdown',{timeout:400000})
    .contains(params.approver)
    .click(); 

    //education level
    cy.get('#createCareer_educationId').click()
    cy.get('.ant-select-dropdown',{timeout:400000})
    .contains(params.education)
    .click();
    
    //career level 
    cy.get('#createCareer_careerLevelId').click()
    cy.get('.ant-select-dropdown',{timeout:400000})
    .contains(params.career)
    .click();

    // end date
    cy.get('#createCareer_endDate').type(params.enddate)

}
module.exports = {careersform}