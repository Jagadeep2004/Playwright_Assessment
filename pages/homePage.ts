import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly myAccount_option: Locator;
    readonly register_option: Locator;
    readonly login_option: Locator;
    readonly myAccountTitle: Locator;

    constructor(page: Page) {
        this.page = page;

        this.myAccount_option = page.locator("//span[normalize-space()='My Account']");
        this.register_option = page.locator("//a[normalize-space()='Register']");
        this.login_option = page.locator("//a[normalize-space()='Login']");
        this.myAccountTitle = page.locator("//h2[normalize-space()='My Account']");
    }

    async navigateToRegisterPage() {
        await this.myAccount_option.click();
        await this.register_option.click();
    }

    async navigateToLoginPage() {
        await this.myAccount_option.click();
        await this.login_option.click();
    }
}