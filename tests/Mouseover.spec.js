const {test,expect} = require("@playwright/test")
test('Mouseover',async({page})=>{

    await page.goto('https://www.ebay.com/')

   const move =  await page.locator('//span[text()="Motors"]')
   const move2 = await page.locator('//a[text()="Boats"]')

 await  move.hover()
   await move2.hover()
   await move2.click()

   await page.waitForTimeout(5000);

})