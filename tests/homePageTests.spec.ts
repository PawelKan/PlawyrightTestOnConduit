import { test, expect } from '@playwright/test';
import { NavbarForNotLoggedInUser } from '../page-objects/NavbarForNotLoggedInUser';
import { HomePageContent } from '../page-objects/HomePageContent';
import { RegisterPage } from '../page-objects/RegisterPage';

test.describe('Home page tests for not logged in user', () => {
  let onNavbarForNotLoggedIn: NavbarForNotLoggedInUser;
  let onHomePage: HomePageContent;
  let onRegisterPage: RegisterPage;

  test.beforeEach('go to page', async ({page}) => {
    //Given
    onNavbarForNotLoggedIn = new NavbarForNotLoggedInUser(page);
    onHomePage = new HomePageContent(page);
    onRegisterPage = new RegisterPage(page);


    await page.goto('/')
  })

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Conduit/);
});

test('check elements on home page when user is not logged in', async ({ page }) => {
  //Then
  await onNavbarForNotLoggedIn.verifyUserIsNotLoggedIn();
  await onHomePage.verifyHomePageContentForNotLoggedInUser();
})

test('navigation to Sign up (register page) and back works correctly', async ({ page }) => {
  //When
  await onNavbarForNotLoggedIn.clickOnSignUpLink();
  await onRegisterPage.verifyHeaderText();
  await onNavbarForNotLoggedIn.clickOnHomeLink();
  
  //Then
  await expect(onHomePage.paragraphAPlaceToShareYourKnowledge).toBeVisible();
});

test('navigation to Sign in page and back works correctly', async ({ page }) => {
  //When
  await onNavbarForNotLoggedIn.clickOnSignInLink();
  await expect(page.getByRole('heading', { level: 1, name: 'Sign in' })).toBeVisible(); //TO DO add this to page object later
  await onNavbarForNotLoggedIn.clickOnHomeLink();
  
  //Then
  await expect(onHomePage.paragraphAPlaceToShareYourKnowledge).toBeVisible();
})
});