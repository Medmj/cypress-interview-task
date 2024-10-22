export class RedirectLinkPage {
  visit() {
    cy.navigateToComponentPage("redirector");
  }

  clickHereLink() {
    cy.get("#redirect").should("exist").should("be.visible").click();
  }

  verifyStatusCodePage() {
    cy.url().should("include", "/status_codes");
  }

  clickStatusCodeLink(statusCode: string) {
    cy.contains(statusCode).should("exist").should("be.visible").click();
  }

  verifyRedirectionToStatusCode(statusCode: string) {
    cy.url().should(
      "include",
      `https://the-internet.herokuapp.com/status_codes/${statusCode}`
    );
    cy.get("p")
      .should("exist")
      .should("be.visible")
      .should(
        "contain.text",
        `This page returned a ${statusCode} status code.`
      );
  }

  navigateAndVerifyRedirectionToStatusCodeExternalPage = () => {
    cy.origin("https://www.iana.org", () => {
      cy.visit("/assignments/http-status-codes/http-status-codes.xhtml");

      cy.url().should(
        "eq",
        "https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml"
      );

      cy.get("#table-http-status-codes-1").should("exist").should("be.visible");
      cy.get("table thead").within(() => {
        cy.get("th").eq(0).should("contain.text", "Value");
        cy.get("th").eq(1).should("contain.text", "Description");
        cy.get("th").eq(2).should("contain.text", "Reference");
      });

      cy.get("table tbody tr").should("have.length.greaterThan", 0);

      const statusCodes = ["200", "301", "404", "500"];
      statusCodes.forEach((code) => {
        cy.get("table tbody").contains(code).should("be.visible");
      });
    });
  };
}
