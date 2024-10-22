import { RedirectLinkPage } from "../../pages/redirectLinkPage";
import { CommonElements } from "../../pages/common";

const redirectLinkPage = new RedirectLinkPage();
const commonelements = new CommonElements();

describe("Redirect Link Component Tests", () => {
  beforeEach(() => {
    redirectLinkPage.visit();
    commonelements.verifyPageTitle("Redirection");
    redirectLinkPage.clickHereLink();
    redirectLinkPage.verifyStatusCodePage();
    commonelements.verifyPageTitle("Status Codes");
  });

  it("should verify redirect to status code 200", () => {
    redirectLinkPage.clickStatusCodeLink("200");
    redirectLinkPage.verifyRedirectionToStatusCode("200");
  });

  it("should verify redirect to status code 301", () => {
    redirectLinkPage.clickStatusCodeLink("301");
    redirectLinkPage.verifyRedirectionToStatusCode("301");
  });

  it("should verify redirect to status code 404", () => {
    redirectLinkPage.clickStatusCodeLink("404");
    redirectLinkPage.verifyRedirectionToStatusCode("404");
  });

  it("should verify redirect to status code 500", () => {
    redirectLinkPage.clickStatusCodeLink("500");
    redirectLinkPage.verifyRedirectionToStatusCode("500");
  });

  it.only("should verify redirection to external Status Codes page", () => {
    redirectLinkPage.navigateAndVerifyRedirectionToStatusCodeExternalPage();
  });
});
