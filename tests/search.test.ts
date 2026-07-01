import { expect } from '@playwright/test';
import { test } from '../fixtures/baseFixtures';

import searchData from '../test-Data/searchData.json';

test.describe('Product Search @smoke', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('Validate product search', async ({searchPage}) => {

        await searchPage.searchProduct(searchData.name);

        const products = await searchPage.getProductNames();

        for (const product of products) {
            console.log(product);
            await expect(product).toContain(searchData.name)   
        }
    });

});