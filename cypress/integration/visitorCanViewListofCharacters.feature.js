describe("Visitor can view a list of characters", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://swapi.dev/api/people/?page=1",
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
    cy.get("#header").should(
      "contain",
      "View and search for your favourite Star Wars characters"
    );
  });

  it("shows a list of characters", () => {
    cy.get("#main-container").within(() => {
      cy.get("#character-list").should("contain", "Luke Skywalker");
      cy.get("#character-list").should("contain", "Obi-Wan Kenobi");
    });
  });

  it("shows a next page button", () => {
    cy.get("#next-button").should("be.visible");
  });
  it("shows the next page list of character on button click", () => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://swapi.dev/api/people/?page=2",
      response: "fixture:response_page_2.json",
    });
    cy.get("#next-button").click();
    // cy.wait(1000);
    cy.get("#next-button").click();
    cy.get("#character-list").should("contain", "Anakin Skywalker");
    cy.get("#character-list").should("contain", "Palpatine");
    cy.get("#previous-button").should("be.visible");
  });
});
