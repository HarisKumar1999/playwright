const {test,expect} = require("@playwright/test")
test('DragDrop',async({page})=>{

  // await page.goto('https://demoqa.com/droppable')
  await page.goto('https://testautomationpractice.blogspot.com/')

    const src = await page.locator('#draggable')
    const target = await page.locator('#droppable')

   /* await src.hover()
     await page.mouse.down()

     await target.hover()
     await page.mouse.up()
*/
    await src.dragTo(target)
     await page.waitForTimeout(5000);


})