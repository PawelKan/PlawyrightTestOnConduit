import { test, expect } from '../fixtures/fixtures';
import * as fileReadHelper from "../helpers/fileReadHelper"
test.use({ storageState: { cookies: [], origins: [] } }); // for not logged in tests

test.beforeEach('open Login page', async ({ onLoginPage }) => {
    await onLoginPage.openPage();
});

test.describe('Positive Login page tests', () => {

    test('verify elements on login page', async ({ onLoginPage }) => {
        await onLoginPage.verifyElements();
    });

    test('login with valid credentials', async ({ onHomePage, onLoginPage }) => {
        const userData = fileReadHelper.getUserData();
        await onLoginPage.loginAsUser(userData.USER_MAIL, userData.USER_PASS);
        await onHomePage.header.verifyUserIsLoggedIn(userData.USER_NAME);
    })
})

test.describe('Negative Login page tests', () => {

    test('should not login with invalid email', async ({ onLoginPage }) => {
        const userData = fileReadHelper.getUserData();
        await onLoginPage.loginAsUser('invalidTestMail@emailTest.com', userData.USER_PASS);
        await expect(onLoginPage.page.getByText("Invalid email or password")).toBeVisible();
    })

    test('should not login with invalid password', async ({ onLoginPage }) => {
        const userData = fileReadHelper.getUserData();
        await onLoginPage.loginAsUser(userData.USER_MAIL, "InvalidPassword111");
        await expect(onLoginPage.page.getByText("Invalid email or password")).toBeVisible();
    })
})