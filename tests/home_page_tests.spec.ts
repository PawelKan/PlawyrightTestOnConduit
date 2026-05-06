import { test, expect } from '@playwright/test';


test.beforeEach('go to page', async ({page}) => {
  await page.goto('https://realworld.app.is')
})

test('has title', async ({ page }) => {
  //await page.goto('https://realworld.app.is/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Conduit/);
});
