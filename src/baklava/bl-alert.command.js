import {
  addCustomAttributeCommands,
  addWebComponentSelectionCommands,
} from "../utils";

addWebComponentSelectionCommands("bl-alert", "blAlert");

Cypress.Commands.add("close", { prevSubject: "optional" }, (subject) => {
  if (subject) {
    cy.wrap(subject).shadow().find("bl-button[icon='close']").click();

    return cy.wrap(subject);
  }

  return cy.click();
});

Cypress.Commands.add(
  "clickPrimaryButton",
  { prevSubject: "optional" },
  (subject, selector) => {
    if (subject) {
      cy.wrap(subject).find(`bl-button[data-testid="${selector}"]`).click();

      return cy.wrap(subject);
    }

    return cy.click();
  }
);

Cypress.Commands.add(
  "clickSecondaryButton",
  { prevSubject: "optional" },
  (subject, selector) => {
    if (subject) {
      cy.wrap(subject).find(`bl-button[data-testid="${selector}"]`).click();

      return cy.wrap(subject);
    }

    return cy.click();
  }
);

addCustomAttributeCommands("caption");

