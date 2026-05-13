import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePageContent extends BasePage {

  constructor(page: Page) {
    super(page)
  }

  get url(): string { return '/';}
  
  get headerOneConduit(): Locator {
    return this.page.getByRole('heading', { level: 1, name: 'conduit' });
  }

  get paragraphAPlaceToShareYourKnowledge(): Locator{
    return this.page.getByText('A place to share your knowledge.')
  }

  get globalFeedTab(): Locator {
    return this.page.getByRole('link', { name: 'Global Feed' });
  }

  get yourFeedTab(): Locator {
    return this.page.getByRole('link', { name: 'Your Feed' });
  }

  async verifyHomePageContentForNotLoggedInUser(){
    await expect(this.globalFeedTab).toHaveText('Global Feed');
    await expect(this.yourFeedTab).toHaveText('Your Feed');
    await expect(this.headerOneConduit).toHaveText('conduit');
    await expect(this.paragraphAPlaceToShareYourKnowledge).toHaveText('A place to share your knowledge.');
  }
}