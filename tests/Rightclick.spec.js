const {test,expect} = require("@playwright/test")
test('Mouseover',async({page})=>{

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    const button = await page.locator('//span[text()="right click me"]')
    await button.click({button:  'right'});
    await page.waitForTimeout(5000);

})