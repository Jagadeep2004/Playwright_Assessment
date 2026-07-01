import { Page, Locator } from '@playwright/test';

export class SearchPage {

    readonly page: Page;
    readonly searchBox: Locator;
    readonly searchButton: Locator;
    readonly productList: Locator;

    constructor(page: Page) {
        this.page = page;

        this.searchBox = page.locator("//input[@name='search']");
        this.searchButton = page.locator("//button[@class='btn btn-default btn-lg']");
        this.productList = page.locator("//div[@class='product-thumb']//h4/a");
    }

    async searchProduct(productName: string) {
        await this.searchBox.fill(productName);
        await this.searchButton.click();
    }

    async getProductNames(){
        return await this.productList.allTextContents();
    }
}