const {test, expect} = require('@playwright/test') 
 
test('First test Demo', async ({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com/')

    console.log(await page.title());

    await expect(page).toHaveTitle('Google')


})

test("Getting the first item on the rahual academy test ", async ({page}) => {

// Going to the homepage
await page.goto('https://rahulshettyacademy.com/loginpagePractise/')

// Finding the elements on the homepage
const userName = await page.locator('#username');
const password = await page.locator('#password');
const signButton = await page.locator('#signInBtn');
const terms = await page.locator('#terms');

// Filling and checking out the elements and logining in
await userName.fill('rahulshettyacademy');
await password.fill('learning');
await terms.setChecked();
await signButton.click();

// Locate the first item on the page
const iPhoneX = await page.locator('app-card-list app-card:nth-child(1)')

// Clicking on the first item on the page
await iPhoneX.click();

})

test.only('Getting all of the items on the page', async ({page}) => {

// Going to the homepage
await page.goto('https://rahulshettyacademy.com/loginpagePractise/')

// Finding the elements on the homepage
const userName = await page.locator('#username');
const password = await page.locator('#password');
const signButton = await page.locator('#signInBtn');
const terms = await page.locator('#terms');

// Filling and checking out the elements and logining in
await userName.fill('rahulshettyacademy');
await password.fill('learning');
await terms.setChecked();
await signButton.click();

// Waiting for the elements to be loaded on the page 

    // Get the first element and wait for it to be loaded
const iPhoneX = await page.locator('app-card-list app-card:nth-child(1)')
await iPhoneX.waitFor();

    // Get all the items in the row and console log to check them which should be an array of items
const allContents = await page.locator('app-card-list').allTextContents();
await console.log(allContents)


})

//shshsh