const{test,expect} = require('@playwright/test');
test.setTimeout(60_000);
test('Locators',async({page})=>{  

    await page.goto('https://ensure.abbott/cr',{ waitUntil: 'domcontentloaded' });
    

    //click on Login button
      await page.waitForSelector("//span[normalize-space()='LOGIN']", { timeout: 15000 })
    await page.click("//span[normalize-space()='LOGIN']");

    //provide Username
     await page.waitForSelector("//input[@type='email']", { timeout: 15000 });
    await page.fill("//input[@type='email']",'play@gmail.com');

    //provide password
    await page.waitForSelector("//input[@type='password']", { timeout: 15000 });
    await page.fill("//input[@type='password']",'Testing@123');

    
 // Click on logout button
  const submitSel = "//button[@id='button-ee5ffca155']";
  const submit = page.locator(submitSel);

  await submit.waitFor({ state: 'visible', timeout: 15000 });

    //Verify logout link is present
     await page.waitForSelector("//span[normalize-space()='SALIR']", { timeout: 30000 });
     const logoutlink =   await page.locator("//span[normalize-space()='SALIR']");
    
     await expect(logoutlink).toBeVisible();

     await page.close();

});
