Cypress Automation Tasks

Overview
This project contains automated tests using Cypress for the website [the-internet](https://the-internet.herokuapp.com/). The tests check components like dropdowns, images, dynamic loading, and redirect links.

Setup:

Clone the repo:

- git clone https://the-internet.herokuapp.com/
- cd cypress-interview-task

Install dependencies:

- npm install

Running Tests:
To run the tests, use:

- npx cypress open

This opens the Cypress Test Runner. You can also run tests in headless mode with:

- npx cypress run

The tests are in the cypress/e2e/components folder:

[brokenImages](cypress/e2e/components/brokenImages.cy.ts)
[dropdown](cypress/e2e/components/dropdown.cy.ts)
[dynamicLoading](cypress/e2e/components/dynamicLoading.cy.ts)
[redirectLink](cypress/e2e/components/redirectLink.cy.ts)

The page objects and definitions are in the cypress/pages folder:

[brokenImagesPage](cypress/pages/brokenImagesPage.ts)
[dropdownPage](cypress/pages/dropdownPage.ts)
[dynamicLoadingPage](cypress/pages/dynamicLoadingPage.ts)
[redirectLinkPage](cypress/pages/redirectLinkPage.ts)
