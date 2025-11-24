import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';
import { CreateUserPage } from '../../pages/CreateUserPage';

test('Create User: empty required fields', async ({ page }) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);
    const createUser = new CreateUserPage(page);
    let alertWasHandled = false;

    await test.step('Given: I am logged in and navigate to New Customer page', async () => {
        await login.goto();
        await login.login('mngr646730', 'rysenUg');
        await page.waitForTimeout(500);
        await home.clickNewCustomer();
        await page.waitForTimeout(500);
    });

    await test.step('When: I submit form with empty required fields', async () => {
        // Setup dialog listener BEFORE clicking submit
        page.once('dialog', async dialog => {
            console.log(`Alert message: ${dialog.message()}`);
            expect(dialog.message()).toEqual('please fill all fields');
            await dialog.accept();
            alertWasHandled = true;
        });

        // Click submit without filling anything
        await createUser.submit();
    });

    await test.step('Then: Required field validation errors appear', async () => {
        // Verify that the alert was actually handled
        expect(alertWasHandled).toBe(true);
        console.log('✅ Alert validation: "please fill all fields" was captured and handled');

        // Verify we're still on the customer creation page (not redirected)
        expect(page.url()).toContain('addcustomerpage.php');
    });
});

test('Create User: invalid email format', async ({ page }) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);
    const createUser = new CreateUserPage(page);
    let alertWasHandled = false;

    await test.step('Given: I am logged in and navigate to New Customer page', async () => {
        await login.goto();
        await login.login('mngr646730', 'rysenUg');
        await page.waitForTimeout(500);
        await home.clickNewCustomer();
        await page.waitForTimeout(500);
    });

    await test.step('When: I fill form with invalid email', async () => {
        await createUser.fillForm({
            name: 'Test User',
            gender: 'm',
            email: 'invalid-email-format',
            dob: '1990-01-01',
            address: 'Test Address',
            city: 'Test City',
            state: 'Test State',
            pin: '123456',
            phone: '1234567890',
            password: 'password'
        });

        // Setup dialog listener BEFORE clicking submit
        page.once('dialog', async dialog => {
            console.log(`Alert message: ${dialog.message()}`);
            expect(dialog.message()).toEqual('please fill all fields');
            await dialog.accept();
            alertWasHandled = true;
        });

        await createUser.submit();
    });

    await test.step('Then: generic error appears', async () => {
        // Verify that the alert was actually handled
        expect(alertWasHandled).toBe(true);
        console.log('✅ Alert validation: "please fill all fields" was captured and handled');

        // Verify we're still on the customer creation page (not redirected)
        expect(page.url()).toContain('addcustomerpage.php');
    });
});

test('Create User: duplicate email', async ({ page }) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);
    const createUser = new CreateUserPage(page);
    const existingEmail = 'sepeto2001@gmail.com';
    let alertWasHandled = false;

    await test.step('Given: I am logged in and navigate to New Customer page', async () => {
        await login.goto();
        await login.login('mngr646730', 'rysenUg');
        await page.waitForTimeout(500);
        await home.clickNewCustomer();
        await page.waitForTimeout(500);
    });

    await test.step('When: I try to create user with existing email', async () => {
        await createUser.fillForm({
            name: 'Duplicate User',
            email: existingEmail,
            dob: '1990-01-01',
            address: 'Test Address',
            city: 'Test City',
            state: 'Test State',
            pin: '123456',
            phone: '1234567890',
            password: 'password'
        });

        // Setup dialog listener BEFORE clicking submit
        page.once('dialog', async dialog => {
            console.log(`Alert message: ${dialog.message()}`);
            expect(dialog.message()).toEqual('Email Address Already Exist !!');
            await dialog.accept();
            alertWasHandled = true;
        });

        await createUser.submit();
    });

    await test.step('Then: duplicate email error appears', async () => {
        // Verify that the alert was actually handled
        expect(alertWasHandled).toBe(true);
        console.log('✅ Alert validation: "Email Address Already Exist !!" was captured and handled');

        // Verify we're still on the customer creation page (not redirected)
        expect(page.url()).toContain('addcustomerpage.php');
    });
});

test('Create User: invalid PIN length', async ({ page }) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);
    const createUser = new CreateUserPage(page);
    let alertWasHandled = false;

    await test.step('Given: I am logged in and navigate to New Customer page', async () => {
        await login.goto();
        await login.login('mngr646730', 'rysenUg');
        await page.waitForTimeout(500);
        await home.clickNewCustomer();
        await page.waitForTimeout(500);
    });

    await test.step('When: I fill form with invalid PIN length', async () => {
        await createUser.fillForm({
            name: 'Pin User',
            email: `pin${Date.now()}@test.com`,
            dob: '1990-01-01',
            address: 'Test Address',
            city: 'Test City',
            state: 'Test State',
            pin: '123', // Invalid length
            phone: '1234567890',
            password: 'password'
        });

        // Setup dialog listener BEFORE clicking submit
        page.once('dialog', async dialog => {
            console.log(`Alert message: ${dialog.message()}`);
            expect(dialog.message()).toEqual('please fill all fields');
            await dialog.accept();
            alertWasHandled = true;
        });

        await createUser.submit();
    });

    await test.step('Then: generic error appears', async () => {
        // Verify that the alert was actually handled
        expect(alertWasHandled).toBe(true);
        console.log('✅ Alert validation: "please fill all fields" was captured and handled');

        // Verify we're still on the customer creation page (not redirected)
        expect(page.url()).toContain('addcustomerpage.php');
    });
});

test('Create User: special characters in name', async ({ page }) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);
    const createUser = new CreateUserPage(page);
    let alertWasHandled = false;

    await test.step('Given: I am logged in and navigate to New Customer page', async () => {
        await login.goto();
        await login.login('mngr646730', 'rysenUg');
        await page.waitForTimeout(500);
        await home.clickNewCustomer();
        await page.waitForTimeout(500);
    });

    await test.step('When: I fill form with special characters in name', async () => {
        await createUser.fillForm({
            name: 'Special@User!',
            email: `special${Date.now()}@test.com`,
            dob: '1990-01-01',
            address: 'Test Address',
            city: 'Test City',
            state: 'Test State',
            pin: '123456',
            phone: '1234567890',
            password: 'password'
        });

        // Setup dialog listener BEFORE clicking submit
        page.once('dialog', async dialog => {
            console.log(`Alert message: ${dialog.message()}`);
            expect(dialog.message()).toContain('please fill all fields');
            await dialog.accept();
            alertWasHandled = true;
        });

        await createUser.submit();
    });

    await test.step('Then: Generic error appears', async () => {
        // Verify that the alert was actually handled
        expect(alertWasHandled).toBe(true);
        console.log('✅ Alert validation: "fill all fields" was captured and handled');

        // Verify we're still on the customer creation page (not redirected)
        expect(page.url()).toContain('addcustomerpage.php');
    });
});