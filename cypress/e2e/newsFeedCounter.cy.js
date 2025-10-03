const { login } = require("../helper/login")
const { paragraph } = require("../helper/newsFeedHelper");


//date and time function 
function formatDateTime(date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0"); // month
  const dd = String(date.getDate()).padStart(2, "0");      // day
  const hh = String(date.getHours()).padStart(2, "0");     // hour
  const min = String(date.getMinutes()).padStart(2, "0");  // minutes
  const ss = String(date.getSeconds()).padStart(2, "0");   // seconds
  return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
}
describe('Newsfeed Counter', () => { 
    it('should open the PostCount Down Option',()=>{
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'))
         cy.get('.composer',{timeout:15000}).should('be.visible').click();
          cy.get('.ant-checkbox-wrapper').should('be.visible')
    })
    it('should be checked when clicked on post countdown option ',()=>{
      login(Cypress.env('adminemail'),Cypress.env('adminpassword'))
         cy.get('.composer',{timeout:15000}).should('be.visible').click();
         
          cy.get('.ant-checkbox-input').check().should('be.checked');
          })

    it.only('should create the postCount Down',()=>{
                 const now = new Date();

                     // Today
                     const todayStr = formatDateTime(now);

                      // Tomorrow + 30 minutes
                      const tomorrowPlus30 = new Date(now);
                      tomorrowPlus30.setDate(now.getDate() + 1);
                      tomorrowPlus30.setMinutes(now.getMinutes() + 30);
                      const tomorrowPlus30Str = formatDateTime(tomorrowPlus30);


      login(Cypress.env('adminemail'),Cypress.env('adminpassword'))
         cy.get('.composer',{timeout:15000}).should('be.visible').click();
         cy.get('.ant-form > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').type('test')
          cy.get('.ant-checkbox-input').check().should('be.checked');
          cy.get('.ant-picker-input > input').type(tomorrowPlus30Str)

        cy.get('.submit-wrapper > .ant-btn').click()  

           //checking and login the error from the system the method is in the / support/command.js
    cy.getErrorMessage().then((errorMessage) => {
    cy.log("Error Message: " + errorMessage);
    console.log("Error Message:", errorMessage);
    })
       cy.get('.ant-notification-notice').should('have.text','Successfully Posted');
 })
 });