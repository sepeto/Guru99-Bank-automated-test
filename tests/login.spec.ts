import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

test('Login: successful with valid credentials', async ({ page }) => {
  const login = new LoginPage(page);
  const home = new HomePage(page);

  await test.step('Given I navigate to login page', async () => {
    await login.goto();
  });

  await test.step('When I login with valid credentials', async () => {
    await login.login('mngr646730', 'rysenUg');
  });

  await test.step('Then the manager menu should be visible', async () => {
    await expect(home.elements.menu()).toBeVisible();
  });
});

// await test.step('Then: I the full side menu is visible', async () => {
//     await expect(page.locator('body')).toContainText('New Customer');
//     await expect(page.locator('body')).toContainText('Edit Customer');
//     await expect(page.locator('body')).toContainText('New Account');
//     await expect(page.locator('body')).toContainText('Edit Account');
//     await expect(page.locator('body')).toContainText('Delete Account');
//     await expect(page.locator('body')).toContainText('Deposit');
//     // await page.getByRole('link', { name: 'Deposit' }).click();
//     await expect(page.locator('body')).toContainText('Fund Transfer');
//     await expect(page.locator('body')).toContainText('Change Password');
//     await expect(page.locator('body')).toContainText('Balance Enquiry');
//     await expect(page.locator('body')).toContainText('Mini Statement');
//     await expect(page.locator('body')).toContainText('Customised Statement');
//     await expect(page.locator('body')).toContainText('Log out');
// });