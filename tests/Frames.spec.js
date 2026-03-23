const {test,expect} = require('@playwright/test')
test('frame',async({page})=>{

  await  page.goto('https://ui.vision/demo/webtest/frames/');

  //total frames
   const totalframes =  await page.frames()
   console.log("Total frames:",totalframes.length);

  //frame by url
   const frame1 =  page.frame({name : 'Frame1'});
    await frame1.fill('//*[@name="mytext1"]','harish');

    await page.waitForTimeout(5000);
});