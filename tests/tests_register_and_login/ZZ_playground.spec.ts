import { test, expect } from '@playwright/test';

// test.skip("request api - get", async ({ page, request }) => {
//   const requestHomePage = await request.get('/')
//   const requestText = await requestHomePage.text()  //receive html text from request
//   //console.log(requestText)
//   await expect(requestHomePage.status).toBe(200)
//   await page.goto('/')
// })

// test.skip("request api - login user with csrf token", async ({ page, request }) => {
//   await page.goto('/')
//   const csrf_token = await page.locator('head meta[name="csrf-token"]').getAttribute("content")
//   if (!csrf_token) throw new Error('CSRF token not found')
//   const userMail = "testUsername@mailtest123.com"
//   const userPass = "testUsername123"

//   const requestLoginUser = await page.request.post('/login', {
//     form: {
//       email: userMail,
//       password: userPass,
//       csrf_token: csrf_token
//     },
//     headers: {
//       'X-CSRF-Token': csrf_token,
//       'Referer': 'https://realworld.app.is/login', // Dobra praktyka przy CSRF
//       'X-Requested-With': 'XMLHttpRequest'
//     }
//   })

//   await page.goto('/')
//   await page.reload()
// })
// test.skip("request api - register user with csrf token", async ({ page, request }) => {
//   await page.goto('/')
//   const csrf_token = await page.locator('head meta[name="csrf-token"]').getAttribute("content")
//   if (!csrf_token) throw new Error('CSRF token not found')
//   const usernName = 'testUser'
//   const userMail = "testUsername@mailtest1231.com"
//   const userPass = "testUsername123"

//   const requestLoginUser = await page.request.post('/register', {
//     form: {
//       username: usernName,
//       email: userMail,
//       password: userPass,
//       csrf_token: csrf_token
//     },
//     headers: {
//       'X-CSRF-Token': csrf_token,
//       'Referer': 'https://realworld.app.is/login', // Dobra praktyka przy CSRF
//       'X-Requested-With': 'XMLHttpRequest'
//     }
//   })

//   await page.goto('/')
//   await page.reload()
// })

// setup ("Login user with UI", async ({onLoginPage, onHomePage, page}) => {
//         const userEmail: string = "myEmail@testtest.com"
//         const userPass: string = "myPass"
//         const userName: string = "myUsername"

//         await onLoginPage.openPage()
//         await onLoginPage.loginAsUser(userEmail, userPass);
//         await onHomePage.header.verifyUserIsLoggedIn(userName);

//         await page.context().storageState({ path: pathToFile });
// })