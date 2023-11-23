import { addWebComponentSelectionCommands } from "../utils";

addWebComponentSelectionCommands("bl-tab-group", "blTabGroup");
addWebComponentSelectionCommands("bl-tab", "blTab");

Cypress.Commands.add(
  "clickTab",
  { prevSubject: "optional" },
  (subject, tabName) => {
    if (subject) {
      cy.wrap(subject)
        .find("bl-tab")
        .contains(tabName)
        .shadow()
        .find("button")
        .click();

      return cy.wrap(subject);
    }

    return cy.click();
  }
);

Cypress.Commands.add(
  "selectedTab",
  { prevSubject: "optional" },
  (subject, tabName) => {
    if (subject) {
      cy.wrap(subject)
        .find("bl-tab")
        .contains(tabName)
        .then((tab) => {
          expect(tab).to.have.attr("selected");
        });

      return cy.wrap(subject);
    }

    return cy.click();
  }
);
