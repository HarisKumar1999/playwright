const {test,expect} = require("@playwright/test")
let page;

test.beforeEach(async ({browser})=>{
    page=await browser.newPage();
   await page.goto('https://demoblaze.com/index.html')
    //Login
   await page.locator('#login2').click()
   await page.locator('#loginusername').fill('pavanol')
   await page.locator('#loginpassword').fill('test@123')
   await page.locator('//button[normalize-space()="Log in"]').click()
   await page.waitForTimeout(5000)
});
 //Logout
    test.afterEach(async()=>{
    await page.locator('#logout2').click()
    })

    //Homepage
    test('Homepage test', async ({})=>{
   const products =  await page.$$('.hrefch')
    expect(products).toHaveLength(9)
});

    //Add product to cart
    test('Add product',async()=>{
    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click()
    await page.getByText('Add to cart').click()

    page.on('dialog',async dialog=>{
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept();
    })
});