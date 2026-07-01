import { expect } from '@playwright/test';
import { test } from '../fixtures/baseFixtures';

import registerData from '../test-Data/registerData.json';

test.describe('Registration @smoke', () => {

    test.beforeEach(async ({ page, homePage }) => {
        await page.goto('process.env.BASE_URL!');
        await homePage.navigateToRegisterPage();
    });

    test('Register New User', async ({ page, registerPage }) => {

        await registerPage.register(registerData.firstname,registerData.lastname,registerData.telephone,registerData.password,registerData.confirmPassword);
        await expect(page.locator("//h1[normalize-space()='Your Account Has Been Created!']")).toBeVisible();
    });

});