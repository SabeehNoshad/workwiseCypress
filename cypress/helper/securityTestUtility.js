export const checkPreflightRequest = (url) => {
    cy.request({
      method: 'OPTIONS',
      url: url,
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.not.eq(200);
    });
  };