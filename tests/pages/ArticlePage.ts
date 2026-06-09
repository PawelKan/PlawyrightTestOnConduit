import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from "./BasePage";

export class ArticlePage extends BasePage {
    constructor (page: Page){
        super(page)
    }

    get url(): string {
        return "articles"
    }

    
}