describe('getting the chart of accounts for verification purpose', () => {
   // const token= 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMzRmYzZiOC1mNzcxLTQ2N2MtOTY1Yi0wYWNkYTE3MzdjMjAiLCJuYW1lIjoiV29yayBUZXN0IiwiaW1hZ2UiOiJodHRwczovL3dvcmt3LmNvbS9SZXNvdXJjZXNcXGRkZmUyMDJmLTUyMWUtNDNlMC1iZjZiLTYxZDZmNzIxMjNmMVxcSW1hZ2VzXFwyODdhNGY4NC1iYjcyLTQ1YWMtOTk3MS05MmJmMDQ1M2U1ZTIuanBnIiwiZW1haWwiOiJ3b3Jrd2lzZXRlc3RpbmdAZ21haWwuY29tIiwiYnVzaW5lc3NJZCI6ImRkZmUyMDJmLTUyMWUtNDNlMC1iZjZiLTYxZDZmNzIxMjNmMSIsInZlciI6IkU4MzEyQzJGLTcxMjktNDBEMy1BODAwLTFCNTZDNUQ2QTI4MiIsImloIjoiMjA4VUluVU96RFQ2dkJxNEd6enN1dzdUUWJSRlZIU3cwWk1wSStmOXRvaz0iLCJpcyI6IkYybW9PWE1RK1c5RHpmL1dVbUF5Znc9PSIsInBoIjoiV09GYnV5QWM2RUt2WCtlVk9MWjFvM2pEQjhsQUJoU1hNclNyREUyQUpoYz0iLCJwcyI6InEvaUNuQjdkcm50TDJRbEI3d1lGekE9PSIsImp0aSI6IjVkZWMyMWZmLWJhZWItNGFlYS05M2Y2LTkzOWQxNjNjYjFlMiIsIm5iZiI6MTczODU4MzMxNiwiZXhwIjoxNzM4NzU2MTE2fQ.kHVdqajkDGo0viHp4sgDLFL8-JRqcQdXiWf6ZS6lS9O7CZnqIV5tl04IHzfwrDL1PZlYPRXoNqLf-U_Cqj-vt7bVOp1XSdaSj43z1i6gBbwS05ESZ6_gykl6b1FBxwQRb4FEP2cnUmphphd0-4VVt8aV9XnNqzeqswQ7JKtMe5ayMvWM19kvPygXD4xWY9uukqnz6tWPDy0uKmPWpXWB8XvtFYynmuyitQYR2edGvCPVZT43qV4l9ne_nhNaojEveKugXh0NHgyU4WDOUR5pNcM2mlWgzjCza6_XVrr8vueoBZR8C30sjmZiKpenwIMAkal_t82qQZODiCPZ8ux2ag'
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

    it('get action Chart of account ', () => {
        cy.request({
            method:'GET',
            url:'https://workw.com/workwapi/api/ChartOfAccount/GetAllChartOfAccount',
            failOnStatusCode:false,
            headers:{
                Authorization: `Bearer ${token}` 
            },
        }).then((response)=>{
            expect(response.status).to.eq(200);
            // const accountNames = response.body.data.map(account => account.name);
            // expect(accountNames).to.include('Q6vhjS3mbK');
        })
        
    });
});