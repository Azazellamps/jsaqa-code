const { test, expect } = require("@playwright/test");

const { email, password }= require("../user.js");

test("Successful authorization", async ({ page }) => {
 
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill(email);
  await page.locator('[placeholder="Пароль"]').click();
  await page.locator('[placeholder="Пароль"]').fill(password);
  await page.locator('[data-testid="login-submit-btn"]').click();
  await expect(page).toHaveURL("https://netology.ru/profile");
  const header = await page.locator("h2").first();
  await expect(header).toHaveText("Моё обучение");
  await page.screenshot({ path: "screenshot.png" });
}, 30000);

test("Unsuccessful authorization", async ({ page }) => {
    
    await page.goto("https://netology.ru/?modal=sign_in");
    await page.locator('[placeholder="Email"]').click();
    await page.locator('[placeholder="Email"]').fill("123@email.ru");
    await page.locator('[placeholder="Пароль"]').click();
    await page.locator('[placeholder="Пароль"]').fill("password123");
    await page.locator('[data-testid="login-submit-btn"]').click();
    await expect(page.locator('[data-testid="login-error-hint"]')).toHaveText(
      "Вы ввели неправильно логин или пароль"
    );
  });