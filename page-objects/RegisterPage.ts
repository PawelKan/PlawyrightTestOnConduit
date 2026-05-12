import {Locator, Page} from '@playwright/test';

export class RegisterPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signUpButton: Locator;
    readonly signUpHeader: Locator;
    readonly haveAnAccountLink: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.emailInput = page.getByRole('textbox', { name: 'Email' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.signUpButton = page.getByRole('button', { name: 'Sign up' });
        this.signUpHeader = page.getByRole('heading', { level: 1, name: 'Sign up' });
        this.haveAnAccountLink = page.getByRole('link', { name: 'Have an account?' });
    }

    async openPage(){
        await this.page.goto('/register');
    }

}