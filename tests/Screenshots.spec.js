import {test,expect} from '@playwright/test'

test('page screenshot', async ({page})=>{
    await page.goto('https://demoblaze.com/index.html')
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'Homepage.png'})
});

test('full page screenshot', async ({page})=>{
     await page.goto('https://demoblaze.com/index.html')
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'Fullpage.png',fullPage:true})
});

test.only('Element screenshot', async ({page})=>{
 await page.goto('https://demoblaze.com/index.html')
 await page.locator('(//div[@class="col-lg-4 col-md-6 mb-4"])[1]').screenshot({path:'tests/screenshots/'+Date.now()+'element.png'})
});





