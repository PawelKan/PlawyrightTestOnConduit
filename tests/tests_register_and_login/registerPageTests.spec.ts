import { test } from '../fixtures/fixtures';
import { faker } from '@faker-js/faker';

test.describe('Register page tests', () =>{

    test.beforeEach('go to Register Page', async ({onRegisterPage}) => {
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

    test.fixme ('should not be able to register new user with already used email', async ({ onRegisterPage }) => {
    });
})