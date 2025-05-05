const { createJobdescription } = require("../helper/careerCreate");
const { login } = require("../helper/login");
const {jobDescription} = require ("../helper/jobDescription");
const { trimmedText } = require("../helper/taskCreate");






describe('jobDescription module under administration ', () => {
  Cypress.on('uncaught:exception',(err,runnable) => {
    cy.task('logError',{
      message: err.message,
      stack: err.stack,
      spec: runnable.titlePath().join(' >'),
    
    });
    return false
  })
  it('should create with all mandatory fields ', () => {
    login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
    cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
   cy.visit('https://www.workw.com/administrator/job_skills');
   cy.get('.sc-emwzcK > :nth-child(1) > .ant-btn > span',{timeout:20000}).scrollIntoView().should('be.visible').click({force:true}); // click on the add job description 
   jobDescription({
      name:"manager1",
      grade:"Manager",
        designation:"Director",
        jobDescription:trimmedText,
        minSalary:"50000",
        maxSalary:"80000",
        department:"IT",
        languages:["English","Spanish"],
        education:"Under Graduate",
        workingType:"Hybrid",
        probationPeriod:"20",
        workingRole:"Full Time",
        shift:"Morning",
        experience:"3 - 5",
        hardSkills:["typing","playing","running","swimming"],
        softSkills:["typing","playing","running","swimming","reading"],
        travelReq:"70%",
        summary:trimmedText,
        certification:["certification1","certification2","certification3"],
        travel:"20%",
        leaves:"35",
        city:"karachi",
        country:"Pakistan",
        description:trimmedText,
        mission:trimmedText,
        vision:trimmedText,
        values:["randomName","keyBy","GamepadButton","gameboy"]

})
cy.get('.ant-form-item-control-input-content > .ant-btn').click()

  });
  it('should show all the validation messages ', () => {
    login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
    cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
   cy.visit('https://www.workw.com/administrator/job_skills');
   cy.get('.sc-emwzcK > :nth-child(1) > .ant-btn > span',{timeout:20000}).scrollIntoView().should('be.visible').click({force:true}); // click on the add job description 
   cy.get('.ant-form-item-control-input-content > .ant-btn').scrollIntoView().should('be.visible').click()

  
  });
   
})
describe('Api call for the Job Description module ', () => {
  let token;
  before(() => {
         
    cy.request({
        method: 'POST',
        url: 'https://www.workw.com/authapi/api/login', 
        body: {
            email: 'workwisetesting@gmail.com',
            password: 'Workwise123@'
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        token = response.body.data.accessToken; 
    });
});
  const addDescription = {
    certificate:"1",
    cityId:"697edc7a-c1ae-4af0-a0df-00019c517564",
  departmentId:"e5870a4d-7f96-4e86-b61a-50dab621ddd9",
    description: "<p>SZXFDCGHVJBNK,LM.</p>",
  designationId:"5d0788db-25a3-4900-a853-117f2c8e098a",
  experience:"1",
  gradeId:"a9320b88-035c-4658-b3ad-0c368948171f",
  hardSkill:"1",
  healthInsurance:false,
  jobShift:2,
  language:"'1",
  leaves:"25",
  maxSalary: "20",
  minSalary:"1",
  mission:"ASDFGHJKL",
  probationPeriod:"1",
  softSkill:"1",
  summaryOfTheJob:"SADFGHJKL",
  trainingOnTheJob:false,
  travelRequirements:"20",
  values:"HGL",
  vision:"ASDFGHJ",
  workingRole:"2",
  workingType:"2"
  }
  it.only('should HAVE proper responce on the Post Request', () => {
    cy.request({
      method:'POST',
      url:"https://workw.com/workwapi/api/JobDescription/AddJobDescription",
      failOnStatusCode:false,
      headers: {
        Authorization: `Bearer ${token}` // Attach the JWT token
    },
      body:addDescription,


    
    }).then((response)=>{
      expect(response.status).to.eq(400);
     // expect(response.body.message).to.eq("Job description already exists")
    })
    
  });
 
});
