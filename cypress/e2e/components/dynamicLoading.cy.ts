import { DynamicLoadingPage } from "../../pages/dynamicLoadingPage";
import { CommonElements } from "../../pages/common";

const dynamicLoadingPage = new DynamicLoadingPage();
const commonelements = new CommonElements();

describe("Dynamic Loading Component Tests", () => {
  beforeEach(() => {
    dynamicLoadingPage.visit();
  });

  it("should start loading and verify it completes : Example 1: Element on page that is hidden", () => {
    dynamicLoadingPage.visitExample(1);
    commonelements.verifyPageTitle("Dynamically Loaded Page Elements");
    dynamicLoadingPage.verifySectionTitle(
      "Example 1: Element on page that is hidden"
    );
    dynamicLoadingPage.clickStartButton();
    dynamicLoadingPage.verifyLoadingComplete();
  });

  it("should start loading and verify it completes : Example 2: Element rendered after the fact", () => {
    dynamicLoadingPage.visitExample(2);
    commonelements.verifyPageTitle("Dynamically Loaded Page Elements");
    dynamicLoadingPage.verifySectionTitle(
      "Example 2: Element rendered after the fact"
    );
    dynamicLoadingPage.clickStartButton();
    dynamicLoadingPage.verifyLoadingComplete();
  });
});
