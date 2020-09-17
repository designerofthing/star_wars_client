describe("Visitor can view a list of characters", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://swapi.dev/api/people",
      response: "fixture:response.json",
    });
    cy.visit("/");
  });
  it("showns a header and footer", () => {
    cy.get("#header").should("exist");
    cy.get("#footer").should("exist");
  });

  it("showns an image inside the header", () => {
    cy.get("#header").find("img#logo").should("be.visible");
  });
  it("showns description text inside the header", () => {
    cy.get("#header-text").should("contain", "View and search for your favourite Star Wars characters");
  });

  it("shows a list of characters", () => {
    cy.get("#main-container").within(() => {
      cy.get("#character-list").should("contain", "Luke Skywalker");
      cy.get("#character-list").should("contain", "Obi-Wan Kenobi");
    });
  });
});
