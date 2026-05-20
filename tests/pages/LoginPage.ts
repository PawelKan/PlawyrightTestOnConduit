import {test, expect, Page, Locator} from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage{
    constructor(page: Page){
        super(page)
    }

    get url() : string { return '/login';}

    get headerOne(): Locator {
        return this.page.getByRole('heading', {name: 'Sign in', level: 1})
    }

    get needAnAccountLink(): Locator{
        return this.page.getByRole('link', {name: "Need an account?"})
    }

    get emailInput(): Locator{
        return this.page.getByRole('textbox', {name: 'Email'})
    }

    get passwordInput(): Locator{
        return this.page.getByRole('textbox', {name: 'Password'})
    }

    get signInButton(): Locator{
        return this.page.getByRole('button', {name: 'Sign in'})
    }

    async verifyElements(): Promise<void>{
        await expect(this.headerOne).toContainText('Sign in')
        await expect(this.needAnAccountLink).toContainText('Need an account?')
        await expect(this.emailInput).toBeVisible()
        await expect(this.passwordInput).toBeVisible()
        await expect(this.signInButton).toBeVisible()
    }

    async loginAsUser(email?: string, password?: string): Promise<void>{
        if (email){ await this.emailInput.fill(email) }
        if (password) { await this.passwordInput.fill(password)}
        await this.signInButton.click();
    }
}