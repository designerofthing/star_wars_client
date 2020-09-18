describe("Visitor can search for characters", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://swapi.dev/api/people/?page=1",
      response: "fixture:response.json",
    });
    cy.visit("/");
  });
  it("shows an search input and button", () => {
    cy.get("#search-input").should("exist");
    cy.get("#search-button").should("exist");
  });
  it('accepts input and searches', () => {
    cy.get("#search-input").type("Luke");
    cy.get("#search-button").click();
    cy.get(".search-results").should("contain", "Luke Skywalker")
  });
});
