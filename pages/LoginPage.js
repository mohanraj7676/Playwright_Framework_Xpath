const BasePage =
require('./BasePage');

const locator =
require('../locators/LoginPageLocators');

class LoginPage extends BasePage {

    constructor(page){

        super(page);

    }

    async clickSignupLogin(){

        await this.click(
            locator.signupLogin
        );

    }

    async enterEmail(email){

        await this.enterText(
            locator.email,
            email
        );

    }

    async enterPassword(password){

        await this.enterText(
            locator.password,
            password
        );

    }

    async clickLogin(){

        await this.click(
            locator.loginButton
        );

    }

}

module.exports =
LoginPage;