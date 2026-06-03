import { test as setup } from './fixtures/fixtures';

const pathToFile = 'tests/.auth/userLogged.json'
setup ("Logged in user", async ({onLoginPage, onHomePage, page}) => {
        
        const userEmail: string = "myEmail@testtest.com"
        const userPass: string = "myPass"
        const userName: string = "myUsername"

        await onLoginPage.openPage()
        await onLoginPage.loginAsUser(userEmail, userPass);
        await onHomePage.header.verifyUserIsLoggedIn(userName);

        await page.context().storageState({ path: pathToFile });
})