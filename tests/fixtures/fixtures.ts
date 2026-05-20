// tests/fixtures/fixtures.ts
import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
type MyFixtures = {
  onHomePage: HomePage;
  onRegisterPage: RegisterPage;
  onLoginPage: LoginPage;
};
export const test = base.extend<MyFixtures>({
  onHomePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  onRegisterPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  onLoginPage: async ({page}, use) => {
    await use(new LoginPage(page))
  }
});
export { expect } from '@playwright/test';