import {
  addCustomAttributeCommands,
  addWebComponentSelectionCommands,
} from "../utils";

addWebComponentSelectionCommands("bl-icon", "blIcon");

addCustomAttributeCommands("name");

Cypress.Commands.add("size", { prevSubject: "optional" }, (subject, size) => {
  if (subject) {
    const style = subject.attr("style");

    if (style) {
      const fontSize = style.match(/font-size: var\(--bl-font-size-(\w+)\)/);

      console.log(fontSize, "fontSize");

      if (fontSize) {
        expect(fontSize[1]).to.equal(size);
      } else {
        throw new Error("font-size not found");
      }
    }
  }

  return cy.wrap(subject);
});
