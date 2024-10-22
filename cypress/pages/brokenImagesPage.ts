export class BrokenImagesPage {
  visit() {
    cy.navigateToComponentPage("broken_images");
  }

  getImageByIndex(index: number) {
    return cy.get("img").eq(index);
  }

  verifyImageState($img: JQuery<HTMLElement>, shouldBeBroken: boolean) {
    cy.wrap($img)
      .should("exist")
      .should("be.visible")
      .and(($img) => {
        const imgElement = $img[0] as HTMLImageElement;
        if (shouldBeBroken) {
          expect(imgElement.naturalWidth).to.be.eq(0);
        } else {
          expect(imgElement.naturalWidth).to.be.gt(0);
        }
      });
  }
}
