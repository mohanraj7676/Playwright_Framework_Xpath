const {
Given,
When,
Then
} =
require('@cucumber/cucumber');

const LoginPage =
require('../pages/LoginPage');

const env =
require('../config/env.json');

const data =
require('../testdata/loginData.json');

let loginPage;

Given(
'User launches application',

async function(){

await this.page.goto(
env.qa.url
);

loginPage =
new LoginPage(
this.page
);

});

When(
'User clicks Signup Login',

async function(){

await loginPage.clickSignupLogin();

});

When(
'User enters email',

async function(){

await loginPage.enterEmail(
data.email
);

});

When(
'User enters password',

async function(){

await loginPage.enterPassword(
data.password
);

});

When(
'User clicks Login button',

async function(){

await loginPage.clickLogin();

});

Then(
'User should be logged in',

async function(){

console.log(
'Login Completed'
);

});