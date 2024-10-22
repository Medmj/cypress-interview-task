import { DropdownPage } from "../../pages/dropdownPage";
import { CommonElements } from "../../pages/common";

const dropdownPage = new DropdownPage();
const commonelements = new CommonElements();

describe("Dropdown Component Tests", () => {
  beforeEach(() => {
    dropdownPage.visit();
  });

  it("should select Option 1 and verify the selection", () => {
    commonelements.verifyPageTitle("Dropdown List");
    dropdownPage.selectOption("Option 1");
    dropdownPage.verifySelectedOption("1");
  });

  it("should select Option 2 and verify the selection", () => {
    commonelements.verifyPageTitle("Dropdown List");
    dropdownPage.selectOption("Option 2");
    dropdownPage.verifySelectedOption("2");
  });
});
