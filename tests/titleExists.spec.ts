import { test, expect } from '@playwright/test';

test('Page: validates title on load', async ({ page }) => {
    await page.goto('https://demo.guru99.com/V4/');
    await expect(page).toHaveTitle(/Guru99 Bank/);
});