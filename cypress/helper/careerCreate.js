function createJobdescription(params) {
    //designation
    cy.get('ant-select-selection-search-input').click().type(params.name);
    cy.get('.ant-select-dropdown')
    .should('be.visible')
    .find('.ant-select-item-option-content')
    .contains(manager)
    .scrollIntoView()
    .click({force:true}); 
    // grade
    cy.get('ant-select-selection-search-input').click().type(params.grade);
    cy.get('.ant-select-dropdown')
    .should('be.visible')
    .find('.ant-select-item-option-content')
    .contains(manager)
    .scrollIntoView()
    .click({force:true});
    //job description
    cy.get('#createCareer_designationId').click().type();
    // salary range 
    cy.get('#createCareer_minSalary').type();
    cy.get('#createCareer_maxSalary').type();
    // department drop down
    cy.get('#createCareer_departmentId').click();
    cy.get('ant-select ant-select-lg ant-select-in-form-item ant-select-single ant-select-show-arrow').contains('IT').click();
    //select language    
    cy.get('.ant-select-selection-overflow').click();
    if(params.languages && params.languages.lenght > 0 ){
        params.languages.forEach((language)=>{
            cy.get('.ant-select-dropdown')
            .contains(params.language)
            .click(); 
        })
    }
    //selction of the education level 
    cy.get('.Education__Type > :nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click();
    cy.get('.ant-select-dropdown')
    .contains('Graduate')
    .click(); 
    // working type 
    cy.get('#createCareer_jobTypeId').click();
    cy.get('.ant-select-dropdown')
    .contains(params.workingType)
    .click(); 
    //working role 
    cy.get('#createCareer_jobTypeId').click();
    cy.get('.ant-select-dropdown')
    .contains(params.workingRole)
    .click(); 

    // select job shift
    cy.get('#createCareer_jobShiftId').click();
    cy.get('.ant-select-dropdown')
    .contains(params.shift)
    .click(); 
    // experiance 
    cy.get('#createCareer_experianceId').click();
    cy.get('.ant-select-dropdown')
    .contains(params.experiance)
    .click(); 
    // certification 
    if(params.certification && params.certification.lenght > 0 ){
        params.certification.forEach((certificate)=>{
    cy.get('').click().type();
    cy.get('').click()
        })
    };
    //travel requirments 
    cy.get('').click();
    cy.get('.ant-select-dropdown')
    .contains(params.travel)
    .click(); 
    // health insurance
     
    cy.get('').click();
    
    // leaves  
    if(params.leaves && params.leaves.lenght > 0 ){
        params.leaves.forEach((leave)=>{
    cy.get('').click().type();
    cy.get('').click()
        })
    };
    //click on department 
    cy.get('#createCareer_departmentId').click()
    cy.get(".ant-select-dropdown")
    .contains("IT")
    .click();

    // city country 
    cy.get('#createCareer_cityId').click()
    cy.get(".ant-select-dropdown")
    .contains(params.city)
    .click();

    // country
    cy.get('#createCareer_countryId').click()
    cy.get(".ant-select-dropdown")
    .contains(params.country)
    .click();

    //summary of the job 
    cy.get('.notranslate').click().type(params.description);

    //mission
       cy.get('.notranslate').click().type(params.mission);
    // vision 
       cy.get('.notranslate').click().type(params.vision);
    //values
       cy.get('.notranslate').click().type(params.values);
    // training on the job 
    cy.get("").click();
    
    }
module.exports={createJobdescription}