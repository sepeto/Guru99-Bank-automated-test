import { test, expect } from '@playwright/test';

test('Login: successful with valid credentials', async ({ page }) => {
    await test.step('Given: I navigate to https://demo.guru99.com/V4/', async () => {
        await page.goto('https://demo.guru99.com/V4/');
    });
    await test.step('When: I login succesfully', async () => {
        await page.locator('input[name="uid"]').fill('mngr646730');
        await page.locator('input[name="password"]').fill('rysenUg');
        await page.locator('input[name="btnLogin"]').click();
    });

    await test.step('Then: the full side menu is visible', async () => {
        const menu = page.locator('ul.menusubnav');
        await expect(menu).toBeVisible();

        const expectedItems = [
            'New Customer',
            'Edit Customer',
            'New Account',
            'Edit Account',
            'Delete Account',
            'Deposit',
            'Fund Transfer',
            'Change Password',
            'Balance Enquiry',
            'Mini Statement',
            'Customised Statement',
            'Log out',
        ];

        for (const item of expectedItems) {
            await expect(menu).toContainText(item);
        }
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