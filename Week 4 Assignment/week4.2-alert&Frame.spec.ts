import {test,expect} from '@playwright/test'

test ("testFrame",async({page})=>{
await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")

page.on('dialog',alerttype=>{                                  //Listener for dialogs 
const type = alerttype.type()                                  //Get the type of dialog (alert / confirm / prompt)
console.log("The type of the alert is " + type)
const message = alerttype.message()                            //Get the message text
console.log("Message is " + message)
alerttype.accept()                                              // Accept the dialog 
//alerttype.dismiss()                                            // OR you could dismiss
})

const frame = page.frameLocator('#iframeResult')                 //to go into the iframe
frame.locator('//button[text()="Try it"]').click()               //Find and click the "Try it" button inside the iframe
const message = frame.locator('#demo')                           //Locate with id="demo" inside the iframe
await expect(message).toHaveText("You pressed OK!");              //Assert that the text changes correctly after accepting the confirm

})



