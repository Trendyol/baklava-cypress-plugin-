export const addCustomAttributeCommands = (attributeName) => {
  const toKebapCase = (str) => {
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
  };

  const name = toKebapCase(attributeName);

  Cypress.Commands.add(
    attributeName,
    { prevSubject: "optional" },
    (subject, attributeValue) => {
      if (subject) {
        return cy.wrap(subject).should("have.attr", name, attributeValue);
      }

      return cy.should("have.attr", name, attributeValue);
    }
  );
};

export const addWebComponentSelectionCommands = (tagName, command) => {
  Cypress.Commands.add(
    command,
    { prevSubject: "optional" },
    (subject, selector) => {
      if (subject) {
        return cy.wrap(subject).find(`${tagName}[data-testid="${selector}"]`);
      }
      return cy.get(`${tagName}[data-testid="${selector}"]`);
    }
  );
};
