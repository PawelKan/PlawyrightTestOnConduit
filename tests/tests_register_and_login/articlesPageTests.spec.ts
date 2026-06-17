import { faker } from '@faker-js/faker';
import { test, expect } from '../fixtures/fixtures';

test.describe('Articles tests', () => {
    
    test.beforeEach('open Home page', async ({ onHomePage }) => {
        await onHomePage.openPage();
    });
    
    test('add new article', async ({ onArticlesPage }) => {
        // Test Data
        const articleTitle = `Test_Article_${faker.string.alphanumeric(10)}`;
        const articleShortDesc = `Test_Descr_${faker.lorem.sentence()}`;
        const articleText = `Test_Article_Text_${faker.lorem.words(15)}`;
        const articleTags = ['test', 'tag', 'testing']

        //Actions
        await onArticlesPage.header.verifyUserIsLoggedIn();
        await onArticlesPage.header.clickOnNewArticle();
        await onArticlesPage.fillArticleForm(articleTitle, articleShortDesc, articleText, articleTags);
        await onArticlesPage.submitArticle();
        
        //Assertions
        await expect(onArticlesPage.page).toHaveURL(/article/); //TO FIX: temporary assertion for page.
    })
})