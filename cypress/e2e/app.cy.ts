describe("Navigation", () => {
  it("should navigate to the main page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // find a network selection button and click to open menu
    cy.get('[data-cy="network-select-btn"]').click();

    // select devnet from the menu
    cy.get("li").contains("Devnet").click();

    // wait until it loads threads
    cy.wait(3000);

    // find a network selection button and click to hide menu
    cy.get('[data-cy="network-select-btn"]').click();

    // Find a link with an href attribute containing "HbeMiiNcf4nrj8v3i316kNKXr6qYdBk2dbSKDxWvGw6m" and click it
    cy.get(
      'a[href*="HbeMiiNcf4nrj8v3i316kNKXr6qYdBk2dbSKDxWvGw6m?network=devnet"]'
    ).click();

    // The new url should include "/address/HbeMiiNcf4nrj8v3i316kNKXr6qYdBk2dbSKDxWvGw6m"
    cy.url().should(
      "include",
      "/address/HbeMiiNcf4nrj8v3i316kNKXr6qYdBk2dbSKDxWvGw6m"
    );

    cy.wait(1000);

    // The new page should contain an h2 with "Thread"
    cy.get("h2").contains("Thread");
  });

  it("should navigate to the account page", () => {
    // find a network selection button and click to open menu
    cy.get('[data-cy="network-select-btn"]').click();

    // select devnet from the menu
    cy.get("li").contains("Devnet").click();

    // wait until it loads threads
    cy.wait(3000);

    // find a network selection button and click to hide menu
    cy.get('[data-cy="network-select-btn"]').click();

    // Start from the thread page
    cy.visit(
      "http://localhost:3000/address/HbeMiiNcf4nrj8v3i316kNKXr6qYdBk2dbSKDxWvGw6m?network=devnet"
    );
    cy.wait(1000);

    // Find a link with an href attribute containing "/address/HbeMiiNcf4nrj8v3i316kNKXr6qYdBk2dbSKDxWvGw6m?network=devnet" and click it
    cy.get(
      'a[href*="/address/HbeMiiNcf4nrj8v3i316kNKXr6qYdBk2dbSKDxWvGw6m?network=devnet"]'
    ).click();

    // The new url should include "/address/HbeMiiNcf4nrj8v3i316kNKXr6qYdBk2dbSKDxWvGw6m?network=devnet"
    cy.url().should(
      "include",
      "/address/HbeMiiNcf4nrj8v3i316kNKXr6qYdBk2dbSKDxWvGw6m?network=devnet"
    );

    cy.wait(1000);

    // The new page should contain an h2 with "Account"
    cy.get("h2").contains("Account");
  });

  it("should navigate to the next account page", () => {
    // Start from the account page
    cy.visit(
      "http://localhost:3000/address/HbeMiiNcf4nrj8v3i316kNKXr6qYdBk2dbSKDxWvGw6m?network=devnet"
    );
    cy.wait(1000);

    // Find a link with an href attribute containing "/address/HbeMiiNcf4nrj8v3i316kNKXr6qYdBk2dbSKDxWvGw6m?network=devnet" and click it
    cy.get(
      'a[href*="/address/3XXuUFfweXBwFgFfYaejLvZE4cGZiHgKiGfMtdxNzYmv?network=devnet"]'
    ).click();

    // The new url should include "/address/3XXuUFfweXBwFgFfYaejLvZE4cGZiHgKiGfMtdxNzYmv?network=devnet"
    cy.url().should(
      "include",
      "/address/3XXuUFfweXBwFgFfYaejLvZE4cGZiHgKiGfMtdxNzYmv?network=devnet"
    );

    cy.wait(1000);

    // The new page should contain an h2 with "Account"
    cy.get("h2").contains("Account");
  });
});

describe("Pagination", () => {
  it("should navigate to the next page", () => {
    // Start from the first page
    cy.visit("http://localhost:3000/");

    // find a network selection button and click to open menu
    cy.get('[data-cy="network-select-btn"]').click();

    // select devnet from the menu
    cy.get("li").contains("Devnet").click();

    // wait until it loads threads
    cy.wait(3000);

    // find a network selection button and click to hide menu
    cy.get('[data-cy="network-select-btn"]').click();

    cy.get('[data-cy="pagination-btn"]').contains("Next").click();

    cy.get("p#page_number").contains("2 of 10");
  });
});

export {};
