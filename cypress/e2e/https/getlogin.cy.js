describe('api responsive', () => {
  it('get operation', () => {
    cy.request ({
        method:"GET",
        url:"https://www.workw.com",
    }).then((response)=>{
        expect(response.status).to.eq(200)
    })  
  });
})
