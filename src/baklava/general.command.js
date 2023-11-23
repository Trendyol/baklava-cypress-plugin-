import { addCustomAttributeCommands } from "../utils";

Cypress.Commands.add(
  "getByTestId",
  { prevSubject: "optional" },
  (subject, id) => {
    if (subject) {
      return cy.wrap(subject).find(`[data-testid="${id}"]`);
    }
    return cy.get(`[data-testid="${id}"]`);
  }
);

Cypress.Commands.add(
  "isAttribute",
  { prevSubject: "optional" },
  (subject, attributeName, attributeValue) => {
    if (subject) {
      return cy
        .wrap(subject)
        .should("have.attr", attributeName, attributeValue);
    }

    return cy.should("have.attr", attributeName, attributeValue);
  }
);

Cypress.Commands.add(
  "isDisabled",
  { prevSubject: "optional" },
  (subject, isDisabled) => {
    if (subject) {
      if (isDisabled === false) {
        return cy.wrap(subject).should("not.be.disabled");
      }

      return cy.wrap(subject).should("be.disabled");
    }

    return cy.should(isDisabled ? "be.disabled" : "not.be.disabled");
  }
);

Cypress.Commands.overwrite("type", (originalFn, subject, text, options) => {
  if (subject && subject[0].tagName === "BL-TEXTAREA") {
    cy.wrap(subject).shadow().find("textarea").type(text, options);

    return cy.wrap(subject);
  }

  else if (subject && subject[0].tagName === "BL-INPUT") {
    cy.wrap(subject).shadow().find("input").type(text, options);

    return cy.wrap(subject);
  }

  return originalFn(subject, text, options);
});


Cypress.Commands.overwrite("clear", (originalFn, subject, options) => {
  if (subject && subject[0].tagName === "BL-INPUT") {
    cy.wrap(subject).shadow().find("input").clear(options);

    return cy.wrap(subject);
  }

  else if (subject && subject[0].tagName === "BL-TEXTAREA") {
    cy.wrap(subject).shadow().find("textarea").clear(options);

    return cy.wrap(subject);
  }

  else if (subject && subject[0].tagName === "BL-SELECT") {
    cy.wrap(subject).shadow().find("bl-button").click();

    return cy.wrap(subject);
  }

  return originalFn(subject, options);
});

addCustomAttributeCommands("placeholder");
addCustomAttributeCommands("icon");
addCustomAttributeCommands("helpText");
addCustomAttributeCommands("label");
addCustomAttributeCommands("placeholder");
addCustomAttributeCommands("icon");
addCustomAttributeCommands("kind");
addCustomAttributeCommands("variant");
