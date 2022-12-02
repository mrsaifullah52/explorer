describe("Network settings", () => {
  it("should connect to devnet", () => {
    // start from the first page
    cy.visit("http://localhost:3000/");

    // find a network selection button and click to open menu
    cy.get('[data-cy="network-select-btn"]').click();

    // select devnet from the menu
    cy.get("li").contains("Devnet").click();

    // wait until it loads threads
    cy.wait(3000);

    // it should show Devnet on network selection button
    cy.get('[data-cy="network-select-btn"]').contains("Devnet");
  });
});

export {};
