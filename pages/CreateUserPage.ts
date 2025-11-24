import { Page } from '@playwright/test';

export class CreateUserPage {
  constructor(private page: Page) {}

  elements = {
    name: () => this.page.locator('input[name="name"]'),
    dob: () => this.page.locator('input[name="dob"]'),
    address: () => this.page.locator('textarea[name="addr"]'),
    city: () => this.page.locator('input[name="city"]'),
    state: () => this.page.locator('input[name="state"]'),
    pin: () => this.page.locator('input[name="pinno"]'),
    phone: () => this.page.locator('input[name="telephoneno"]'),
    email: () => this.page.locator('input[name="emailid"]'),
    password: () => this.page.locator('input[name="password"]'),
    submitBtn: () => this.page.locator('input[name="sub"]')
  };

  async fillForm(data: {
    name?: string;
    dob?: string;
    address?: string;
    city?: string;
    state?: string;
    pin?: string;
    phone?: string;
    email?: string;
    password?: string;
  }) {
    if (data.name) await this.elements.name().fill(data.name);
    if (data.dob) await this.elements.dob().fill(data.dob);
    if (data.address) await this.elements.address().fill(data.address);
    if (data.city) await this.elements.city().fill(data.city);
    if (data.state) await this.elements.state().fill(data.state);
    if (data.pin) await this.elements.pin().fill(data.pin);
    if (data.phone) await this.elements.phone().fill(data.phone);
    if (data.email) await this.elements.email().fill(data.email);
    if (data.password) await this.elements.password().fill(data.password);
  }

  async submit() {
    await this.elements.submitBtn().click();
  }
}