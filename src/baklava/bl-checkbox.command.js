import { addWebComponentSelectionCommands } from "../utils";

addWebComponentSelectionCommands("bl-checkbox", "blCheckbox");

Cypress.Commands.overwrite("check", (originalFn, subject, options) => {
  if (subject && subject[0].tagName === "BL-CHECKBOX") {
    cy.wrap(subject).click();

    return cy.wrap(subject);
  }

  return originalFn(subject, options);
});

Cypress.Commands.overwrite("uncheck", (originalFn, subject, options) => {
  if (subject && subject[0].tagName === "BL-CHECKBOX") {
    cy.wrap(subject).click();

    return cy.wrap(subject);
  }

  return originalFn(subject, options);
});

Cypress.Commands.overwrite("label", (originalFn, subject, label) => {
  if (subject && subject[0].tagName === "BL-CHECKBOX") {
    return cy.wrap(subject).contains(label);
  }

  return originalFn(subject, label);
});
