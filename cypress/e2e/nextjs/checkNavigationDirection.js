describe("Check navigation direction", () => {
  beforeEach(() => {
    // Load your Next.js app's homepage
    cy.visit("http://localhost:3000/");
  });

  it("should navigate to the correct page", () => {
    // Check if the navigation bar exists
    cy.get("nav").should("exist");

    // Check for navigation links or buttons
    cy.get("nav ul li a").should("have.length.above", 0);

    // Check if the logo is present
    cy.get("nav img").should("exist");
  });

  it("should navigate to the Home page", () => {
    // Click the Home link in the navigation bar
    cy.get('nav a[href="/"]').click();

    // Verify that you are on the Home page
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });

  it("should navigate to the About page", () => {
    // Click the About link in the navigation bar
    cy.get('nav a[href="/about"]').click();

    // Verify that you are on the About page
    cy.url().should("eq", Cypress.config().baseUrl + "/about");
  });
});
