import { addWebComponentSelectionCommands } from "../utils";

addWebComponentSelectionCommands("bl-switch", "blSwitch");

Cypress.Commands.add("toggle", { prevSubject: "optional" }, (subject) => {
  if (subject) {
    cy.wrap(subject).shadow().find("span").click();

    return cy.wrap(subject);
  }

  return cy.click();
});
