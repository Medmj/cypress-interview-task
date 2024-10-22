export class CommonElements {
  verifyPageTitle(title: string) {
    cy.get("h3").should("exist").and("be.visible").and("have.text", title);
  }
}
