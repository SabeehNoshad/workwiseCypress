import 'cypress-xpath';
import { generateRandomText } from '../helper/nameTextgenerator';
const { login } = require("../helper/login");

describe('chart of acounts use cases', () => {
    const name = generateRandomText(10)
  
    it('Creating duplicate accounts',{retries:2}, () => {
        login('workwisetesting@gmail.com', 'Abc12345@');

        cy.get(':nth-child(3) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(1) > a', { timeout: 10000 })
          .click();

        cy.xpath("//div[@id='section1']/div/div/div[2]/div/label/span[2]", { timeout: 10000 })
          .should('be.visible')
          .click();

        cy.get('#name').type("name");
        cy.get('#description').type("name");

        // Open the account type dropdown
        cy.get('.ant-form-item-control-input-content > .ant-select > .ant-select-selector').click();

        // Select 'Asset' from dropdown
        cy.get('.ant-select-dropdown')
          .should('be.visible')
          .find('.ant-select-item-option-content')
          .contains('Asset')
          .scrollIntoView()
          .click();

        // Ensure dropdown for #rc_select_3 is visible before typing
        cy.get('#rc_select_3', { timeout: 5000 })
        .should('exist')
          .should('be.visible')
          .click({ force: true }) // Force click in case Cypress fails
          .type('SM', { delay: 200 }) // Add delay to simulate user typing

        // Ensure the dropdown option appears
        cy.get('.ant-select-tree-node-content-wrapper-normal > .ant-select-tree-title')
        .should('exist')
          .should('be.visible')
          .click({ force: true });

        // Click the submit button
        cy.get('.ant-btn').click();

        // Assert the error message appears
        cy.get('.ant-message-custom-content > :nth-child(2)', {timeout: 10000})
        .should('exist')
        .then(($errorMessage) => {
          cy.log($errorMessage.text()); // Log the message to see what is returned
        });
         cy.get('.ant-message-custom-content > :nth-child(2)',{timeout:10000})
           .should('contain.text', 'ChartOfAccount Already Exists');
    });


   it('create chart of account with random name ',{retries:3}, () => {
        login('workwisetesting@gmail.com','Abc12345@');
     cy.get(':nth-child(3) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(1) > a',{timeout:10000}).click();
     cy.xpath("//div[@id='section1']/div/div/div[2]/div/label/span[2]", { timeout: 10000 })
        .should('be.visible')
        .click();
     cy.get('#name').type(name);
     cy.get('#description').type(name);
     cy.get('.ant-form-item-control-input-content > .ant-select > .ant-select-selector').click();
//    drop down for the acount type 
     cy.get('.ant-select-dropdown')
        .should('be.visible')
        .find('.ant-select-item-option-content')
        .contains('Asset')
        .scrollIntoView()
        .click();
     cy.get('#rc_select_3',{timeout:5000}).type('SM');
     cy.get('.ant-select-tree-node-content-wrapper-normal > .ant-select-tree-title').click();
     cy.get('.ant-btn').click()
    // verification of the created account from the get api
   });
      
     it('get action Chart of account ', () => {
            const token= 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMzRmYzZiOC1mNzcxLTQ2N2MtOTY1Yi0wYWNkYTE3MzdjMjAiLCJuYW1lIjoiV29yayBUZXN0IiwiaW1hZ2UiOiJodHRwczovL3dvcmt3LmNvbS9SZXNvdXJjZXNcXGRkZmUyMDJmLTUyMWUtNDNlMC1iZjZiLTYxZDZmNzIxMjNmMVxcSW1hZ2VzXFwyODdhNGY4NC1iYjcyLTQ1YWMtOTk3MS05MmJmMDQ1M2U1ZTIuanBnIiwiZW1haWwiOiJ3b3Jrd2lzZXRlc3RpbmdAZ21haWwuY29tIiwiYnVzaW5lc3NJZCI6ImRkZmUyMDJmLTUyMWUtNDNlMC1iZjZiLTYxZDZmNzIxMjNmMSIsInZlciI6IkU4MzEyQzJGLTcxMjktNDBEMy1BODAwLTFCNTZDNUQ2QTI4MiIsImloIjoiMjA4VUluVU96RFQ2dkJxNEd6enN1dzdUUWJSRlZIU3cwWk1wSStmOXRvaz0iLCJpcyI6IkYybW9PWE1RK1c5RHpmL1dVbUF5Znc9PSIsInBoIjoiV09GYnV5QWM2RUt2WCtlVk9MWjFvM2pEQjhsQUJoU1hNclNyREUyQUpoYz0iLCJwcyI6InEvaUNuQjdkcm50TDJRbEI3d1lGekE9PSIsImp0aSI6IjVkZWMyMWZmLWJhZWItNGFlYS05M2Y2LTkzOWQxNjNjYjFlMiIsIm5iZiI6MTczODU4MzMxNiwiZXhwIjoxNzM4NzU2MTE2fQ.kHVdqajkDGo0viHp4sgDLFL8-JRqcQdXiWf6ZS6lS9O7CZnqIV5tl04IHzfwrDL1PZlYPRXoNqLf-U_Cqj-vt7bVOp1XSdaSj43z1i6gBbwS05ESZ6_gykl6b1FBxwQRb4FEP2cnUmphphd0-4VVt8aV9XnNqzeqswQ7JKtMe5ayMvWM19kvPygXD4xWY9uukqnz6tWPDy0uKmPWpXWB8XvtFYynmuyitQYR2edGvCPVZT43qV4l9ne_nhNaojEveKugXh0NHgyU4WDOUR5pNcM2mlWgzjCza6_XVrr8vueoBZR8C30sjmZiKpenwIMAkal_t82qQZODiCPZ8ux2ag'
    
            cy.request({
                method:'GET',
                url:'https://workw.com/workwapi/api/ChartOfAccount/GetAllChartOfAccount',
                failOnStatusCode:false,
                headers:{
                    Authorization: `Bearer ${token}` 
                },
            }).then((response)=>{
                expect(response.status).to.eq(200);
                const accountNames = response.body.data.map(account => account.name);
                expect(accountNames).to.include(name);
            })
            
        });
    
});
// updating the chart of Account
describe('updation of the chart of account ',{retries:3}, () => {
  const token= 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMzRmYzZiOC1mNzcxLTQ2N2MtOTY1Yi0wYWNkYTE3MzdjMjAiLCJuYW1lIjoiV29yayBUZXN0IiwiaW1hZ2UiOiJodHRwczovL3dvcmt3LmNvbS9SZXNvdXJjZXNcXGRkZmUyMDJmLTUyMWUtNDNlMC1iZjZiLTYxZDZmNzIxMjNmMVxcSW1hZ2VzXFwyODdhNGY4NC1iYjcyLTQ1YWMtOTk3MS05MmJmMDQ1M2U1ZTIuanBnIiwiZW1haWwiOiJ3b3Jrd2lzZXRlc3RpbmdAZ21haWwuY29tIiwiYnVzaW5lc3NJZCI6ImRkZmUyMDJmLTUyMWUtNDNlMC1iZjZiLTYxZDZmNzIxMjNmMSIsInZlciI6IkU4MzEyQzJGLTcxMjktNDBEMy1BODAwLTFCNTZDNUQ2QTI4MiIsImloIjoiMjA4VUluVU96RFQ2dkJxNEd6enN1dzdUUWJSRlZIU3cwWk1wSStmOXRvaz0iLCJpcyI6IkYybW9PWE1RK1c5RHpmL1dVbUF5Znc9PSIsInBoIjoiV09GYnV5QWM2RUt2WCtlVk9MWjFvM2pEQjhsQUJoU1hNclNyREUyQUpoYz0iLCJwcyI6InEvaUNuQjdkcm50TDJRbEI3d1lGekE9PSIsImp0aSI6IjVkZWMyMWZmLWJhZWItNGFlYS05M2Y2LTkzOWQxNjNjYjFlMiIsIm5iZiI6MTczODU4MzMxNiwiZXhwIjoxNzM4NzU2MTE2fQ.kHVdqajkDGo0viHp4sgDLFL8-JRqcQdXiWf6ZS6lS9O7CZnqIV5tl04IHzfwrDL1PZlYPRXoNqLf-U_Cqj-vt7bVOp1XSdaSj43z1i6gBbwS05ESZ6_gykl6b1FBxwQRb4FEP2cnUmphphd0-4VVt8aV9XnNqzeqswQ7JKtMe5ayMvWM19kvPygXD4xWY9uukqnz6tWPDy0uKmPWpXWB8XvtFYynmuyitQYR2edGvCPVZT43qV4l9ne_nhNaojEveKugXh0NHgyU4WDOUR5pNcM2mlWgzjCza6_XVrr8vueoBZR8C30sjmZiKpenwIMAkal_t82qQZODiCPZ8ux2ag'

  it('updation on the front end ', () => {
    login('workwisetesting@gmail.com', 'Abc12345@');

    cy.get(':nth-child(3) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(1) > a', { timeout: 10000 })
      .click();
      cy.get('.ant-input').type("Test");
      cy.get('.anticon-edit > svg',{timeout:5000}).first().click();
      cy.get('#name')
      .click({force:true})
      .clear({force:true})
      .type("Test123");
      cy.get('#description').type("Owner's Equity")
      cy.get('.ant-btn').first().click();
      cy.get('.ant-input',{timeout:50000})
      .first()
      .should('be.visible')
      .clear()
      .click({force:true})
      .type("Test123");
      cy.get('.min-w-max',{timeout:50000}).should('contain.text','Test123');

  });
  it('updation call using the Api and verifying the response ', () => {
    cy.request({
      method:"Put",
      url:'https://workw.com/workwapi/api/ChartOfAccount/UpdateChartOfAccount',
      failOnStatusCode:false,
      headers:{
        Authorization: `Bearer ${token}` 
    },
      body:{
        id:'f2396273-d570-4716-9ebb-0632cc16bff0',
         name:"Test1",
        description:"Owner's Equity",
    
      
      }
    }).then((response)=>{
      expect(response.status).to.eq(200);
      expect(response.body.data.name).to.eq('Test1');
      expect(response.body.message).to.eq('success');
      expect(response.body.responseCode).to.eq(1001);
    })
  });
});
