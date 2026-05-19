import { test, expect } from '../fixtures/fixtures';
import { faker } from '@faker-js/faker';
import { RegisterPage } from '../pages/RegisterPage';
import { HomePage } from '../pages/HomePage';


test.describe('Register page tests', () =>{

    test.beforeEach('go to page', async ({onRegisterPage}) => {
        //Given
        await onRegisterPage.openPage();
    });

    test('register new user with fake data', async ({ onRegisterPage, onHomePage }) => {
        //Given
        const userName = faker.internet.username();
        const userMail = faker.internet.email();
        const userPassword = faker.internet.password();

        //When
        await onRegisterPage.registerNewUser(userName, userMail, userPassword);

        // Then
        await onHomePage.header.verifyUserIsLoggedIn(userName);
    });

    test.fixme ('register new user with already used email', async ({ onRegisterPage }) => {
    });
})
