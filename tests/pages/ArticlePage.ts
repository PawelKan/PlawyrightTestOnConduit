import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from "./BasePage";

export class ArticlePage extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    get url(): string {
        return '/editor'
    }

    async openPage(): Promise<void> {
        await this.page.goto(this.url);
    }

    get txtArticleTitle(): Locator {
        return this.page.getByRole('textbox', { name: 'Article Title' });
    }
    get txtShordDesc(): Locator {
        return this.page.getByRole('textbox', { name: 'What\'s this article about?' })
    }
    get txtArticleTextLong(): Locator {
        return this.page.getByRole('textbox', { name: 'Write your article (in' })
    }
    get txtTags(): Locator {
        return this.page.locator('tag-input').getByRole('textbox')
    }
    get btnPublishArticle(): Locator {
        return this.page.getByRole('button', { name: 'Publish Article' });
    }

    async fillArticleForm(title?: string,
        shortDesc?: string, longArticleText?: string, tags?: string[]): Promise<void> {

        if (title) await this.txtArticleTitle.fill(title);
        if (shortDesc) await this.txtShordDesc.fill(shortDesc);
        if (longArticleText) await this.txtArticleTextLong.fill(longArticleText);
        if (tags) {
            for (const elem of tags) {
                await this.txtTags.fill(elem);
                await this.txtTags.press('Enter')
            }
        }
    }

    async submitArticle() {
        await this.btnPublishArticle.click();
    }
}