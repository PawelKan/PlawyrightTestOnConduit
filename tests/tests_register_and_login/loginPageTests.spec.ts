import { test, expect } from '../fixtures/fixtures';

test.describe('Login page tests', () =>{

    test.beforeEach('go to Login page', async ({onLoginPage}) => {
        //Given
        await onLoginPage.openPage();
    });

    test('verify elements on login page', async ({ onLoginPage}) => {
        await onLoginPage.verifyElements();
    });

    test('login with valid credentials', async({onHomePage, onLoginPage}) => {
        const userEmail: string = "myEmail@testtest.com"
        const userPass: string = "myPass"
        const userName: string = "myUsername"

        await onLoginPage.loginAsUser(userEmail, userPass);
        await onHomePage.header.verifyUserIsLoggedIn(userName);
    })
})