/// <reference types="cypress" />

Cypress.Commands.add("navigateToComponentPage", (component: string) => {
  const baseUrl = Cypress.config("baseUrl");
  cy.visit(`${baseUrl}/${component}`);
});

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to navigate to a component by appending its name to the base URL.
       * @example cy.navigateToComponent('dropdown')
       */
      navigateToComponentPage(component: string): Chainable<void>;
    }
  }
}

export {};
