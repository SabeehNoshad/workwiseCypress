describe('Checking too many request', () => {
    let token;
  
    before(() => {
      cy.request({
        method: 'POST',
        url: 'https://www.workw.com/authapi/api/login',
        body: {
          email: 'workwisetesting@gmail.com',
          password: 'Workwise123@'
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(200);
        token = response.body.data.accessToken;
      });
    });
  
    it('Too many request for the newsfeed post ',()=>{
        const maxRequests = 10;

            for (let i = 0; i < maxRequests; i++) {
        cy.request({
                     method: 'POST',
                      url: 'https://workw.com/workwapi/api/Feed/AddFeed',
                      headers:{
                        Authorization: `Bearer ${token}` },
                     body: {
                        title:"test",
                        id: '00000000-0000-0000-0000-000000000000',
                        parentId: '00000000-0000-0000-0000-000000000000',
                        referenceType: '1',
                        referenceId: '00000000-0000-0000-0000-000000000000',
                        privacyId: '1',
                        type: '1',
                        isImportant: false
                    },
                    failOnStatusCode: false
                    });
                                                    }
  cy.request({
  method: 'POST',
  url: 'https://workw.com/workwapi/api/Feed/AddFeed',
  headers: { Authorization: `Bearer ${token}` },
  body: {
    title: "test",
    id: '00000000-0000-0000-0000-000000000000',
    parentId: '00000000-0000-0000-0000-000000000000',
    referenceType: '1',
    referenceId: '00000000-0000-0000-0000-000000000000',
    privacyId: '1',
    type: '1',
    isImportant: false
  },
  failOnStatusCode: false
}).then((response) => {
  expect(response.status).to.eq(429); // expect Too Many Requests
});
                                                 })
    })