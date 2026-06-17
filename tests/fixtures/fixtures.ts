// tests/fixtures/fixtures.ts
import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { ArticlePage } from '../pages/ArticlePage';

type MyFixtures = {
  onHomePage: HomePage;
  onRegisterPage: RegisterPage;
  onLoginPage: LoginPage;
  onArticlesPage: ArticlePage
};

export const test = base.extend<MyFixtures>({
  onHomePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  onRegisterPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  onLoginPage: async ({ page }, use) => {
    await use(new LoginPage(page))
  },
  onArticlesPage: async ({ page }, use) => {
    await use(new ArticlePage(page))
  }
});
export { expect } from '@playwright/test';