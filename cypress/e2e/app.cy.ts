describe("Navigation", () => {
  it("should navigate to the thread page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "HbeMiiNcf4nrj8v3i316kNKXr6qYdBk2dbSKDxWvGw6m" and click it
    cy.get(
      'a[href*="HbeMiiNcf4nrj8v3i316kNKXr6qYdBk2dbSKDxWvGw6m?network=devnet"]'
    ).click();

    // The new url should include "/queue/HbeMiiNcf4nrj8v3i316kNKXr6qYdBk2dbSKDxWvGw6m"
    cy.url().should(
      "include",
      "/queue/HbeMiiNcf4nrj8v3i316kNKXr6qYdBk2dbSKDxWvGw6m"
    );

    cy.wait(1000);

    // The new page should contain an h3 with "Thread"
    cy.get("h3").contains("Thread");
  });

  it("should navigate to the account page", () => {
    // Start from the thread page
    cy.visit(
      "http://localhost:3000/queue/HbeMiiNcf4nrj8v3i316kNKXr6qYdBk2dbSKDxWvGw6m?network=devnet"
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

    // The new page should contain an h3 with "Thread"
    cy.get("h2").contains("Account");
  });
});

export {};
