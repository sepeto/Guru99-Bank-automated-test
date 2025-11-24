import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  elements = {
    menu: () => this.page.locator('ul.menusubnav'),
    newCustomerLink: () => this.page.locator('a[href*="addcustomerpage.php"]')
  };

  async clickNewCustomer() {
    await this.elements.newCustomerLink().click();
  }
}