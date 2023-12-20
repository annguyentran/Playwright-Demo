const {test, expect} = require('@playwright/test') 
 


test('First test Demo', async ({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com/')

    console.log(await page.title());

    await expect(page).toHaveTitle('Google')


})