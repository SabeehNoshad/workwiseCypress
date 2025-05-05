const { randomName, randomDate ,randomDateSimple,randomPin,randomEmail,randomNumber} = require("../../helper/taskCreate");

describe('server response verifications Administration Module', () => {
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
  //***********Access Role */
  it('should validate the response and payload for the Access Role', () => {
    const addRolePayload = {
        name: randomName,
        description: randomName,
        roleTypeId: 2,
        features: [
          {
            featureId: 18,
            permissions: [
              { featureId: 18, permission: "View Appraisal", permissionId: 56 }
            ]
          },
          {
            featureId: 18,
            permissions: [
              { featureId: 18, permission: "Create Appraisal", permissionId: 57 }
            ]
          },
          {
            featureId: 18,
            permissions: [
              { featureId: 18, permission: "View All Appraisal", permissionId: 126 }
            ]
          },
          {
            featureId: 18,
            permissions: [] // This one is empty in your input; add if needed
          },
          {
            featureId: 50,
            permissions: [
              { featureId: 50, permission: "Create Auction", permissionId: 127 }
            ]
          },
          {
            featureId: 50,
            permissions: [
              { featureId: 50, permission: "View Auction", permissionId: 128 }
            ]
          },
          {
            featureId: 50,
            permissions: [
              { featureId: 50, permission: "Export Option Auction", permissionId: 212 }
            ]
          },
          {
            featureId: 50,
            permissions: [
              { featureId: 50, permission: "View All Auction", permissionId: 299 }
            ]
          }
        ]
      }
    cy.request({
      method:'POST',
      url:'https://workw.com/workwapi/api/AccessRole/AddAccessRole',
      failOnStatusCode:false,
      headers: {
          Authorization: `Bearer ${token}`
      },
      body:addRolePayload
  }).then((response)=>{
      expect(response.status).to.eq(200);
      expect(response.body.data.name).to.eq(randomName);
      expect(response.body.data.roleTypeId).to.eq(2)
     })
  });
    //***********Allowance */
    it('should validate the response and payload for the allowance module', () => {
      const addAllowancePayload = {
        name: randomName,
        description: randomName,
        gradeId: "",          //************************* */
        allowanceType: 1,
        isTaxable: true,
        value: 0
      }
      cy.request({
        method:'POST',
        url:'https://workw.com/workwapi/api/Allowance/AddAllowance',
        failOnStatusCode:false,
        headers: {
            Authorization: `Bearer ${token}`
        },
        body:addAllowancePayload
    }).then((response)=>{
        expect(response.status).to.eq(200);
        expect(response.body.data.name).to.eq(randomName);
        
       })
    });
     //***********Assets Category */
     it('should validate the response and payload for the assets Category', () => {
      const allowancePayload = {
        accountName: "",  
        description: randomName,
        name: randomName,
        parentId: "cd2ef028-5cb5-42bb-8bff-6067b6f45710"
      };
      cy.request({
        method:'POST',
        url:'https://workw.com/workwapi/api/InventoryAsset/AddItemCategory',
        failOnStatusCode:false,
        headers: {
            Authorization: `Bearer ${token}`
        },
        body:allowancePayload
    }).then((response)=>{
        expect(response.status).to.eq(200);
        expect(response.body.data.name).to.eq(randomName);
        
       })
    });
      //***********Register Device */
      it('should validate the response and payload for the attendance setting ', () => {
        const attendanceDevicePayload = {
          branchOfficeId: "0f48bafc-2ab3-4cee-be78-4cfe2c4a44f2",
          deviceToken: "34534265476586709678967586",
          location: randomName,
          name: randomName,
          pin: randomPin,
          status: 1
        };
        cy.request({
          method:'POST',
          url:'https://workw.com/workwapi/api/AttendanceDevice/RegisterAttendanceDevice',
          failOnStatusCode:false,
          headers: {
              Authorization: `Bearer ${token}`
          },
          body:attendanceDevicePayload
      }).then((response)=>{
          expect(response.status).to.eq(200);
          expect(response.body.data.name).to.eq(randomName);
          expect(response.body.data.location).to.eq(randomName);
          expect(response.body.data.pin).to.eq(randomPin);

          
         })
      });

          //***********deduction policy */
          it('should validate the response and payload for the deduction setting ', () => {
            const deductionPolicyPayload = {
              description: randomName,
                grades: [
                         "38e1c2de-827c-4fa7-8d9a-353c941e54f4",
                          "9a187938-0ea7-4d45-8fb4-de5aed9d372e"
                        ],
               name: randomName,
                 policyTypes: [
             {
                policyType: 2,
                          isDisable: false
                          },
                              {
                          policyType: 3,
                                isDisable: false
                                        }
                                      ]
                    };
            cy.request({
              method:'POST',
              url:'https://workw.com/workwapi/api/Attendance/SaveAttendanceDeductionPolicy',
              failOnStatusCode:false,
              headers: {
                  Authorization: `Bearer ${token}`
              },
              body:deductionPolicyPayload
          }).then((response)=>{
              expect(response.status).to.eq(200);
              expect(response.body.data.name).to.eq(randomName);

    
              
             })
          });
            //***********Business Association*/
            it('should validate the response and payload for the Business Association ', () => {
              const BusinessAssociationPayload = {
                associationTypes: [],
                email: randomEmail,
                name: randomName
                      };
              cy.request({
                method:'POST',
                url:'https://workw.com/workwapi/api/ExternalAssociation/AddExternalBusinessAssociation',
                failOnStatusCode:false,
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body:BusinessAssociationPayload
            }).then((response)=>{
            
                expect(response.status).to.eq(200);
                expect(response.body.data.name).to.eq(randomName);
                expect(response.body.data.email).to.eq(randomEmail);
              
               })
            });
             //***********Contract Purpose*/
             it('should validate the response and payload for the Contract Purpose ', () => {
              const ContractPurposePayload = {
                description: randomName,
                name: randomName
                      };
              cy.request({
                method:'POST',
                url:'https://workw.com/workwapi/api/ContractPurpose/AddContractPurpose',
                failOnStatusCode:false,
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body:ContractPurposePayload
            }).then((response)=>{
            
                expect(response.status).to.eq(200);
                expect(response.body.data.name).to.eq(randomName);
                expect(response.body.data.description).to.eq(randomName);
              
               })
            });
                         //***********Company Goals*/
                         it('should validate the response and payload for the Company Goals ', () => {
                          const CompanyGoalsPayload = {
                            description: randomName,
                            goal: randomName
                                  };
                          cy.request({
                            method:'POST',
                            url:'https://workw.com/workwapi/api/CompanyGoal/AddCompanyGoal',
                            failOnStatusCode:false,
                            headers: {
                                Authorization: `Bearer ${token}`
                            },
                            body:CompanyGoalsPayload
                        }).then((response)=>{
                        
                            expect(response.status).to.eq(200);
                            expect(response.body.data.goal).to.eq(randomName);
                            expect(response.body.data.description).to.eq(randomName);
                          
                           })
                        });
 //***************company info */
            it('should validate the response and payload for the Company Info', () => {
            cy.window().then((win) => {
            return new Cypress.Promise((resolve, reject) => {
            const formData = new win.FormData();
      formData.append('shortLogo.id', '34c280de-2852-4b2d-b1a9-12c13ddfb45e');
      formData.append('shortLogo.file', 'https://workw.com/Resources/ddfe202f-521e-43e0-bf6b-61d6f72123f1/Images/34c280de-2852-4b2d-b1a9-12c13ddfb45e.png');
      formData.append('logo.id', '91c0f554-a5b5-4cc3-9d6b-b933e6b2179c');
      formData.append('logo.file', 'https://workw.com/Resources/ddfe202f-521e-43e0-bf6b-61d6f72123f1/Images/91c0f554-a5b5-4cc3-9d6f72123f1/Images/91c0f554-a5b5-4cc3-9d6b-b933e6b2179c.png');
      formData.append('fullLogo.id', 'ce5d390f-ffd7-4e4a-946d-f0988ff022f0');
      formData.append('fullLogo.file', 'https://workw.com/Resources/ddfe202f-521e-43e0-bf6b-61d6f72123f1/Images/ce5d390f-ffd7-4e4a-946d-f0988ff022f0.jpg');
      formData.append('name', randomName);
      formData.append('email', 'workwisetesting@gmail.com');
      formData.append('countryId', 'cb1c560b-a319-4329-a642-c2e49eded59f');
      formData.append('salaryDisburseDate', 5);
      formData.append('address', 'workwisetesting@gmail.com');
      formData.append('phoneNo', '537275243');
      formData.append('cityId', 'de812deb-df3a-4967-b0d6-3b4eb6aceaba');
      formData.append('currencyId', '0fe8267c-d76a-4700-939e-f74eef430986');
      formData.append('website', 'www.asdas.com');
      formData.append('id', 'ddfe202f-521e-43e0-bf6b-61d6f72123f1');
      formData.append('ownerId', 'e9b11376-e334-411b-a9d4-c9a399cdbd44');
          const xhr = new win.XMLHttpRequest();
      xhr.open("Put","https://workw.com/workwapi/api/Business/UpdateBusiness");
    xhr.setRequestHeader("Authorization", `Bearer ${token}`);
     xhr.onerror = () => reject(xhr.responseText);
     xhr.onload = () => {
     try {
     console.log(randomDateSimple)
     const response = JSON.parse(xhr.responseText);
    expect(response.responseCode).to.eq(1001);
    expect(response.data.name).to.eq(randomName);
      resolve();
    } catch (err) {
    reject(err);
    }
    };
   xhr.send(formData);
   });
   });
    });
 //***********Complain Category*/
      it('should validate the response and payload for the Complain Category ', () => {
      const CompanyGoalsPayload = {
      description: randomName,
      name: randomName
          };
      cy.request({
      method:'POST',
      url:'https://workw.com/workwapi/api/complain/ComplainCategory/addComplainCategory',
      failOnStatusCode:false,
      headers: {
      Authorization: `Bearer ${token}`
      },
       body:CompanyGoalsPayload
       }).then((response)=>{
       expect(response.status).to.eq(200);
       expect(response.body.data.name).to.eq(randomName);
       expect(response.body.data.description).to.eq(randomName);
         
      })
            });
   //***********Custom Approval Category*/
   it('should validate the response and payload for the Custom Approval Category ', () => {
    const CompanyGoalsPayload = {
      description: randomName,
      name: randomName
        };
    cy.request({
    method:'POST',
    url:'https://workw.com/workwapi/api/CustomApprovalCategory/addCustomApprovalCategory',
    failOnStatusCode:false,
    headers: {
    Authorization: `Bearer ${token}`
    },
     body:CompanyGoalsPayload
     }).then((response)=>{
     expect(response.status).to.eq(200);
     expect(response.body.data.name).to.eq(randomName);
     expect(response.body.data.description).to.eq(randomName);
       
    })
          });
      
  //***********Custom Tags*/
  it('should validate the response and payload for the Custom Tags ', () => {
    const CompanyGoalsPayload = {
      description: randomName,
      name: randomName
        };
    cy.request({
    method:'POST',
    url:'https://workw.com/workwapi/api/CustomTag/AddCustomTag',
    failOnStatusCode:false,
    headers: {
    Authorization: `Bearer ${token}`
    },
     body:CompanyGoalsPayload
     }).then((response)=>{
     expect(response.status).to.eq(200);
     expect(response.body.data.name).to.eq(randomName);
     expect(response.body.data.description).to.eq(randomName);
       
    })
          });
  //***********Add designation*/
  it('should validate the response and payload for the Add Designation ', () => {
    const CompanyGoalsPayload = {
      description: randomName,
      name: randomName
        };
    cy.request({
    method:'POST',
    url:'https://workw.com/workwapi/api/Designation/addDesignation',
    failOnStatusCode:false,
    headers: {
    Authorization: `Bearer ${token}`
    },
     body:CompanyGoalsPayload
     }).then((response)=>{
     expect(response.status).to.eq(200);
     expect(response.body.data.name).to.eq(randomName);
     expect(response.body.data.description).to.eq(randomName);
       
    })
          });
  //***********Discussion Board Category*/
  it('should validate the response and payload for the Discussion board category ', () => {
    const CompanyGoalsPayload = {
      description: randomName,
      name: randomName
        };
    cy.request({
    method:'POST',
    url:'https://workw.com/workwapi/api/DiscussionBoardCategory/AddDiscussionBoardCategory',
    failOnStatusCode:false,
    headers: {
    Authorization: `Bearer ${token}`
    },
     body:CompanyGoalsPayload
     }).then((response)=>{
     expect(response.status).to.eq(200);
     expect(response.body.data.name).to.eq(randomName);
     expect(response.body.data.description).to.eq(randomName);
       
    })
          });
 //***********elearning Category*/
 it('should validate the response and payload for the Add asset module', () => {
  cy.window().then((win) => {
    return new Cypress.Promise((resolve, reject) => {
      const formData = new win.FormData();
     
      formData.append("name", randomName);
      formData.append("description", randomName);
      


      const xhr = new win.XMLHttpRequest();
      xhr.open("POST","https://workw.com/workwapi/api/ELearning/AddCategory");
      xhr.setRequestHeader("Authorization", `Bearer ${token}`);

      xhr.onerror = () => reject(xhr.responseText);

      xhr.onload = () => {
        try {
          console.log(randomDateSimple)
          const response = JSON.parse(xhr.responseText);
          expect(response.responseCode).to.eq(1001);
          expect(response.data.name).to.eq(randomName);
       
        
         resolve();
        } catch (err) {
          reject(err);
        }
      };

      xhr.send(formData);
    });
  });
});
  //***********Expense Category*/
  it('should validate the response and payload for the Expense Category category ', () => {
    const CompanyGoalsPayload = {
      description: randomName,
      name: randomName
        };
    cy.request({
    method:'POST',
    url:'https://workw.com/workwapi/api/ExpenseHeader/addexpenseHeader',
    failOnStatusCode:false,
    headers: {
    Authorization: `Bearer ${token}`
    },
     body:CompanyGoalsPayload
     }).then((response)=>{
     expect(response.status).to.eq(200);
     expect(response.body.data.name).to.eq(randomName);
     expect(response.body.data.description).to.eq(randomName);
       
    })
          });
          
});