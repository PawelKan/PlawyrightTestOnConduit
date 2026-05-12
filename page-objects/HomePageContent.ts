import { Locator, Page } from '@playwright/test';

export class HomePageContent {
  readonly page: Page;
  readonly globalFeedTab: Locator;
  readonly yourFeedTab: Locator;  
  readonly headerOneConduit: Locator;
  readonly paragraphAPlaceToShareYourKnowledge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerOneConduit = page.getByRole('heading', { level: 1, name: 'conduit' });
    this.paragraphAPlaceToShareYourKnowledge = page.getByText('A place to share your knowledge.');
    this.globalFeedTab = page.getByRole('link', { name: 'Global Feed' });
    this.yourFeedTab = page.getByRole('link', { name: 'Your Feed' });
  }
  async navigate() {
    await this.page.goto('/');
  }
}