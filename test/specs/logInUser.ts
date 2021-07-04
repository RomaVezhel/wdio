import { loginPage } from "../pages/login.page"
import { securePage } from "../pages/secure.page";



describe.skip('My Login application', () => {
    it('should login with valid credentials',  () => {
         loginPage.open();

         loginPage.login('tomsmith', 'SuperSecretPassword!');
         expect(securePage.flashAlert).toBeExisting();
         expect(securePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});


