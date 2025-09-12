describe("test",()=>{
    it("test",()=>{

cy.intercept('GET', 'https://www.hindustantimes.com/cdp/user/ht', (req) => {
    req.continue((res) => {
      // Modify the response data
      res.body = {
        ...res.body,
        ppid: 'MODIFIED-PPID-1234567890',
        status: false,
        _ht_fp: 'NEW-HT-FP-1234567890'
      };
    });
  }).as('modifiedResponse');
  
  // Trigger the request (e.g., visiting the page or performing an action)
  cy.visit('https://www.hindustantimes.com/cdp/user/ht');
  
  // Wait for the intercepted request and verify the modified response
  cy.wait('@modifiedResponse').then((interception) => {
    expect(interception.response.body.ppid).to.equal('MODIFIED-PPID-1234567890');
    expect(interception.response.body.status).to.equal(false);
    expect(interception.response.body._ht_fp).to.equal('NEW-HT-FP-1234567890');
  });
})
})