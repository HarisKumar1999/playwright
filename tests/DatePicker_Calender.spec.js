const {test,expect} = require("@playwright/test")
test('Datepicker',async({page})=>{

    page.goto("https://testautomationpractice.blogspot.com/");

    const year = "2026"
    const month = "March"
    const date = "17"
   // await page.locator('#datepicker').click()
   await page.click('#datepicker')

    for (let i = 0; i < 24; i++) { // safety limit: 2 years worth of clicks

        const currentYear = await page.locator('.ui-datepicker-year').textContent();
    const currentMonth = await page.locator('.ui-datepicker-month').textContent();


        if(currentyear ==year && currentmonth==month){
            break;
        }
           await page.locator('[title="Next"]').click()
    }
    // Select the date
  await page.locator(`.ui-datepicker-calendar td a:text("${date}")`).click();

   await page.waitForTimeout(5000);
});