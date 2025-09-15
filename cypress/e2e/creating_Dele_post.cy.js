const { login } = require("../helper/login")
const {trimmedText} = require ("../helper/taskCreate");
const { paragraph } = require("../helper/newsFeedHelper");
const {trimSubject}= require('../helper/taskCreate');


function create(params) {
    login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
          cy.get('.composer',{timeout:15000}).should('be.visible').click();
       paragraph  ({ 
        text:"trimSubject",
        tag: params.tag,
        number:params.number
      })
       cy.get('.submit-wrapper > .ant-btn').click();
       cy.get('.ant-notification-notice').should('have.text','Successfully Posted');
  
}
function deleteVerification(params) {
    cy.get('.post-header > .ml-auto > .flex > .docsPopover > .menuIcon > img').should('be.visible').first().click()
       cy.get('.flex > span').should('be.visible').click();
       cy.get('.ant-btn-primary > span').should('be.visible').click();
}
describe('Deletion of the post ', () => { 

    it("should create/delete the post sucessfully",()=>{
        create({
         tag:"no"
        });
          deleteVerification();
      
       
       })
       it('should create/delete the post with member sucessfully',()=>{
          create({
            tag:"yes"
          })
          deleteVerification();
       })
       it.only('should create/delete the poll sucessfully',()=>{
          create({
            tag:"poll",
            number:'2'
          })
          
       })
                                        })