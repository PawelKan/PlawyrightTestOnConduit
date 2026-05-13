import {expect, Locator, Page} from '@playwright/test';
import { BasePage } from './BasePage';

export class RegisterPage extends BasePage{
    constructor(page: Page) {
        super(page)
    }

    get url(){
        return '/register'
    }

    get usernameInput(): Locator{
        return this.page.getByRole('textbox', { name: 'Username' });
        
    }
    get emailInput(): Locator{
        return this.page.getByRole('textbox', { name: 'Email' });
    }
    get passwordInput(): Locator{
        return this.page.getByRole('textbox', { name: 'Password' });
    }
    get signUpButton(): Locator{
        return this.page.getByRole('button', { name: 'Sign up' });
    }
    get signUpHeader(): Locator{
        return this.page.getByRole('heading', { level: 1, name: 'Sign up' });
    }
    get haveAnAccountLink(): Locator{
        return this.page.getByRole('link', { name: 'Have an account?' });
    }    

    async registerNewUser(username: string, email: string, password: string) {
        await this.usernameInput.fill(username);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signUpButton.click();
    }

    async verifyHeaderText(){
        await expect(this.signUpHeader).toHaveText('Sign up');
    }
 
}