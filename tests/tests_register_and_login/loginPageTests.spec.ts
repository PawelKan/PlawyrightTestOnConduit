import { test, expect } from '../fixtures/fixtures';

test.describe('Login page tests', () =>{
    
    test.use({ storageState: { cookies: [], origins: [] } }); // for not logged in tests
    
    test.beforeEach('go to Login page', async ({onLoginPage}) => {
        //Given
        await onLoginPage.openPage();
    });

    test('verify elements on login page', async ({ onLoginPage}) => {
        await onLoginPage.verifyElements();
    });

    test('login with valid credentials', async({onHomePage, onLoginPage}) => {
        // const userEmail: string = "myEmail@testtest.com"
        // const userPass: string = "myPass"
        // const userName: string = "myUsername"
        

        await onLoginPage.loginAsUser(process.env.USER_MAIL, process.env.USER_PASS);
        await onHomePage.header.verifyUserIsLoggedIn(process.env.USER_NAME!);
    })
})