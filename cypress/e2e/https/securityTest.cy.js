const {checkPreflightRequest} = require("../../helper/securityTestUtility")
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
  const url = 'https://workw.com/workwapi/api/Employee/GetAllEmployeeShort?disableFilter=0&pageNo=1&pageSize=20&search=&boardMembers=false&agents=false';
  checkPreflightRequest(url)
      });

      it('should not leak data in preflight (OPTIONS) request For Expense Module', () => {
      
        const url = 'https://workw.com/workwapi/api/Employee/GetAllEmployeeShort?disableFilter=0&pageNo=1&pageSize=20&search=&boardMembers=false&agents=false';
        checkPreflightRequest(url)
      });
     
      it('should not leak data in preflight (OPTIONS) request For Lead Manager Dashboard', () => {
       
        const  url = 'https://workw.com/workwapi/api/LeadManagerDashboard/GetDashboard'
        checkPreflightRequest(url)
      });
      it('should not leak data in preflight (OPTIONS) request For Custom Approval Module', () => {
       const  url = 'https://workw.com/workwapi/api/CustomApproval/GetAllCustomApproval'
       checkPreflightRequest(url)
      });
      it('should not leak data in preflight (OPTIONS) request For Docs & Archive Module', () => {
      const url = 'https://workw.com/workwapi/api/Document/GetAllDocumentList';
      checkPreflightRequest(url)
      });
      it('should not leak data in preflight (OPTIONS) request For Projects Module', () => {
      const url = 'https://workw.com/workwapi/api/Project/GetAllProject'
      checkPreflightRequest(url)
      });
      it('should not leak data in preflight (OPTIONS) request For Tasks Module', () => {
       const url = 'https://workw.com/workwapi/api/UserTask/GetAllUserTask'
       checkPreflightRequest(url)
       });
      it('should not leak data in preflight (OPTIONS) request For Contract Module', () => {
      const url = 'https://workw.com/workwapi/api/ContractPurpose/GetAllContract'
      checkPreflightRequest(url)
      });
      it('should not leak data in preflight (OPTIONS) request For Loan Module', () => {
     const url = 'https://workw.com/workwapi/api/Loan/GetAllLoan'
     checkPreflightRequest(url)
      });
      it('should not leak data in preflight (OPTIONS) request For Salary Module', () => {
      const url = 'https://workw.com/workwapi/api/EmployeeSalary/GetAllEmployeeSalary'
      checkPreflightRequest(url)
      });
      it('should not leak data in preflight (OPTIONS) request For Leaves Module', () => {
      const url = 'https://workw.com/workwapi/api/Leave/GetAllLeave'
      checkPreflightRequest(url)
      });
      it('should not leak data in preflight (OPTIONS) request For Payrole Module', () => {
      const url = 'https://workw.com/workwapi/api/Payroll/GetAllPayroll'
      checkPreflightRequest(url)
      });
      it('should not leak data in preflight (OPTIONS) request For Requisition Module', () => {
      const url = 'https://workw.com/workwapi/api/Requisition/GetAllRequisition'
      checkPreflightRequest(url)
      });
      it('should not leak data in preflight (OPTIONS) request For VoucherList Module', () => {
      const url = 'https://workw.com/workwapi/api/Transaction/GetAllTransaction'
      checkPreflightRequest(url)
      });
      it('should not leak data in preflight (OPTIONS) request For ChartsOfAccount Module', () => {
      const url = 'https://workw.com/workwapi/api/ChartOfAccount/GetAllChartOfAccount'
      checkPreflightRequest(url)
      });
      it('should not leak data in preflight (OPTIONS) request For Assets List Module', () => {
      const url = 'https://workw.com/workwapi/api/InventoryItem/GetAllItem'
      checkPreflightRequest(url)
      });

})