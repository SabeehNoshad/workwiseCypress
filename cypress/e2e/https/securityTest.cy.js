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
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
        });
      });

      it('should not leak data in preflight (OPTIONS) request For Expense Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/Employee/GetAllEmployeeShort?disableFilter=0&pageNo=1&pageSize=20&search=&boardMembers=false&agents=false',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
        });
      });
     
      it('should not leak data in preflight (OPTIONS) request For Lead Manager Dashboard', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/LeadManagerDashboard/GetDashboard',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
        });
      });
      it('should not leak data in preflight (OPTIONS) request For Expense Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/Expense/GetAllExpense',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
        });
      });
      it('should not leak data in preflight (OPTIONS) request For Expense Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/Expense/GetAllExpense',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
        });
      });
      it('should not leak data in preflight (OPTIONS) request For Expense Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/Expense/GetAllExpense',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
        });
      });
      it('should not leak data in preflight (OPTIONS) request For Expense Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/Expense/GetAllExpense',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
        });
      });
      it('should not leak data in preflight (OPTIONS) request For Expense Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/Expense/GetAllExpense',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
        });
      });
      it('should not leak data in preflight (OPTIONS) request For Expense Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/Expense/GetAllExpense',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
        });
      });
      it('should not leak data in preflight (OPTIONS) request For Expense Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/Expense/GetAllExpense',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
        });
      });
      it('should not leak data in preflight (OPTIONS) request For Expense Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/Expense/GetAllExpense',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
        });
      });
      it('should not leak data in preflight (OPTIONS) request For Expense Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/Expense/GetAllExpense',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
        });
      });
      it('should not leak data in preflight (OPTIONS) request For Expense Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/Expense/GetAllExpense',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
        });
      });
      it('should not leak data in preflight (OPTIONS) request For Expense Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/Expense/GetAllExpense',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
        });
      });
      it('should not leak data in preflight (OPTIONS) request For Expense Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/Expense/GetAllExpense',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
        });
      });
      it('should not leak data in preflight (OPTIONS) request For Expense Module', () => {
        cy.request({
          method: 'OPTIONS',
          url: 'https://workw.com/workwapi/api/Expense/GetAllExpense',
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.not.eq(200); // Ideally, should NOT return 200 with sensitive headers
        });
      });

})