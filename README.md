Cypress Automation Tasks

Overview
This project contains automated tests using Cypress for the website [the-internet](https://the-internet.herokuapp.com/). The tests check components like dropdowns, images, dynamic loading, and redirect links.

Setup:

Clone the repo:

- git clone <repository-url>
- cd <repository-directory>

Install dependencies:

- npm install

Running Tests:
To run the tests, use:

- npx cypress open

This opens the Cypress Test Runner. You can also run tests in headless mode with:

- npx cypress run

The tests are in the cypress/e2e/components folder:

[text](cypress/e2e/components/brokenImages.cy.ts)
[text](cypress/e2e/components/dropdown.cy.ts)
[text](cypress/e2e/components/dynamicLoading.cy.ts)
[text](cypress/e2e/components/redirectLink.cy.ts)

The page objects and definitions are in the cypress/pages folder:

[text](cypress/pages/brokenImagesPage.ts)
[text](cypress/pages/dropdownPage.ts)
[text](cypress/pages/dynamicLoadingPage.ts)
[text](cypress/pages/redirectLinkPage.ts)
