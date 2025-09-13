import {test,expect} from '@playwright/test'
test("Frame",async({page})=> {

    await page.goto("https://leafground.com/frame.xhtml")

    const frame1 = page.frameLocator("iframe").nth(0)           // get the first iframe
    await frame1.locator('text=Click Me').click()               // click the button inside iframe
    const msg=frame1.locator("#Click")
    await expect(msg).toHaveText("Hurray! You Clicked Me.")     // assert the text has changed inside the same iframe

    const frameCount=page.frames()                                //to count all frames in the page
    console.log("Frame count is "+frameCount.length);
     
    const nestedouterFrame = page.frameLocator("iframe").nth(2)       // get the third iframe   
    const nestedinnerFrame = nestedouterFrame.frameLocator("iframe")  // to go inside nested iframe
    await nestedinnerFrame.locator('text=Click Me').click()             
    const msg1=nestedinnerFrame.locator("#Click")
    await expect(msg1).toHaveText("Hurray! You Clicked Me.")          // assert the text has changed inside the same iframe
})

  

