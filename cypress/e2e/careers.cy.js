const { login } = require("../helper/login");
const {careersform} = require("../helper/careerModule")
const {randomNumber,randomDateSimple} = require("../helper/taskCreate")

describe('Careers module', () => {
    it('creation of career',{retries:1}, () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
        cy.get('.userDetails__body > .name',{timeout:10000}).should('be.visible'); 
        cy.visit('https://www.workw.com/careers');
        cy.get('.buttons > .ant-btn').should("be.visible").click();
        careersform ({
            designation : '4',
            grades: "Office Assistant",
            salarylo: randomNumber,
            salaryup: randomNumber,
            language: ["english" , "urdu" , "czech" , "french" , "spanish"],
            workingType: "Hybrid",
            probation: "30",
            jobType: "Part Time",
            jobShift: "Morning",
            certificate:["programing" , "ISTQB" , "HRM" , "FireSafety"],
            travelRequirement : "30",
            leaves: "30",
            department: "Admin",
            city: "Karachi",
            supervisor:"hadiqa shakil",
            interviewer: "hadiqa shakil",
            approver: "hadiqa shakil",
            education: "Bechlors",
            career: "Mid Level",
            enddate : randomDateSimple
        })
        cy.get('.ant-form-item-control-input-content > .ant-btn').click()
    });
});