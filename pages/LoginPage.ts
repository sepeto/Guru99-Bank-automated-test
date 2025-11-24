import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  elements = {
    username: () => this.page.locator('input[name="uid"]'),
    password: () => this.page.locator('input[name="password"]'),
    loginBtn: () => this.page.locator('input[name="btnLogin"]'),
    resetBtn: () => this.page.locator('input[name="btnReset"]')
  };

  async goto() {
    await this.page.goto('https://demo.guru99.com/V4/');
  }

  async login(user: string, pass: string) {
    await this.elements.username().fill(user);
    await this.elements.password().fill(pass);
    await this.elements.loginBtn().click();
  }

  async reset() {
    await this.elements.resetBtn().click();
  }
}