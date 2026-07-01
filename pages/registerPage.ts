import {Page,Locator} from '@playwright/test'

export class RegisterPage{
    readonly page:Page;
    readonly firstname:Locator;
    readonly lastname:Locator;
    readonly email:Locator;
    readonly telephone:Locator;
    readonly password:Locator;
    readonly confirmPassword:Locator;
    readonly privacyPolicy:Locator;
    readonly registerButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.firstname = page.locator("//input[@id='input-firstname']");
        this.lastname = page.locator("//input[@id='input-lastname']");
        this.email = page.locator("//input[@id='input-email']");
        this.telephone = page.locator("//input[@id='input-telephone']");
        this.password = page.locator("//input[@id='input-password']");
        this.confirmPassword = page.locator("//input[@id='input-confirm']");
        this.registerButton = page.locator("//input[@value='Continue']");
        this.privacyPolicy = page.locator("//input[@name='agree']");
    }

    async register(firstname:string,lastname:string,telephone:string,password:string,confirmPassword:string){
            await this.firstname.fill(firstname);
            await this.lastname.fill(lastname);
            const email = `jagadeep${Date.now()}@gmail.com`;
            await this.email.fill(email);
            await this.telephone.fill(telephone);
            await this.password.fill(password);
            await this.confirmPassword.fill(confirmPassword);
            await this.privacyPolicy.click();
            await this.registerButton.click();
    }
}