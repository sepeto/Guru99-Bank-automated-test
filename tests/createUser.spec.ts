import { test, expect } from '@playwright/test';
const registerTime = Date.now(); // number

test('test', async ({ page }) => {
    await test.step('Given: I navigate to the login page and login successfully', async () => {
        await page.goto('https://demo.guru99.com/V4/');
        await page.locator('input[name="uid"]').fill('mngr646730');
        await page.locator('input[name="password"]').fill('rysenUg');
        await page.locator('input[name="btnLogin"]').click();
    });

    await test.step('When: I navigate to New Customer page and fill the form', async () => {
        await page.locator('a[href*="addcustomerpage.php"]').click();
        await page.locator('input[name="name"]').fill('Joseba Portas Abalde');
        await page.locator('input[name="dob"]').fill('1984-11-05');
        await page.locator('textarea[name="addr"]').fill('calle real n20');
        await page.locator('input[name="city"]').fill('Marin');
        await page.locator('input[name="state"]').fill('Pontevedra');
        await page.locator('input[name="state"]').press('Tab');
        await page.locator('input[name="pinno"]').fill('666666');
        await page.locator('input[name="telephoneno"]').fill('+34685321399');
        await page.locator('input[name="emailid"]').fill(`sepeto${registerTime}@gmail.com`);
        await page.locator('input[name="emailid"]').press('Tab');
        await page.locator('input[name="password"]').fill('piripa');
        await page.locator('input[name="sub"]').click();
    });

    await test.step('Then: Customer should be registered successfully', async () => {
        // Wait for success message and verify it contains expected text
        await expect(page.locator('body')).toContainText('Customer Registered Successfully!!!');
        await expect(page.locator('body')).toContainText('Joseba');
        await expect(page.locator('body')).toContainText('+34685321399');
        await expect(page.locator('body')).toContainText(`sepeto${registerTime}@gmail.com`);
    });
});