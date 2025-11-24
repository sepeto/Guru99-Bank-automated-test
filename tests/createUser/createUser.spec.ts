import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';
import { CreateUserPage } from '../../pages/CreateUserPage';

test('Create User: happy path with valid data', async ({ page }) => {
  const login = new LoginPage(page);
  const home = new HomePage(page);
  const createUser = new CreateUserPage(page);
  const timestamp = Date.now();

  await test.step('Given I am logged in as manager', async () => {
    await login.goto();
    await login.login('mngr646730', 'rysenUg');
  });

  await test.step('When I create a new customer', async () => {
    await home.clickNewCustomer();
    await createUser.fillForm({
      name: 'Joseba Portas Abalde',
      dob: '1984-11-05',
      address: 'calle real n20',
      city: 'Marin',
      state: 'Pontevedra',
      pin: '666666',
      phone: '+34685321399',
      email: `sepeto${timestamp}@gmail.com`,
      password: 'piripa'
    });
    await createUser.submit();
  });

  await test.step('Then customer should be registered successfully', async () => {
    await expect(page.locator('body')).toContainText('Customer Registered Successfully!!!');
    await expect(page.locator('body')).toContainText('Joseba');
  });
});