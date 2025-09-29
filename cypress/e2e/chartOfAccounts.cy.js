import { faker } from '@faker-js/faker';
import 'cypress-xpath';
import { generateRandomText } from '../helper/nameTextgenerator';
const { login } = require("../helper/login");

const randomName = faker.person.firstName();
describe('chart of acounts use cases',{retries:0}, () => {
 //******************************************************************************************************************************************** */
 //*********************************************exception handeling ***************************************************************************** */
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Prevent failing the test on app JS error
    return false;
  });
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
  beforeEach(() => {
    cy.reload(); // Refresh the page before each test
  });
  const name = generateRandomText(10)
  
    it('should not Creat duplicate accounts', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        // Prevent failing the test on app JS error
        return false;
      });
      login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
      

        cy.get(':nth-child(3) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(1) > a',{timeout:20000})
          .should('be.visible').click({force:true});

          cy.get('.ant-radio-button-wrapper').should('be.visible')
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
          .click({force:true});

          cy.get(".ant-form").click({force:true})

          cy.get('.ant-tree-select > .ant-select-selector',{timeout:10000})
        
          //  .should('exist')
            .scrollIntoView()
              .should('be.visible')
              .click({ force: true , multiple:true})
              .type('SM')     

        // Ensure the dropdown option appears
        cy.get('.ant-select-tree-node-content-wrapper-normal > .ant-select-tree-title')
        .should('exist')
          .should('be.visible')
          .first()
          .click({ force: true, multiple:true });

        // Click the submit button
        cy.get('.ant-btn',{timeout:5000}).click({multiple:true});

        // Assert the error message appears
        cy.get('.ant-message-custom-content > :nth-child(2)', {timeout: 10000})
        .should('exist')
        .then(($errorMessage) => {
          cy.log($errorMessage.text()); // Log the message to see what is returned
        });
         cy.get('.ant-message-custom-content > :nth-child(2)',{timeout:10000})
           .should('contain.text', 'ChartOfAccount Already Exists');
    });


   it('should create chart of account with random name ', () => {
        login(Cypress.env('adminemail'),Cypress.env('adminpassword'));
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
        .click({force:true});
        cy.get(".ant-form").click({force:true})
     cy.get('.ant-tree-select > .ant-select-selector',{timeout:10000}).type('SM');
     cy.get('.ant-select-tree-node-content-wrapper-normal > .ant-select-tree-title').click();
     cy.get('.ant-btn').click()
    // verification of the created account from the get api
   });
      
     it('APi Testing get action Chart of account ', () => {
    
            cy.request({
                method:'GET',
                url:'https://workw.com/workwapi/api/ChartOfAccount/GetAllChartOfAccount',
                failOnStatusCode:false,
                headers: {
                  Authorization: `Bearer ${token}`, 
                },
            }).then((response)=>{
                expect(response.status).to.eq(200);
               // const accountNames = response.body.data.map(account => account.name);
                //expect(accountNames).to.include(name);
            })
            
        });
    
});
// updating the chart of Account
describe('Chart of Accounts Update suit ', () => {
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
//  const token= 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMzRmYzZiOC1mNzcxLTQ2N2MtOTY1Yi0wYWNkYTE3MzdjMjAiLCJuYW1lIjoiV29yayBUZXN0IiwiaW1hZ2UiOiJodHRwczovL3dvcmt3LmNvbS9SZXNvdXJjZXNcXGRkZmUyMDJmLTUyMWUtNDNlMC1iZjZiLTYxZDZmNzIxMjNmMVxcSW1hZ2VzXFwyODdhNGY4NC1iYjcyLTQ1YWMtOTk3MS05MmJmMDQ1M2U1ZTIuanBnIiwiZW1haWwiOiJ3b3Jrd2lzZXRlc3RpbmdAZ21haWwuY29tIiwiYnVzaW5lc3NJZCI6ImRkZmUyMDJmLTUyMWUtNDNlMC1iZjZiLTYxZDZmNzIxMjNmMSIsInZlciI6IjlDMTFFNjFDLTcyNTEtNEU1QS1CMTcwLTNBQ0E0QUYzMDJFNSIsImloIjoiZUQrRmVuRjRkNnF4R3I2VWtQYTRVcUw4Wi95anAvUjhWMzFmeXpwb0w0TT0iLCJpcyI6IldndkNJOWpUeXVVL25tY0dDa0cyMEE9PSIsInBoIjoiTGE4KzBYanN0NzczWDFLSXd2ZkMwWjR3OUY0Z3loMHRSRVVFYkdBYUR5UT0iLCJwcyI6ImVJelRrdFlOc1hyMVU5Tk5WODVINEE9PSIsImp0aSI6IjdkNTM5MGMxLTY5ZTItNDZkZC05NzUzLTJlMzQ5NmYwYmEzYyIsIm5iZiI6MTc0MDM5MzMyOSwiZXhwIjoxNzQwNTY2MTI5fQ.Q1jmD4bZCOwtE-vyNGEIcSHO8PrBlbuFojoj35pk2zVamVkldL9oOLJ8y439zoPTuXpM3KcDSaJ3FjGltCXBrrT6m7MOCkgkmC2q60e7OqIW38AvwreBaPoNDiHDUAJkS3Gc8NG9nzngPEfV-RvxypNVBATVojeOE1qI2arwpgllD1wx_g5xwA6ont1N3EuLRSNUY4yfl6Dg9SEjCMOr6DePxyHsmfsBKX7VSqq5jWC4ijLUVQH9NJtaxuW6u8esD0WECn7Y2dohvkGAa5UZytajHodRtLg_343nnJ30qFNcJ7DImCW_9hQzJnJtuCk2hQN2F8nGkoD8O9LOyPNBMg'

  it('should update on the front end ', () => {
   login(Cypress.env('adminemail'),Cypress.env('adminpassword'));

    cy.get(':nth-child(3) > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > [role="presentation"] > :nth-child(1) > a', { timeout: 10000 })
      .click();
      cy.get('.ant-input').scrollIntoView().type("Test");
      cy.get('.anticon-edit > svg',{timeout:5000}).first().click();
      cy.get('#name')
      .click({force:true})
      .clear({force:true})
      .type(randomName);
      cy.get('#description').type("Owner's Equity")
      cy.get('.ant-btn').first().click();
      cy.get('.ant-input',{timeout:50000})
      .first()
      .should('be.visible')
      .clear()
      .click({force:true,multiple:true})
      .type(randomName);
      cy.get('.min-w-max',{timeout:50000}).should('contain.text',randomName);

  });
  it('API Testing should update call using the Api and verifying the response ', () => {
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
