describe('security test', () => {
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
    it('should not leak data in preflight (OPTIONS) request For Employee Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/Employee/GetAllEmployeeShort?disableFilter=0&pageNo=1&pageSize=20&search=&boardMembers=false&agents=false',
          failOnStatusCode: false,
        }).then((res) => {
          expect([204, 403, 405]).to.include(res.status); // Ideally, should NOT return 200 with sensitive headers
          expect(res.body).to.be.empty;

        });
      });

      it('should not leak data in preflight (OPTIONS) request For Expense Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/Employee/GetAllEmployeeShort?disableFilter=0&pageNo=1&pageSize=20&search=&boardMembers=false&agents=false',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
           expect([204, 403, 405]).to.include(res.status); // Ideally, should NOT return 200 with sensitive headers
          expect(res.body).to.be.empty;
        });
      });
     
      it('should not leak data in preflight (OPTIONS) request For Lead Manager Dashboard', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/LeadManagerDashboard/GetDashboard',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
           expect([204, 403, 405]).to.include(res.status); // Ideally, should NOT return 200 with sensitive headers
          expect(res.body).to.be.empty;
        });
      });
      it('should not leak data in preflight (OPTIONS) request For Custom Approval Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/CustomApproval/GetAllCustomApproval',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
           expect([204, 403, 405]).to.include(res.status); // Ideally, should NOT return 200 with sensitive headers
          expect(res.body).to.be.empty;
        });
      });
      it('should not leak data in preflight (OPTIONS) request For Docs & Archive Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/Document/GetAllDocumentList',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
           expect([204, 403, 405]).to.include(res.status); // Ideally, should NOT return 200 with sensitive headers
          expect(res.body).to.be.empty;
        });
      });
      it('should not leak data in preflight (OPTIONS) request For Projects Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/Project/GetAllProject',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
           expect([204, 403, 405]).to.include(res.status); // Ideally, should NOT return 200 with sensitive headers
          expect(res.body).to.be.empty;
        });
      });
      it('should not leak data in preflight (OPTIONS) request For Tasks Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/UserTask/GetAllUserTask',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
           expect([204, 403, 405]).to.include(res.status); // Ideally, should NOT return 200 with sensitive headers
          expect(res.body).to.be.empty;
        });
      });
      it('should not leak data in preflight (OPTIONS) request For Contract Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/ContractPurpose/GetAllContract',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
           expect([204, 403, 405]).to.include(res.status); // Ideally, should NOT return 200 with sensitive headers
          expect(res.body).to.be.empty;
        });
      });
      it('should not leak data in preflight (OPTIONS) request For Loan Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/Loan/GetAllLoan',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
           expect([204, 403, 405]).to.include(res.status); // Ideally, should NOT return 200 with sensitive headers
          expect(res.body).to.be.empty;
        });
      });
      it('should not leak data in preflight (OPTIONS) request For Salary Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/EmployeeSalary/GetAllEmployeeSalary',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
           expect([204, 403, 405]).to.include(res.status); // Ideally, should NOT return 200 with sensitive headers
          expect(res.body).to.be.empty;
        });
      });
      it('should not leak data in preflight (OPTIONS) request For Leaves Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/Leave/GetAllLeave',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
           expect([204, 403, 405]).to.include(res.status); // Ideally, should NOT return 200 with sensitive headers
          expect(res.body).to.be.empty;
        });
      });
      it('should not leak data in preflight (OPTIONS) request For Payrole Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/Payroll/GetAllPayroll',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
           expect([204, 403, 405]).to.include(res.status); // Ideally, should NOT return 200 with sensitive headers
          expect(res.body).to.be.empty;
        });
      });
      it('should not leak data in preflight (OPTIONS) request For Requisition Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/Requisition/GetAllRequisition',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
           expect([204, 403, 405]).to.include(res.status); // Ideally, should NOT return 200 with sensitive headers
          expect(res.body).to.be.empty;
        });
      });
      it('should not leak data in preflight (OPTIONS) request For VoucherList Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/Transaction/GetAllTransaction',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
           expect([204, 403, 405]).to.include(res.status); // Ideally, should NOT return 200 with sensitive headers
          expect(res.body).to.be.empty;
        });
      });
      it('should not leak data in preflight (OPTIONS) request For ChartsOfAccount Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/ChartOfAccount/GetAllChartOfAccount',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
           expect([204, 403, 405]).to.include(res.status); // Ideally, should NOT return 200 with sensitive headers
          expect(res.body).to.be.empty;
        });
      });
      it('should not leak data in preflight (OPTIONS) request For Assets List Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/InventoryItem/GetAllItem',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
           expect([204, 403, 405]).to.include(res.status); // Ideally, should NOT return 200 with sensitive headers
          expect(res.body).to.be.empty;
        });
      });

})