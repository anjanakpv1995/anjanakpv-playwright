const { test, expect } = require('@playwright/test');

test('locators', async ({page})=>{

    await page.goto("https://www.demoblaze.com/");

    await page.locator('id=login2').click();
    await page.locator('#loginusername').fill('Anjana');

});
