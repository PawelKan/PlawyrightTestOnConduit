import {expect, Locator, Page} from "@playwright/test";

export class Header{
    readonly page: Page;
    constructor(page: Page){
        this.page = page;
    }

    get homeLink(): Locator{
        return this.page.getByRole('link', { name: 'Home' });    
    }
    get logoLink(): Locator{
        return this.page.locator(".navbar.navbar-light").getByRole('link', { name: 'conduit' });    
    }
    get signInLink(): Locator{
        return this.page.getByRole('link', { name: 'Sign in' });    
    }
    get signUpLink(): Locator{
        return this.page.getByRole('link', { name: 'Sign up' });    
    }
    get loggedInNewArticleLink(): Locator{
        return this.page.getByRole('link', { name: 'New Article' });    
    }
    get loggedInSettingsLink(): Locator{
        return this.page.getByRole('link', { name: 'Settings' });    
    }
    get loggedInUserProfileLink(): Locator{
        return this.page.getByTitle('User Profile');    
    }

  async verifyUserIsNotLoggedIn(){
      await expect(this.homeLink).toHaveText('Home');
      await expect(this.logoLink).toBeVisible();
      await expect(this.signInLink).toHaveText('Sign in');
      await expect(this.signUpLink).toHaveText('Sign up');
  }

   async verifyUserIsLoggedIn(userName: string){
    await expect(this.loggedInNewArticleLink).toHaveText('New Article')
    await expect(this.loggedInSettingsLink).toHaveText('Settings')
    await expect(this.loggedInUserProfileLink).toHaveText(userName);
  }

  async clickOnSignInLink(){
    await this.signInLink.click();
    await expect(this.page).toHaveURL(/.*login/);
  }

  async clickOnSignUpLink(){
    await this.signUpLink.click();
    await expect(this.page).toHaveURL(/.*register/);
  }

  async clickOnHomeLink(){
    await this.homeLink.click();
  }

  async clickOnLogoLink(){
    await this.logoLink.click();
  }
}