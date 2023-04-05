# Unit Testing Custom Functions

Example showing how to unit test a HarperDB Custom Function project.

## Requirements
* Node JS

## Steps
1. Install dependencies
```shell
cd custom_functions && yarn
cd ../testing && yarn

# Run the test suite
yarn test
```

## CI/CD
Automating the testing process is very straight forward, we can just run the test command from our CI/CD pipeline. An example using GitHub Actions has been added for your reference:

* [testing.yml](testing.yml)

## How it works
### Helpers
Unit testing helpers is like unit testing any other NodeJS code. You can just import the helper and do the tests as normal. If you use `hdbCore` or some other special object, you'll have to make a stub like described in the Routes section below.

### Routes
To unit test a route, we have to setup a mock API and register our route with the application. When we do this, we can pass a custom `logger` and `hdbCore` object. This is where we can pass a stub, mock or spy to get what we need done.

The example included uses a database call stub to return an expected value to ensure the response code is working as intended.
