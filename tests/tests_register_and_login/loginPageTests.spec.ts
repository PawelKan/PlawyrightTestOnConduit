import { test, expect } from '../fixtures/fixtures';


test.use({ storageState: { cookies: [], origins: [] } }); // for not logged in tests

test.beforeEach('open Login page', async ({ onLoginPage }) => {
    await onLoginPage.openPage();
});

test.describe('Positive Login page tests', () => {

    test('verify elements on login page', async ({ onLoginPage }) => {
        await onLoginPage.verifyElements();
    });

    test('login with valid credentials', async ({ onHomePage, onLoginPage }) => {
        await onLoginPage.loginAsUser(process.env.USER_MAIL!, process.env.USER_PASS!);
        await onHomePage.header.verifyUserIsLoggedIn(process.env.USER_NAME!);
    })
})

test.describe('Negative Login page tests', () => {

    test('should not login with invalid email', async ({ onLoginPage }) => {
        await onLoginPage.loginAsUser('invalidTestMail@emailTest.com', process.env.USER_PASS!);
        await expect(onLoginPage.page.getByText("Invalid email or password")).toBeVisible()
    })

    test('should not login with invalid password', async ({ onLoginPage }) => {
        await onLoginPage.loginAsUser(process.env.USER_MAIL!, "InvalidPassword111");
        await expect(onLoginPage.page.getByText("Invalid email or password")).toBeVisible()
    })
})