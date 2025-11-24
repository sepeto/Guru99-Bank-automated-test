import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';
import { CreateUserPage } from '../../pages/CreateUserPage';

test('Create User: reset button clears all form fields', async ({ page }) => {
  const login = new LoginPage(page);
  const home = new HomePage(page);
  const createUser = new CreateUserPage(page);

  await test.step('Given I am logged in and on New Customer page', async () => {
    await login.goto();
    await login.login('mngr646730', 'rysenUg');
    await home.clickNewCustomer();
  });

  await test.step('When I fill all form fields', async () => {
    await createUser.fillForm({
      name: 'Test User',
      gender: 'm',
      dob: '1990-01-01',
      address: 'Test Address 123',
      city: 'Test City',
      state: 'Test State',
      pin: '123456',
      phone: '+1234567890',
      email: 'test@example.com',
      password: 'password123'
    });
  });

  await test.step('And I click the reset button', async () => {
    await createUser.reset();
  });

  await test.step('Then all form fields should be empty', async () => {
    await expect(createUser.elements.name()).toBeEmpty();
    await expect(createUser.elements.dob()).toBeEmpty();
    await expect(createUser.elements.address()).toBeEmpty();
    await expect(createUser.elements.city()).toBeEmpty();
    await expect(createUser.elements.state()).toBeEmpty();
    await expect(createUser.elements.pin()).toBeEmpty();
    await expect(createUser.elements.phone()).toBeEmpty();
    await expect(createUser.elements.email()).toBeEmpty();
    await expect(createUser.elements.password()).toBeEmpty();

    // Verify gender radio buttons is male by defatult
    await expect(createUser.elements.gender('f')).not.toBeChecked();
  });
});