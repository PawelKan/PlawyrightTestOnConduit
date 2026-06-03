import { test, expect } from '../fixtures/fixtures';

test.describe('Home page tests for not logged in user', () => {

  test.beforeEach('go to Home Page', async ({onHomePage}) => {
    //Given
    await onHomePage.openPage();
  })

test('Home page has title Conduit', async ({ onHomePage }) => {
  await expect(onHomePage.page).toHaveTitle(/Conduit/);
});

test('check elements on home page when user is not logged in', async ({ onHomePage }) => {
  //Then
  await onHomePage.header.verifyUserIsNotLoggedIn();
  await onHomePage.verifyHomePageContentForNotLoggedInUser();
})

test('navigation to Sign up (register page) and back works correctly', async ({ onHomePage, onRegisterPage }) => {
  //When
  await onHomePage.header.clickOnSignUpLink();
  await onRegisterPage.verifyHeaderText();
  await onRegisterPage.header.clickOnHomeLink();
  
  //Then
  await expect(onHomePage.paragraphAPlaceToShareYourKnowledge).toBeVisible();
});

test.fixme('navigation to Sign in page and back works correctly', async ({ onHomePage, onRegisterPage }) => {
  //When
  await onHomePage.header.clickOnSignInLink();
  //await loginPage.verifyHeaderText(); //add verification for sign in page title header later
  await onRegisterPage.header.clickOnHomeLink();
  
  //Then
  await expect(onHomePage.paragraphAPlaceToShareYourKnowledge).toBeVisible();
})
});