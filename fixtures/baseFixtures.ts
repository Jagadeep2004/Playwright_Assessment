import {test as base,expect} from '@playwright/test'

import { HomePage } from '../pages/homePage'
import { RegisterPage } from '../pages/registerPage'
import { LoginPage } from '../pages/loginPage'
import { SearchPage } from '../pages/searchPage'

type Fixtures ={
    homePage:HomePage
    registerPage:RegisterPage
    loginPage:LoginPage
    searchPage:SearchPage
}

export const test = base.extend<Fixtures>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    searchPage: async ({ page }, use) => {
        await use(new SearchPage(page));
    }
});

export{expect};