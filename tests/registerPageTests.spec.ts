import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { RegisterPage } from '../page-objects/RegisterPage';
import { NavbarForLoggedInUser } from '../page-objects/NavbarForLoggedInUser';

test.describe('Register page tests', () =>{
    let onRegisterPage: RegisterPage;
    let onNavbarForLoggedIn: NavbarForLoggedInUser;
    test.beforeEach('go to page', async ({page}) => {
        //Given
        onRegisterPage = new RegisterPage(page);
        onNavbarForLoggedIn = new NavbarForLoggedInUser(page);
        await onRegisterPage.openPage();
    });

    test('register new user with fake data', async ({ page }) => {
        //Given
        let userName = faker.internet.username();
        let userMail = faker.internet.email();
        let userPassword = faker.internet.password();

        //When
        await onRegisterPage.registerNewUser(userName, userMail, userPassword);

        // Then
        await onNavbarForLoggedIn.verifyUserIsLoggedIn(userName);
    });

    test.fixme ('register new user with already used email', async ({ page }) => {
    });
})
