# login-registration-handler-router

This example provides a basic router solution for overriding the Okta landing page.  It uses OIDC and Okta groups to determine a landing page when a redirect is not provided to a custom login solution.

## Getting Started

To begin, you'll need to install `node.js` version >10:

```console
$ npm install
$ npm run build
```

A `dist` folder will be create containing the index.html and minified js file which performs the OIDC and router logic.

This can be deployed to any webserver, amazon s3 or equivalent.