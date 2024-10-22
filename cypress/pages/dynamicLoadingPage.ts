export class DynamicLoadingPage {
  visit() {
    cy.navigateToComponentPage("dynamic_loading");
  }

  visitExample(exampleNumber: number) {
    cy.get(`[href="/dynamic_loading/${exampleNumber}"]`).click();
  }

  clickStartButton() {
    cy.get("#start button").click();
  }

  verifySectionTitle(title: string) {
    cy.get("h4")
      .first()
      .should("exist")
      .and("be.visible")
      .and("have.text", title);
  }

  verifyLoadingComplete() {
    cy.get("#finish", { timeout: 10000 })
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Hello World!");
  }
}
