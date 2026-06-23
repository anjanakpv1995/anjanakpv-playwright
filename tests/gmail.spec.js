const { test, expect } = require('@playwright/test');

test ('gmail home page', async({ page })=>{

    await page.goto ('https://accounts.google.com/');
    const pagetitle = await page.title();
    console.log('page title is :', pagetitle);
    await expect(page).toHaveURL(/.*accounts\.google\.com/);

})
