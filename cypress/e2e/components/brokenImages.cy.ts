import { BrokenImagesPage } from "../../pages/brokenImagesPage";
import { CommonElements } from "../../pages/common";

const brokenImagesPage = new BrokenImagesPage();
const commonelements = new CommonElements();

describe("Broken Images Component Tests", () => {
  beforeEach(() => {
    brokenImagesPage.visit();
    commonelements.verifyPageTitle("Broken Images");
  });

  it("should verify that the first image is broken", () => {
    brokenImagesPage.getImageByIndex(1).then(($img) => {
      brokenImagesPage.verifyImageState($img, true);
    });
  });

  it("should verify that the second image is broken", () => {
    brokenImagesPage.getImageByIndex(2).then(($img) => {
      brokenImagesPage.verifyImageState($img, true);
    });
  });

  it("should verify that the third image is not broken", () => {
    brokenImagesPage.getImageByIndex(3).then(($img) => {
      brokenImagesPage.verifyImageState($img, false);
    });
  });
});
