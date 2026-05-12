import {expect, Locator, Page } from '@playwright/test';

export class NavbarForLoggedInUser {
  readonly page: Page;
  readonly homeLink: Locator;
  readonly newArticleLink: Locator;
  readonly settingsLink: Locator;
  readonly userProfileLink: Locator;
  readonly logoLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoLink = page.locator(".navbar.navbar-light").getByRole('link', { name: 'conduit' });
    this.homeLink = page.getByRole('link', { name: 'Home' });
    this.newArticleLink = page.getByRole('link', { name: 'New Article' });
    this.settingsLink = page.getByRole('link', { name: 'Settings' });
    this.userProfileLink = page.getByTitle('User Profile');
  }
  async navigate() {
    await this.page.goto('/');
  }

  async verifyUserIsLoggedIn(userName: string){
        await expect(this.userProfileLink).toHaveText(userName);
        await expect(this.page).toHaveURL('/');    
  }
}