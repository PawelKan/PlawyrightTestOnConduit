import { test, expect } from '@playwright/test';

test("request api - get", async ({page, request}) => {
  const requestHomePage = await request.get('/')
  const requestText = await requestHomePage.text()  //receive html text from request
  console.log(requestText)
  await expect(requestHomePage.status).toBe(200)
  await page.goto('/')
})

test("request api - login user with csrf token", async ({page, request}) => {
  await page.goto('/')
  const csrf_token = await page.locator('head meta[name="csrf-token"]').getAttribute("content")
  if (!csrf_token) throw new Error('CSRF token not found')
  const userMail = "testUsername@mailtest123.com"
  const userPass = "testUsername123"

  const requestLoginUser = await page.request.post('/login', {
    form: {
      email: userMail,
      password: userPass,
      csrf_token: csrf_token
    },
  headers: {
      'X-CSRF-Token': csrf_token,
      'Referer': 'https://realworld.app.is/login', // Dobra praktyka przy CSRF
      'X-Requested-With': 'XMLHttpRequest'
    }    
  })
  
  await page.goto('/')
  await page.reload()
})