import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { RegisterPage } from '../pages/RegisterPage';
import { HomePageContent } from '../pages/HomePageContent';


test.describe('Register page tests', () =>{
    let onHomePage: HomePageContent;
    let onRegisterPage: RegisterPage;

    test.beforeEach('go to page', async ({page}) => {
        //Given
        onHomePage = new HomePageContent(page);
        onRegisterPage = new RegisterPage(page);
        await onRegisterPage.openPage();
    });

    test('register new user with fake data', async ({ page }) => {
        //Given
        const userName = faker.internet.username();
        const userMail = faker.internet.email();
        const userPassword = faker.internet.password();

        //When
        await onRegisterPage.registerNewUser(userName, userMail, userPassword);

        // Then
        await onHomePage.header.verifyUserIsLoggedIn(userName);
    });

    test.fixme ('register new user with already used email', async ({ page }) => {
    });
})
