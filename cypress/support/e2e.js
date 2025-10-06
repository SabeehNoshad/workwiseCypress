// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import '@shelex/cypress-allure-plugin';



import 'cypress-mochawesome-reporter/register';
import './commands';

// Ignore only the specific null.document error globally
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes("Cannot read properties of null (reading 'document')")) {
    return false; // prevent Cypress from failing the test
  }
  return true; // let other errors fail as usual
});
Cypress.on('window:before:load', (win) => {
  if (!win.navigator.geolocation) {
    win.navigator.geolocation = {};
  }

  // Mock getCurrentPosition
  cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake((cb) => {
    cb({ coords: { latitude: 37.7749, longitude: -122.4194 } });
  });

  // Mock watchPosition
  cy.stub(win.navigator.geolocation, 'watchPosition').callsFake((cb) => {
    cb({ coords: { latitude: 37.7749, longitude: -122.4194 } });
  });

  // Mock permissions query
  if (!win.navigator.permissions) win.navigator.permissions = {};
  cy.stub(win.navigator.permissions, 'query').callsFake(({ name }) => {
    if (name === 'geolocation') return Promise.resolve({ state: 'granted' });
    return Promise.resolve({ state: 'prompt' });
  });
});
