Cypress Testsuite
---

Abstraction of Cypress for the [frappe framework](https://github.com/frappe/frappe)

## Installation 

1. Delete the existing cypress folder within your frappe application folder.

2. Clone this repository in the apps/frappe directory

```bash
$ git clone git@github.com:frappe/cypress-testsuite.git cypress

```

3. Create a cypress.json file within the frappe application directory, an example config for it would go as follows:


```json
{
  "baseUrl": "http://<instance-url>:<port>",
  "projectId": "92odwv",
  "adminPassword": "frappe",
  "viewportHeight": 1080,
  "viewportWidth": 1920
}
```

## Documentation
Checkout the [commands.js](support/commands.js) for available commands

## Exmaple
 You can find examples in the  [integration folder](integration/) for examples.
