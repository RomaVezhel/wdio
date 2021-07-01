import { loginPage } from "../pageobjects/login.page"
// const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials',  () => {
         loginPage.open();

         loginPage.login('tomsmith', 'SuperSecretPassword!');
         // expect(SecurePage.flashAlert).toBeExisting();
         // expect(SecurePage.flashAlert).toHaveTextContaining(
         //    'You logged into a secure area!');
    });
});


