const {test,expect} = require("@playwright/test")
test('Keyboard',async({page})=>{
  await page.goto('https://gotranscript.com/text-compare')

  await page.locator('//textarea[@placeholder="Paste one version of the text here."]').fill("My Testing Automation")

  //ctrl+A
  await page.keyboard.press('Control+A')
  //ctrl+c
  await page.keyboard.press('Control+C')
  //tab
  await page.keyboard.down('Tab')
  await page.keyboard.up('Tab')
  //ctrl+v

 await page.keyboard.press('Control+V')

 await page.waitForTimeout(5000);
})
