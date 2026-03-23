const {test,expect} = require("@playwright/test")
test('Doubleclick',async({page})=>{

   await  page.goto('https://testautomationpractice.blogspot.com/')

   const double = await page.locator('//button[text()="Copy Text"]')
    await double.dblclick();

   const f2 =  await page.locator('#field2')
    await expect(f2).toHaveValue('Hello World!')

    await page.waitForTimeout(5000);
})