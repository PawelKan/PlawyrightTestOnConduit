import { test, expect } from '@playwright/test';
import { NavbarForNotLoggedIn } from '../page-objects/NavbarForNotLoggedIn';
import { HomePageContent } from '../page-objects/HomePageContent';

test.describe('Home page tests for not logged in user', () => {
  let navBarForNotLoggedIn: NavbarForNotLoggedIn;
  let homePageContent: HomePageContent;

  test.beforeEach('go to page', async ({page}) => {
    //Given
    navBarForNotLoggedIn = new NavbarForNotLoggedIn(page);
    homePageContent = new HomePageContent(page);


    await page.goto('/')
  })

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Conduit/);
});

test('check elements on home page when user is not logged in', async ({ page }) => {
  //Then
  await expect(navBarForNotLoggedIn.homeLink).toBeVisible();
  await expect(navBarForNotLoggedIn.logoLink).toBeVisible();
  await expect(navBarForNotLoggedIn.signInLink).toBeVisible();
  await expect(navBarForNotLoggedIn.signUpLink).toBeVisible();
  await expect(homePageContent.globalFeedTab).toBeVisible();
  await expect(homePageContent.yourFeedTab).toBeVisible();
  await expect(homePageContent.headerOneConduit).toBeVisible();
  await expect(homePageContent.paragraphAPlaceToShareYourKnowledge).toBeVisible();
})

test('navigation to Sign Up page and back works correctly', async ({ page }) => {
  //When
  await navBarForNotLoggedIn.signUpLink.click();
  await expect(page.getByRole('heading', { level: 1, name: 'Sign up' })).toBeVisible(); //TO DO add this to page object later
  await navBarForNotLoggedIn.homeLink.click();
  
  //Then
  await expect(homePageContent.paragraphAPlaceToShareYourKnowledge).toBeVisible();
});

test('navigation to Sign in page and back works correctly', async ({ page }) => {
  //When
  await navBarForNotLoggedIn.signInLink.click();
  await expect(page.getByRole('heading', { level: 1, name: 'Sign in' })).toBeVisible(); //TO DO add this to page object later
  await navBarForNotLoggedIn.logoLink.click();
  
  //Then
  await expect(homePageContent.paragraphAPlaceToShareYourKnowledge).toBeVisible();
})
});