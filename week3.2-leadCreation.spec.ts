import test from '@playwright/test'


test("Lead Creation",async({page})=>{

  //1.Navigate to the login page
  await page.goto("https://login.salesforce.com/")

  //2.Enter valid credentials
  await page.getByLabel('username').fill('dilip@testleaf.com')
  await page.getByLabel('password').fill('Leaf@2025')

  //3.Click Login
  await page.locator('#Login').click()

  //4.Click on App Launcher
  await page.locator('.slds-icon-waffle').click()
  await page.waitForTimeout(8000);

   //5.Click on View All--> using getByText
  await page.getByText("View All").click()
  await page.waitForTimeout(4000)

   //6.Click Sales from App Launcher
  await page.locator('//p[text()="Manage your sales process with accounts, leads, opportunities, and more"]').click()

   //7.Click on Leads tab
   await page.locator('//span[text()="Leads"]').click()
   
   //8.Click on New button
   await page.locator('[title=New]').first().click()

   //9.Select Salutation dropdown
   await page.locator('[name="salutation"]').click()
   await page.locator('//span[text()="Mrs."]').click()
   
   //10.Enter the Last Name
  await page.locator('[name=lastName]').fill("Priya Bala")

 //11.Enter the Company Name
 await page.locator('[name=lastName]').fill("Test Company")

 //12.Click Save and Verify Leads name created
 await page.locator('[name=SaveEdit]').click()

 //13.Verify the created lead name
  const createLead = await page.locator('#viewLead_firstName_sp')
  const leadName = await createLead.innerText()   
  console.log("Created Lead Name: " + leadName)
   
  //14.Get the title  
   const title =await page.title()
   console.log(`Page Title: ${title}`)
})