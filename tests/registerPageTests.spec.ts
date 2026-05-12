import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { RegisterPage } from '../page-objects/RegisterPage';
import { NavbarForLoggedInUser } from '../page-objects/NavbarForLoggedInUser';

test.describe('Registger page tests', () =>{
    let registerPage: RegisterPage;
    let navbarForLoggenIn: NavbarForLoggedInUser;
    test.beforeEach('go to page', async ({page}) => {
        //Given
        registerPage = new RegisterPage(page);
        navbarForLoggenIn = new NavbarForLoggedInUser(page);
        await registerPage.openPage();
    });

    test('register new user with fake data', async ({ page }) => {
        //Given
        let userName = faker.internet.username();
        let userMail = faker.internet.email();

        expect(page.url()).toContain('/register');
        expect(registerPage.signUpHeader).toHaveText('Sign up');
        expect(registerPage.haveAnAccountLink).toHaveText('Have an account?');

        //When
        await registerPage.usernameInput.fill(userName);
        await registerPage.emailInput.fill(userMail);
        await registerPage.passwordInput.fill('testpassword');
        await registerPage.signUpButton.click();

        // Then
        await expect(navbarForLoggenIn.logoLink).toBeVisible();
        await expect(navbarForLoggenIn.homeLink).toHaveText('Home');
        await expect(navbarForLoggenIn.newArticleLink).toHaveText('New Article');
        await expect(navbarForLoggenIn.settingsLink).toHaveText('Settings');
        await expect(navbarForLoggenIn.userProfileLink).toHaveText(userName);
        await expect(page).toHaveURL('/');
    })

    test.fixme ('register new user with already used email', async ({ page }) => {
    })
})
