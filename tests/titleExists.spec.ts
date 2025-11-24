import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Page: validates title on load', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await expect(page).toHaveTitle(/Guru99 Bank/);
});