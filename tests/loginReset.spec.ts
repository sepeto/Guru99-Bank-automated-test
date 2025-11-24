import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login: reset button clears form fields', async ({ page }) => {
  const login = new LoginPage(page);

  await test.step('Given I am on login page', async () => {
    await login.goto();
  });

  await test.step('When I fill credentials and click reset', async () => {
    await login.elements.username().fill('test');
    await login.elements.password().fill('test');
    await login.reset();
  });

  await test.step('Then fields should be empty', async () => {
    await expect(login.elements.username()).toBeEmpty();
    await expect(login.elements.password()).toBeEmpty();
  });
});