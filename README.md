# Cypress Baklava Test Plugin

This Cypress plugin is designed to test the open-source UI library used in our company. The plugin includes customized Cypress commands to facilitate testing of some commonly used UI elements. Below are examples of how to use this plugin.

## Installation

1. Make sure you have added Cypress to your project. If you haven't added it yet, you can follow the [Cypress Installation](https://docs.cypress.io/guides/getting-started/installing-cypress) guide.

2. Use the following command to add this plugin to your project:

   ```bash
   npm i --save @trendyol/baklava-cypress-plugin
   ```

3. Create a test file in your Cypress project and start using this plugin.

4. To add Cypress commands to the `commands.js` file, you can do the following. You can find this file in the `support` folder of your Cypress project. If there is no `commands.js` file, you should create one.

   Open the `commands.js` file and add the following commands:

   ```javascript
   // Contains general commands for the plugin.
   import '@trendyol/baklava-cypress-plugin/src/baklava/general.command';

   // Adds necessary commands for Button.
   import '@trendyol/baklava-cypress-plugin/src/baklava/bl-button.command';

   // Adds necessary commands for Input.
   import '@trendyol/baklava-cypress-plugin/src/baklava/bl-input.command';

   // If you want to add more commands, you can do so here.
   ```

   This code will import the necessary Cypress commands into the `commands.js` file. This way, you can use these commands in all your test files. If you need to add other commands like `bl-select`, `bl-checkbox`, `bl-switch`, etc., you can import them in a similar way.

## Usage

Below are some examples of using this plugin. Each example focuses on testing a specific UI element.

### Button Test

```javascript
cy.blButton("baklava-button")
  .kind("primary")
  .variant("primary")
  .icon("search")
  .isDisabled(false)
  .contains("Baklava")
  .click();
```

### Input Test

```javascript
cy.blInput("baklava-input")
  .type("Baklava")
  .placeholder("Enter Your Password")
  .helpText("Password must be at least 8 characters")
  .icon("lock")
  .label("Password")
  .should("have.value", "Baklava")
  .isDisabled(false)
  .clear();
```

Similar tests can be created for other UI elements. There is a separate Cypress command for each feature.

1. Select: `cy.blSelect()`
2. Checkbox: `cy.blCheckbox()`
3. Switch: `cy.blSwitch()`
4. Textarea: `cy.blTextarea()`
5. Alert: `cy.blAlert()`
6. Badge: `cy.blBadge()`
7. Icon: `cy.blIcon()`

Each is designed to test a specific UI element, and you can interact with these elements using Cypress commands. For more information, it is useful to review the documentation of the plugin.

## Contribution

If you want to improve or fix bugs in this plugin, please contribute via [GitHub repository](https://github.com/Trendyol/baklava-cypress-plugin). Pull requests and issue reports are always welcome.

## License

This plugin is open source and distributed under the MIT License.

---