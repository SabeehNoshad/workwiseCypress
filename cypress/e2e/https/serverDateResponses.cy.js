const { randomName, randomDate ,randomDateSimple } = require("../../helper/taskCreate");

describe('server response verifications', () => {
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

  //******** Project Module ********//
  it('should validate the response and payload for the project module', () => {
    cy.window().then((win) => {
      return new Cypress.Promise((resolve, reject) => {
        const formData1 = new win.FormData();

        formData1.append("name", randomName);
        formData1.append("description", "<p>sdafdsafasdfasdf</p>");
        formData1.append("startDate", randomDate);
        formData1.append("endDate", randomDate);
        formData1.append("features[0].featureId", "1");
        formData1.append("image.id", "00000000-0000-0000-0000-000000000000");
        formData1.append("referenceType", "1");
        formData1.append("privacyId", "1");
        formData1.append("categoryId", "ab257f9b-612f-4d58-8bda-13e2fe6ce5ae");

        const xhr = new win.XMLHttpRequest();
        xhr.open("POST", "https://workw.com/workwapi/api/Project/AddProject");
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);

        xhr.onerror = () => reject(xhr.responseText);

        xhr.onload = () => {
          try {
            const response = JSON.parse(xhr.responseText);
            expect(response.responseCode).to.eq(1001);
            expect(response.data.name).to.eq(randomName);
            expect(response.data.description).to.eq("<p>sdafdsafasdfasdf</p>");
            expect(response.data.startDate).to.include(randomDate);
            expect(response.data.endDate).to.include(randomDate);
            resolve();
          } catch (err) {
            reject(err);
          }
        };

        xhr.send(formData1);
      });
    });
  });

  //******** Schedule Module ********//
  it('should validate the response and payload for the schedule module', () => {
    cy.window().then((win) => {
      return new Cypress.Promise((resolve, reject) => {
        const formData1 = new win.FormData();

        formData1.append("subject", randomName);
        formData1.append("description", "<p>sdafdsafasdfasdf</p>");
        formData1.append("scheduleType", "2");
        formData1.append("location", "asdfasdfas");
        formData1.append("startDate", randomDate);
        formData1.append("startTime", "00000");
        formData1.append("duration", "00 min");
        formData1.append("travelTime", "0");
        formData1.append("preparationTime", "0");
        formData1.append("endTime", "00000");
        formData1.append("endDate", randomDate);
        formData1.append("roomId", "00000000-0000-0000-0000-000000000000");
        formData1.append("repeatType", "1");
        formData1.append("timeZone", "-300");
        formData1.append("onVideoConference", "false");
        formData1.append("referenceType", "1");
        formData1.append("referenceId", "00000000-0000-0000-0000-000000000000");

        const xhr = new win.XMLHttpRequest();
        xhr.open("POST", "https://workw.com/workwapi/api/Schedule/AddSchedule");
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);

        xhr.onerror = () => reject(xhr.responseText);

        xhr.onload = () => {
          try {
            const response = JSON.parse(xhr.responseText);
            expect(response.responseCode).to.eq(1001);
            expect(response.data.subject).to.eq(randomName);
            expect(response.data.description).to.eq("<p>sdafdsafasdfasdf</p>");
            expect(response.data.startDateTime).to.include(randomDate);
            expect(response.data.endDateTime).to.include(randomDate);
            resolve();
          } catch (err) {
            reject(err);
          }
        };

        xhr.send(formData1);
      });
    });
  });

  //******** Travel Module ********//
  it('should validate the response and payload for the travel module', () => {
    cy.window().then((win) => {
      return new Cypress.Promise((resolve, reject) => {
        const formData = new win.FormData();

        formData.append("subject", randomName);
        formData.append("description", randomName);
        formData.append("referenceId", "00000000-0000-0000-0000-000000000000");
        formData.append("referenceType", "1");

        formData.append("cities[0].id", "00000000-0000-0000-0000-000000000000");
        formData.append("cities[0].reason", "sdaf");
        formData.append("cities[0].departureId", "697edc7a-c1ae-4af0-a0df-00019c517564");
        formData.append("cities[0].arrivalId", "84b055e8-b423-4f3d-a90d-0002d85b1592");
        formData.append("cities[0].departureDate", randomDate);
        formData.append("cities[0].shiftType", "1");
        formData.append("cities[0].returnDate", randomDate);
        formData.append("cities[0].travelById", "1");
        formData.append("cities[0].isTADARequired", "false");
        formData.append("cities[0].isHotelRequired", "false");
        formData.append("cities[0].isCarRequired", "false");
        formData.append("cities[0].isPickupRequired", "false");
        formData.append("cities[0].isDropOffRequired", "false");

        formData.append("approvers[0].approverId", "97190f5d-41de-40fc-a171-d8b527ecf171");
        formData.append("approvers[0].levelNo", "1");

        formData.append("agents[0].approverId", "97190f5d-41de-40fc-a171-d8b527ecf171");

        const xhr = new win.XMLHttpRequest();
        xhr.open("POST", "https://workw.com/workwapi/api/Travel/AddTravel");
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);

        xhr.onerror = () => reject(xhr.responseText);

        xhr.onload = () => {
          try {
            const response = JSON.parse(xhr.responseText);
            expect(response.responseCode).to.eq(1001);
            expect(response.data.subject).to.eq(randomName);
            expect(response.data.cities[0].departureDate).to.eq(randomDate);
            resolve();
          } catch (err) {
            reject(err);
          }
        };

        xhr.send(formData);
      });
    });
  });
  //***********WorkBoard Todo *******/
  it('should validate the response and payload for the WorkBoard Todo module', () => {
    const poll = {
      dueDate:randomDate ,
      sectionId:"c825ca1a-a2fb-4d06-9367-42a8f16545de",
      todoId:"a77d2edc-2e70-43f4-a4e7-8db5cb6a8ff3",

    }
    cy.request({
      method:'PUT',
      url:'https://workw.com/workwapi/api/WorkBoardTodo/UpdateWorkBoardTodoDueDate',
      failOnStatusCode:false,
      headers: {
          Authorization: `Bearer ${token}`
      },
      body:poll
  }).then((response)=>{
      expect(response.status).to.eq(200);
      expect(response.body.data.dueDate).to.eq(randomDate );
     
  
  })
  });
  //*********************expense ***** */
  it('should validate the response and payload for the Expense module', () => {
    cy.window().then((win) => {
      return new Cypress.Promise((resolve, reject) => {
        const formData = new win.FormData();
        formData.append("referenceId", "00000000-0000-0000-0000-000000000000");
        formData.append("categoryId", "1");
        formData.append("headerId", "f30842fc-f5f3-4ab7-a7ab-25ac68b82358");
        formData.append("referenceType", "1");
        formData.append("expenseDate", randomDateSimple);
        formData.append("isReimbursable", "false");
        formData.append("description", randomName);
        formData.append("amount", "100");
        formData.append("isCompanyExpense", "false");
        formData.append("executors[0].approverId", "97190f5d-41de-40fc-a171-d8b527ecf171");
        formData.append("approvers[0].approverId", "97190f5d-41de-40fc-a171-d8b527ecf171");
        formData.append("approvers[0].levelNo", "1");
        formData.append("financers[0].approverId", "97190f5d-41de-40fc-a171-d8b527ecf171");

        formData.append("financers[0].levelNo", "1");
        formData.append("quantity", "1");

        formData.append("currencyId", "0fe8267c-d76a-4700-939e-f74eef430986");

        const xhr = new win.XMLHttpRequest();
        xhr.open("POST", "https://workw.com/workwapi/api/Expense/AddExpense");
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);

        xhr.onerror = () => reject(xhr.responseText);

        xhr.onload = () => {
          try {
            const response = JSON.parse(xhr.responseText);
            expect(response.responseCode).to.eq(1001);
            expect(response.data.expenseDate).to.eq(randomDateSimple);
            resolve();
          } catch (err) {
            reject(err);
          }
        };

        xhr.send(formData);
      });
    });
  });
  //*************************Task Module*** */
  it('should validate the response and payload for the Task module', () => {
    cy.window().then((win) => {
      return new Cypress.Promise((resolve, reject) => {
        const formData = new win.FormData();
        formData.append("subject", randomName);
        formData.append("description", randomName);
        formData.append("referenceId", "00000000-0000-0000-0000-000000000000");
        formData.append("referenceType", "1");
        formData.append("members[0].memberId", "134fc6b8-f771-467c-965b-0acda1737c20");
        formData.append("members[0].memberType", "2");
        formData.append("priority", "2");
        formData.append("startDate", randomDate);
        formData.append("endDate", randomDate);
        formData.append("parentId", "00000000-0000-0000-0000-000000000000");
        

        const xhr = new win.XMLHttpRequest();
        xhr.open("POST", "https://workw.com/workwapi/api/UserTask/AddUserTask");
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);

        xhr.onerror = () => reject(xhr.responseText);

        xhr.onload = () => {
          try {
            const response = JSON.parse(xhr.responseText);
            expect(response.responseCode).to.eq(1001);
            expect(response.data.startDate).to.eq(randomDate);
            expect(response.data.endDate).to.eq(randomDate);
            resolve();
          } catch (err) {
            reject(err);
          }
        };

        xhr.send(formData);
      });
    });
  });
  //************************Contract ******* */
  it('should validate the response and payload for the Contract module', () => {
    cy.window().then((win) => {
      return new Cypress.Promise((resolve, reject) => {
        const formData = new win.FormData();
        formData.append("subject", randomName);
        formData.append("description", randomName);
        formData.append("referenceId", "00000000-0000-0000-0000-000000000000");
        formData.append("isExternal", "false");
        formData.append("referenceType", "1");
        formData.append("priority", "2");
        formData.append("startDate", randomDate);
        formData.append("endDate", randomDate);
        formData.append("parentId", "00000000-0000-0000-0000-000000000000");
        formData.append("purposeId", "dd764a1d-b740-4865-a33e-45e79094aa9a");
        formData.append("categoryId", "818162e3-2846-4bcd-a6ca-b04b8fb2e272");
        

        const xhr = new win.XMLHttpRequest();
        xhr.open("POST", "https://workw.com/workwapi/api/ContractPurpose/AddContract");
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);

        xhr.onerror = () => reject(xhr.responseText);

        xhr.onload = () => {
          try {
            console.log(randomDateSimple)
            const response = JSON.parse(xhr.responseText);
            expect(response.responseCode).to.eq(1001);
            expect(response.data.subject).to.eq(randomName);
            expect(response.data.startDate).to.eq(randomDate);
            expect(response.data.endDate).to.eq(randomDate);
            resolve();
          } catch (err) {
            reject(err);
          }
        };

        xhr.send(formData);
      });
    });
  });
  //*************Auction******/
  it('should validate the response and payload for the Auction module', () => {
    cy.window().then((win) => {
      return new Cypress.Promise((resolve, reject) => {
        const formData = new win.FormData();
        formData.append("name",randomName);
        formData.append("startingBid", "21421");
        formData.append("minIncreaseBid", "32234");
        formData.append("immediateBuy", "true");
        formData.append("buyNowAmount", "234124");
        formData.append("endDate", randomDate);
        formData.append("description", randomName);
        
        formData.append("approvers[0].approverId", "97190f5d-41de-40fc-a171-d8b527ecf171");
        formData.append("approvers[0].type", "1");
        formData.append("approvers[0].levelNo", "1");
        
        formData.append("38[0].id", "97190f5d-41de-40fc-a171-d8b527ecf171");
        formData.append("38[0].businessId", "00000000-0000-0000-0000-000000000000");
        formData.append("38[0].name", "Asfa zahid");
        formData.append("38[0].email", "asfa.zahid29@gmail.com");
        formData.append("38[0].image", "");
        formData.append("38[0].type", "1");
        formData.append("38[0].userTypeId", "3");
        formData.append("38[0].designation", "Chief Operating Officer (COO)");
        formData.append("38[0].userActiveStatus", "1");
        formData.append("38[0].levelNo", "1");
        
        

        const xhr = new win.XMLHttpRequest();
        xhr.open("POST", "https://workw.com/workwapi/api/Auction/AddAuction");
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);

        xhr.onerror = () => reject(xhr.responseText);

        xhr.onload = () => {
          try {
            console.log(randomDateSimple)
            const response = JSON.parse(xhr.responseText);
            expect(response.responseCode).to.eq(1001);
            expect(response.data.name).to.eq(randomName);
            expect(response.data.endDate).to.eq(randomDate);
            resolve();
          } catch (err) {
            reject(err);
          }
        };

        xhr.send(formData);
      });
    });
  });
  //***********************LEAVES*********** */
  it('should validate the response and payload for the leave module', () => {
    cy.window().then((win) => {
      return new Cypress.Promise((resolve, reject) => {
        const formData = new win.FormData();
        formData.append("description", randomName);
        formData.append("leaveTypeId", "c8835beb-0664-4e67-9c40-0d29623f25e1");
        formData.append("approvers[0].approverId", "9d8e0ff6-9b12-4274-bcec-706cc47d27d7");
        formData.append("approvers[0].levelNo", "1");
        formData.append("startDate",randomDate);
        formData.append("endDate", randomDate);
        
        
        

        const xhr = new win.XMLHttpRequest();
        xhr.open("POST","https://workw.com/workwapi/api/Leave/AddLeave");
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);

        xhr.onerror = () => reject(xhr.responseText);

        xhr.onload = () => {
          try {
            console.log(randomDateSimple)
            const response = JSON.parse(xhr.responseText);
            expect(response.responseCode).to.eq(1001);
            expect(response.data.description).to.eq(randomName);
            expect(response.data.startDate).to.eq(randomDate);
            expect(response.data.endDate).to.eq(randomDate);
            resolve();
          } catch (err) {
            reject(err);
          }
        };

        xhr.send(formData);
      });
    });
  });
  //*************Sub Task ******
  // */
  it('should validate the response and payload for the userSubTask module', () => {
    cy.window().then((win) => {
      return new Cypress.Promise((resolve, reject) => {
        const formData = new win.FormData();
        formData.append("subject", randomName);
        formData.append("parentId", "30c24a31-41c1-4e9b-a5d2-f86969ab1085");
        formData.append("priority", "1");
        formData.append("userTaskType", "1");
        formData.append("referenceId", "00000000-0000-0000-0000-000000000000");
        formData.append("referenceType", "1");
        
        
        
        

        const xhr = new win.XMLHttpRequest();
        xhr.open("POST","https://workw.com/workwapi/api/UserTask/AddUserTask");
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);

        xhr.onerror = () => reject(xhr.responseText);

        xhr.onload = () => {
          try {
            console.log(randomDateSimple)
            const response = JSON.parse(xhr.responseText);
            expect(response.responseCode).to.eq(1001);
            expect(response.data.subject).to.eq(randomName);
           resolve();
          } catch (err) {
            reject(err);
          }
        };

        xhr.send(formData);
      });
    });
  });
  //**************Career**************** */
  it('should validate the response and payload for the career module', () => {
    cy.window().then((win) => {
      return new Cypress.Promise((resolve, reject) => {
        const formData = new win.FormData();
       
formData.append("designationId", "0fbd8518-71cd-4882-bee2-4331e26df03a");
formData.append("gradeId", "1e7faff5-eddd-4dee-a379-8838af02f6d9");
formData.append("minSalary", "2131");
formData.append("maxSalary", "21312");
formData.append("language[0]", "d");
formData.append("workingType", "2");
formData.append("probationPeriod", "30");
formData.append("jobTypeId", "2");
formData.append("jobShiftId", "2");
formData.append("hardSkill[0]", "s");
formData.append("softSkill[0]", "g");
formData.append("experience", "3");
formData.append("certificate[0]", "s");
formData.append("travelRequirements", "20");
formData.append("leaves", "2");
formData.append("departmentId", "614ebc84-60d0-47b8-b1c0-c82b4d248193");
formData.append("cityId", "2b31a5c0-7cb4-42ae-a8d7-00074735d51a");
formData.append("managerId", "867a7fd8-052b-45df-91e4-e8a0ecd11f7b");
formData.append("interviewers[0].userId", "867a7fd8-052b-45df-91e4-e8a0ecd11f7b");
formData.append("interviewers[0].interviewerType", "1");
formData.append("hiringBuddyId", "00000000-0000-0000-0000-000000000000");
formData.append("replacementOfId", "00000000-0000-0000-0000-000000000000");
formData.append("educationId", "2");
formData.append("careerLevelId", "2");
formData.append("endDate", randomDate);
formData.append("reviewCriteria", "");
formData.append("description", "<p>asdasdAsdASDASDasDAsdas</p>");
formData.append("approvers[0].approverId", "867a7fd8-052b-45df-91e4-e8a0ecd11f7b");
formData.append("approvers[0].approverType", "1");
formData.append("approvers[0].levelNo", "1");
formData.append("question[0].id", "48230b9b-b81f-42c7-5399-a05f92a9a5b8");
formData.append("question[0].question", "h");
formData.append("question[0].remove", "true");
formData.append("image.id", "00000000-0000-0000-0000-000000000000");

        const xhr = new win.XMLHttpRequest();
        xhr.open("POST","https://workw.com/workwapi/api/Career/AddCareer");
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);

        xhr.onerror = () => reject(xhr.responseText);

        xhr.onload = () => {
          try {
            console.log(randomDateSimple)
            const response = JSON.parse(xhr.responseText);
            expect(response.responseCode).to.eq(1001);
            expect(response.data.endDate).to.eq(randomDate);
           resolve();
          } catch (err) {
            reject(err);
          }
        };

        xhr.send(formData);
      });
    });
  });
  //***************************salary getall sugestion api not working for the approval name list suggestion  */
  //*******************************resignation***************************  */
  it('should validate the response and payload for the resignation module module', () => {
    cy.window().then((win) => {
      return new Cypress.Promise((resolve, reject) => {
        const formData = new win.FormData();
       
formData.append("designationId", "0fbd8518-71cd-4882-bee2-4331e26df03a");
formData.append("description", "");
formData.append("userId", "134fc6b8-f771-467c-965b-0acda1737c20");
formData.append("resignationDate", randomDate);
formData.append("reportingTo[0].approverId", "9d8e0ff6-9b12-4274-bcec-706cc47d27d7");
formData.append("hr[0].approverId", "97190f5d-41de-40fc-a171-d8b527ecf171");
formData.append("it[0].approverId", "97190f5d-41de-40fc-a171-d8b527ecf171");
formData.append("exit[0].approverId", "97190f5d-41de-40fc-a171-d8b527ecf171");
formData.append("admin[0].approverId", "97190f5d-41de-40fc-a171-d8b527ecf171");
formData.append("finance[0].approverId", "97190f5d-41de-40fc-a171-d8b527ecf171");
formData.append("type", "1");
formData.append("purposeId", "1");

        const xhr = new win.XMLHttpRequest();
        xhr.open("POST","https://workw.com/workwapi/api/Resignation/AddResignation");
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);

        xhr.onerror = () => reject(xhr.responseText);

        xhr.onload = () => {
          try {
            console.log(randomDateSimple)
            const response = JSON.parse(xhr.responseText);
            expect(response.responseCode).to.eq(1001);
            expect(response.data.resignationDate).to.eq(randomDate);
           resolve();
          } catch (err) {
            reject(err);
          }
        };

        xhr.send(formData);
      });
    });
  });
  //*********************quotation*************** */
  it('should validate the response and payload for the quotation module module', () => {
    cy.window().then((win) => {
      return new Cypress.Promise((resolve, reject) => {
        const formData = new win.FormData();
       
        formData.append("subject",randomName);
        formData.append("name", randomName);
        formData.append("email", "sag@sdg.com");
        formData.append("phoneNumber", "92537583");
        formData.append("type", "1");
        formData.append("quotationDate", randomDate);
        formData.append("expiryDate", randomDate);
        formData.append("deliveryDate", randomDate);
        formData.append("details[0].item", "fdhdfghdfhfgh");
        formData.append("details[0].price", "64326");
        formData.append("details[0].quantity", "2346");
        formData.append("details[0].tax", "234");
        formData.append("referenceType", "1");
        formData.append("referenceId", "00000000-0000-0000-0000-000000000000");
        formData.append("amount", "150908796");
        formData.append("netAmount", "504035378.64");
        formData.append("taxAmount", "353126582.64");
        formData.append("approvers[0].approverId", "867a7fd8-052b-45df-91e4-e8a0ecd11f7b");
        formData.append("approvers[0].approverType", "1");

        const xhr = new win.XMLHttpRequest();
        xhr.open("POST","https://workw.com/workwapi/api/Quotation/AddQuotation");
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);

        xhr.onerror = () => reject(xhr.responseText);

        xhr.onload = () => {
          try {
            console.log(randomDateSimple)
            const response = JSON.parse(xhr.responseText);
            expect(response.responseCode).to.eq(1001);
            expect(response.data.subject).to.eq(randomName);
            expect(response.data.quotationDate).to.eq(randomDate);
            expect(response.data.expiryDate).to.eq(randomDate);
            expect(response.data.deliveryDate).to.eq(randomDate);
           resolve();
          } catch (err) {
            reject(err);
          }
        };

        xhr.send(formData);
      });
    });
  });
  //***************create voucher  */
  it('should validate the response and payload for the voucher module', () => {
    const addTransaction = {
      voucherDate:randomDate,
    voucherType: 1,
    amount: 12,
    referenceType: 1,
    referenceId: "00000000-0000-0000-0000-000000000000",
    totalDr: 12,
    totalCr: 12,
    details: [
      {
        accountId: "1376758c-bf36-4708-833f-03e6edfcff0d",
        dbAmount: "12.00",
        crAmount: 0,
      },
      {
        accountId: "7c576830-8263-48d9-83a7-15eb8acdd359",
        dbAmount: 0,
        crAmount: "12.00",
      }
    ]
    }
    cy.request({
      method:'POST',
      url:'https://workw.com/workwapi/api/Transaction/AddTransaction',
      failOnStatusCode:false,
      headers: {
          Authorization: `Bearer ${token}`
      },
      body:addTransaction
  }).then((response)=>{
      expect(response.status).to.eq(200);
      expect(response.body.data.voucherDate).to.eq(randomDate );
     
  
  })
  });
  //************************Payroll******* */
  it('should validate the response and payload for the Payroll module', () => {
    const addTransaction = {
      description: ".",
      disburseDate: randomDate,
      total: "231000.00",
      month: 2,
      year: 2025,
      approvers: [
        {
          approverId: "97190f5d-41de-40fc-a171-d8b527ecf171",
          approverType: 1,
          levelNo: 1
        }
      ],
      details: [
        {
          id: "00000000-0000-0000-0000-000000000000",
          payrollId: "00000000-0000-0000-0000-000000000000"
        },
        {
          id: "00000000-0000-0000-0000-000000000000",
          payrollId: "00000000-0000-0000-0000-000000000000"
        }
      ]
    }
    cy.request({
      method:'POST',
      url:'https://workw.com/workwapi/api/Payroll/AddPayroll',
      failOnStatusCode:false,
      headers: {
          Authorization: `Bearer ${token}`
      },
      body:addTransaction
  }).then((response)=>{
      expect(response.status).to.eq(200);
      expect(response.body.data.disburseDate).to.eq(randomDate );
     
  
  })
  });
  //************************requisition*************** */
  it('should validate the response and payload for the requisition module', () => {
    cy.window().then((win) => {
      return new Cypress.Promise((resolve, reject) => {
        const formData = new win.FormData();
       
        formData.append("name", randomName);
        formData.append("description",randomName);
        formData.append("deadline", randomDate);
        formData.append("approvers[0].approverId", "9d8e0ff6-9b12-4274-bcec-706cc47d27d7");
        formData.append("approvers[0].approverType", "1");
        formData.append("approvers[0].levelNo", "1");
        formData.append("budget", "2341");
        formData.append("reason", "asdasd");
        formData.append("finalApprovers[0].approverId", "9d8e0ff6-9b12-4274-bcec-706cc47d27d7");
        formData.append("finalApprovers[0].approverType", "1");
        formData.append("finalApprovers[0].levelNo", "1");

        const xhr = new win.XMLHttpRequest();
        xhr.open("POST","https://workw.com/workwapi/api/Requisition/AddRequisition");
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);

        xhr.onerror = () => reject(xhr.responseText);

        xhr.onload = () => {
          try {
            console.log(randomDateSimple)
            const response = JSON.parse(xhr.responseText);
            expect(response.responseCode).to.eq(1001);
            expect(response.data.name).to.eq(randomName);
            expect(response.data.description).to.eq(randomName);
            expect(response.data.deadline).to.eq(randomDate);
          
           resolve();
          } catch (err) {
            reject(err);
          }
        };

        xhr.send(formData);
      });
    });
  });
  //**************Assets***************** */
  it('should validate the response and payload for the Add asset module', () => {
    cy.window().then((win) => {
      return new Cypress.Promise((resolve, reject) => {
        const formData = new win.FormData();
       
        formData.append("list[0].name", randomName);
        formData.append("list[0].value", "23412");
        formData.append("list[0].serialNo", "214234");
        formData.append("list[0].categoryId", "479c9712-5c29-45db-8978-3d3a6c1a7ad6");
        formData.append("list[0].type", "2");
        formData.append("list[0].image.id", "00000000-0000-0000-0000-000000000000");
        formData.append("list[0].handoverId", "97190f5d-41de-40fc-a171-d8b527ecf171");
        formData.append("list[0].approvers[0].approverId", "867a7fd8-052b-45df-91e4-e8a0ecd11f7b");


        const xhr = new win.XMLHttpRequest();
        xhr.open("POST","https://workw.com/workwapi/api/InventoryItem/AddItem");
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);

        xhr.onerror = () => reject(xhr.responseText);

        xhr.onload = () => {
          try {
            console.log(randomDateSimple)
            const response = JSON.parse(xhr.responseText);
            expect(response.responseCode).to.eq(1001);
            expect(response.data[0].name).to.eq(randomName);
         
          
           resolve();
          } catch (err) {
            reject(err);
          }
        };

        xhr.send(formData);
      });
    });
  });
  //***********************request for item  */
  it('should validate the response and payload for the Payroll module', () => {
    const addAssetRequest = {
      categoryId: "479c9712-5c29-45db-8978-3d3a6c1a7ad6",
      type: 2,
      quantity: "200",
      approvers: [
        {
          approverId: "9d8e0ff6-9b12-4274-bcec-706cc47d27d7",
          approverType: 1,
          email: "hadiqadarbar@gmail.com"
        }
      ],
      assetController: [
        {
          approverId: "9d8e0ff6-9b12-4274-bcec-706cc47d27d7",
          approverType: 1,
          email: "hadiqadarbar@gmail.com"
        }
      ],
      details: [
        {
          id: "00000000-0000-0000-0000-000000000000",
          payrollId: "00000000-0000-0000-0000-000000000000"
        },
        {
          id: "00000000-0000-0000-0000-000000000000",
          payrollId: "00000000-0000-0000-0000-000000000000"
        }
      ]
    }
    cy.request({
      method:'POST',
      url:'https://workw.com/workwapi/api/InventoryRequestForItem/AddRequestForItem',
      failOnStatusCode:false,
      headers: {
          Authorization: `Bearer ${token}`
      },
      body:addAssetRequest
  }).then((response)=>{
      expect(response.status).to.eq(200);
     })
  });
});
