describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/cypress/example/index.html");
  });

  it("button demo", async () => {
    cy.blButton("baklava-button")
      .kind("primary")
      .variant("primary")
      .icon("search")
      .isDisabled(false)
      .contains("Baklava")
      .click();

    cy.blInput("baklava-input")
      .type("Baklava")
      .placeholder("Enter Your Password")
      .helpText("Password must be at least 8 characters")
      .icon("lock")
      .label("Password")
      .should("have.value", "Baklava")
      .isDisabled(false)
      .clear();

    cy.blSelect("baklava-select")
      .select("Turkiye")
      .clear()
      .placeholder("Choose country")
      .isClearable(true)
      .label("Country")
      .isDisabled(false)
      .helpText("You can select only one country");

    cy.blCheckbox("baklava-checkbox")
      .check()
      .isDisabled(false)
      .uncheck()
      .label("Checkbox Label");
    cy.blSwitch("baklava-switch").toggle().isDisabled(false).toggle();

    cy.blTextarea("baklava-textarea")
      .type("Baklava")
      .placeholder("Enter Your Text")
      .helpText("Text must be at least 8 characters")
      .label("Text")
      .should("have.value", "Baklava")
      .isDisabled(false)
      .clear();

    cy.blAlert("baklava-alert")
      .should("include.text", "Baklava alert is working")
      .caption("Baklava Alert Caption")
      .clickPrimaryButton("action-primary")
      .clickSecondaryButton("action-secondary")
      .close();

    cy.blBadge("baklava-badge").icon("pin").contains("Location Badge");

    cy.blIcon("baklava-icon").size("3xl").name("pin");

    cy.blTabGroup("baklava-tab-group")
      .clickTab("Selected")
      .selectedTab("Selected");
  });
});
