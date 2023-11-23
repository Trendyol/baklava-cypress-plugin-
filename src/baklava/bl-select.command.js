import { addWebComponentSelectionCommands } from "../utils";

addWebComponentSelectionCommands("bl-select", "blSelect");

Cypress.Commands.overwrite("select", (originalFn, subject, value, options) => {
  if (subject && subject[0].tagName === "BL-SELECT") {
    cy.wrap(subject).click();

    cy.wrap(subject).find("bl-select-option").contains(value).click();

    return cy.wrap(subject);
  }

  return originalFn(subject, value, options);
});

Cypress.Commands.add(
  "isClearable",
  { prevSubject: "optional" },
  (subject, isClearable) => {
    if (subject) {
      if (isClearable === false) {
        cy.wrap(subject).shadow().find("bl-button").should("not.exist");
      }

      cy.wrap(subject).shadow().find("bl-button").should("exist");

      return cy.wrap(subject);
    }

    return cy.should(isClearable ? "exist" : "not.exist");
  }
);
