const {test,expect} = require("@playwright/test")
test('Keyboard',async({page})=>{
 test.setTimeout(60000);
 
 await page.goto('https://testautomationpractice.blogspot.com/')
 //await page.locator('#singleFileInput').setInputFiles('tests\\Files\\test1.pdf')

  await page.locator('#multipleFilesInput')
  .setInputFiles(['tests\\Files\\test1.pdf','tests\\Files\\test2.pdf','tests\\Files\\tes3.pdf'])
 await page.waitForTimeout(5000)
  //Removing files
   await page.locator('#multipleFilesInput').setInputFiles([])
 await page.waitForTimeout(5000)

//expect (await page.locator('#multipleFilesInput')).toHaveText('No file chosen');
 /*await  page.goto('https://enhancv.com/resources/resume-checker/')
  
await page.setInputFiles('input[type="file"]', 'tests/Files/test1.pdf');
 
  
    // Instead of a hard wait, wait for a success element to appear
    await page.waitForSelector('text=Analysis complete', { timeout: 30000 });
    */
})