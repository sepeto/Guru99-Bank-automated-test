import { test, expect } from '@playwright/test';

test('Login: reset button clears form fields', async ({ page }) => {
    await test.step('Given: I navigate to https://demo.guru99.com/V4/ and write credentials', async () => {
        await page.goto('https://demo.guru99.com/V4/');
    });
    await test.step('When: click reset button', async () => {
        await page.locator('input[name="uid"]').fill('test');
        await page.locator('input[name="password"]').fill('test');
        await page.locator('input[name="btnReset"]').click();
    });
    await test.step('Then: credentials are reset', async () => {
        await expect(page.locator('input[name="uid"]')).toBeEmpty();
        await expect(page.locator('input[name="password"]')).toBeEmpty();
    });
});