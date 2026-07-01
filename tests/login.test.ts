import { expect } from '@playwright/test';
import { test } from '../fixtures/baseFixtures';

import loginData from '../test-Data/loginData.json';

test.describe('Login @regression', () => {

    test.beforeEach(async ({ page, homePage }) => {
        await page.goto(process.env.BASE_URL!);
        await homePage.navigateToLoginPage();
    });

    test('Login with valid credentials', async ({homePage,loginPage}) => {

        await loginPage.login(loginData.validUser.email,loginData.validUser.password);

        await expect(homePage.myAccountTitle).toBeVisible();
    });

    test('Login with invalid email format', async ({loginPage}) => {

        await loginPage.login(loginData.invalidEmail.email,loginData.invalidEmail.password);

        await expect(loginPage.warningMessage).toContainText('Warning: No match for E-Mail Address and/or Password.');
    });

    test('Login with incorrect password', async ({loginPage}) => {

        await loginPage.login(loginData.wrongPassword.email,loginData.wrongPassword.password);

        await expect(loginPage.warningMessage).toContainText('Warning: No match for E-Mail Address and/or Password.');
    });

});