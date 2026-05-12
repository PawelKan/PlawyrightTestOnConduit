import { expect, Locator, Page } from '@playwright/test';

export class NavbarForNotLoggedInUser {
  readonly page: Page;
  readonly signInLink: Locator;
  readonly signUpLink: Locator;
  readonly homeLink: Locator;
  readonly logoLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInLink = page.getByRole('link', { name: 'Sign in' });
    this.signUpLink = page.getByRole('link', { name: 'Sign up' });
    this.homeLink = page.getByRole('link', { name: 'Home' });
    this.logoLink = page.locator(".navbar.navbar-light").getByRole('link', { name: 'conduit' });

  }
  async navigate() {
    await this.page.goto('/');
  }

  async verifyUserIsNotLoggedIn(){
      await expect(this.homeLink).toHaveText('Home');
      await expect(this.logoLink).toBeVisible();
      await expect(this.signInLink).toHaveText('Sign in');
      //await expect(this.signUpLink).toHaveText('Sign up');
  }

  async clickOnSignInLink(){
    return this.signInLink.click();
  }

  async clickOnSignUpLink(){
    return this.signUpLink.click();
  }

  async clickOnHomeLink(){
    return this.homeLink.click();
  }

  async clickOnLogoLink(){
    return this.logoLink.click();
  }

}