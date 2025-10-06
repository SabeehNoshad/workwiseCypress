const { main } = require("../locators/mainLocators")

  function login(username,password){
    
    cy.visit("https://www.workw.com",{timeout:50000}, {
  onBeforeLoad(win) {
    cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake((cb) => {
      return cb({
        coords: {
          latitude: 37.7749,
          longitude: -122.4194,
          accuracy: 100,
        },
      });
    });
  },
});
    cy.get(':nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input',{timeout:10000}).should('be.visible').type(username);
    cy.get(':nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-affix-wrapper > .ant-input',{timeout:10000}).should('be.visible').type(password);
    
//     cy.get('.btn > .mb-3', { timeout: 3000 }).then($btn => {
//   if ($btn.length) {
//     cy.wrap($btn).click();
//   } else {
//     cy.log("allow button not found, moving on...");
//   }
// });
     cy.get('.btn > .w-full',{timeout:50000}).should('be.visible').should('not.be.disabled').click({multiple:true})
   // cy.get('.bg-gray-500').click();
}
module.exports = {login}

