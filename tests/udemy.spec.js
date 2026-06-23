const { test, expect } = require('@playwright/test');

test('home page', async ({page})=>{

    await page.goto('https://www.udemy.com/');

    const pagetitle = await page.title();
    const pageurl = page.url();
    console.log('page title is :', pagetitle);
    console.log('page URL is :', pageurl);

    await expect(page).toHaveTitle(/Udemy/);
    await expect(page).toHaveURL(/.*udemy\.com/);

});
