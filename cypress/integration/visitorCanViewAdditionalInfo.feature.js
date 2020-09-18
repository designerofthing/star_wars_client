describe("Visitor can view additional information", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://swapi.dev/api/people/?page=1",
      response: "fixture:response.json",
    });
    cy.visit("/");
    cy.get("#view-list").click();
  });

  it("can click on characters name", () => {
    cy.get("#main-container").within(() => {
      cy.get("#C-3PO").click();
    });
  });
  it("displays additional information", () => {
    cy.get("#main-container").within(() => {
      cy.get("#C-3PO").click();
    });
    cy.get("#C-3PO").should(
      "contain",
      "Height: 167",
      "Weight in kgs: 75",
      "Hair colour: n/a",
      "Skin colour: gold"
    );
  });
  it('upon click removes additional information', () => {
    cy.get("#main-container").within(() => {
      cy.get("#C-3PO").click();
      cy.get("#C-3PO").click();
    });
    cy.get("#C-3PO-info").should(
      "not.be.visible"
    );
  });
});
