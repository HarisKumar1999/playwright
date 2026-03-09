const {test,expect} = require('@playwright/test');

test('Home Page',async({page})=>{

await page.goto('https://www.w3schools.com/');

//const pageTitle= page.title();
//console.log('page Title is:',pageTitle);

await expect(page).toHaveTitle('W3Schools Online Web Tutorials');


//const pageURL = page.url();
//console.log('page URL is:',pageURL);

//await expect(page).toHaveURL('https://www.w3schools.com/');

await page.close();

})