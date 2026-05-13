import {Page, Locator} from '@playwright/test';
import { Header } from '../components/Header';

export abstract class BasePage{
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    abstract get url(): string;
    
    async openPage(): Promise<void> {
        await this.page.goto(this.url);
    }

    get header(): Header {
        return new Header(this.page);
    }
}