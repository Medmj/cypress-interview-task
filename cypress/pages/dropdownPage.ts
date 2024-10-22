export class DropdownPage {
  private dropdownSelector = "#dropdown";

  visit() {
    cy.navigateToComponentPage("dropdown");
  }

  selectOption(option: string) {
    cy.get(this.dropdownSelector).select(option);
  }

  verifySelectedOption(value: string) {
    cy.get(this.dropdownSelector).should("have.value", value);
  }
}
