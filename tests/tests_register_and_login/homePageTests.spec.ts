import { test, expect } from '@playwright/test';
import { HomePageContent } from '../pages/HomePageContent';
import { RegisterPage } from '../pages/RegisterPage';

test.describe('Home page tests for not logged in user', () => {
  let onHomePage: HomePageContent;
  let onRegisterPage: RegisterPage;

  test.beforeEach('go to page', async ({page}) => {
    //Given
    onHomePage = new HomePageContent(page);
    onRegisterPage = new RegisterPage(page);
    await onHomePage.openPage();
  })

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Conduit/);
});

test('check elements on home page when user is not logged in', async ({ page }) => {
  //Then
  await onHomePage.header.verifyUserIsNotLoggedIn();
  await onHomePage.verifyHomePageContentForNotLoggedInUser();
})

test('navigation to Sign up (register page) and back works correctly', async ({ page }) => {
  //When
  await onHomePage.header.clickOnSignUpLink();
  await onRegisterPage.verifyHeaderText();
  await onRegisterPage.header.clickOnHomeLink();
  
  //Then
  await expect(onHomePage.paragraphAPlaceToShareYourKnowledge).toBeVisible();
});

test.fixme('navigation to Sign in page and back works correctly', async ({ page }) => {
  //When
  await onHomePage.header.clickOnSignInLink();
  //await loginPage.verifyHeaderText(); //add verification for sign in page title header later
  await onRegisterPage.header.clickOnHomeLink();
  
  //Then
  await expect(onHomePage.paragraphAPlaceToShareYourKnowledge).toBeVisible();
})
});