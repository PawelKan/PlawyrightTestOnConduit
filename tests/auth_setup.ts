import { test as setup } from "./fixtures/fixtures";
import { faker } from '@faker-js/faker'
import * as fileReadHelper from "./helpers/fileReadHelper"

const pathToSessionFile = "tests/.auth/RegisteredUserAuth.json";

setup("Register user with automatic login into app", async ({ page }) => {

  //register and login have same cookies/local storage
  await page.goto("/");
  //get csrf token from html attribute
  const csrf_token = await page
    .locator('head meta[name="csrf-token"]')
    .getAttribute("content");

  if (!csrf_token) throw new Error("CSRF token not found");

  // each time create new user
  const userName = `testUser${faker.string.alphanumeric({ length: { min: 5, max: 10 } })}${faker.number.int({ min: 11, max: 1000 })}`;
  const userMail = `${userName}@test.xyz`;
  const userPass = "testPass123!";

  const requestLoginUser = await page.request.post("/register", {
    form: {
      username: userName,
      email: userMail,
      password: userPass,
      csrf_token: csrf_token,
    },
    headers: {
      "X-CSRF-Token": csrf_token,
      Referer: "https://realworld.app.is/login", // Dobra praktyka przy CSRF
      "X-Requested-With": "XMLHttpRequest",
    },
  });

  //check if new user was created
  const status = requestLoginUser.status();
  if (status === 200) {
    await page.waitForURL("**/");
    await page.context().storageState({ path: pathToSessionFile });
  } else {
    console.log(
      `[Setup] Użytkownik nie został zarejestrowany (Status: ${status}). Pomijam aktualizację danych.`,
    );
  }

  //save user data to file
  fileReadHelper.saveUserData(userName.toString(), userMail.toString(), userPass.toString() )
});
