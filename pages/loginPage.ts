import { Page, Locator } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly email: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly warningMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.email = page.locator("//input[@id='input-email']");
        this.password = page.locator("//input[@id='input-password']");
        this.loginButton = page.locator("input[value='Login']");
        this.warningMessage = page.locator("//div[contains(@class,'alert-danger')]");
    }

    async login(email: string, password: string) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}