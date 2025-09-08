import {test} from '@playwright/test'


test("Create Lead",async({page})=>{

  //1.Navigate to the login page
  await page.goto("http://leaftaps.com/opentaps/control/main")
  await page.waitForTimeout(2000)

  //2.Login with valid credentials
  await page.locator('#username').fill("Demosalesmanager")
  await page.locator('#password').fill("crmsfa")
  await page.locator('.decorativeSubmit').click()
  
  //3.Click CRM/SFA
  await page.locator('//a[contains(@href,"crmsfa/control/main")]').first().click()
 
  //4.Click Lead
   await page.getByRole('link',{name:'Leads'}).click()

  //5.Click Find Leads
   await page.locator('//a[text()="Find Leads"]').click()
 
  //6.Enter the first name
  await page.locator('//input[@name="firstName"]').last().fill("Lakshmi")

  //7.Click Find Leads button
  await page.locator('//button[text()="Find Leads"]').click()

  //8.Click the first resulting Lead ID
  await page.locator('//div[@class="x-grid3-cell-inner x-grid3-col-partyId"]/a').first().click()

  //9.Click Edit
  await page.getByRole('link', { name: 'Edit' }).click()
  await page.waitForTimeout(4000)

  //10.Edit Company name
  await page.locator('#updateLeadForm_companyName').fill("ABC Company")
  
  //11.Edit Annual Revenue
  await page.locator('#updateLeadForm_annualRevenue').fill("10000")

  //12.Edit Department
  await page.locator('#updateLeadForm_departmentName').fill("PW Testing")

  //13.Enter Description
  await page.locator('#updateLeadForm_description').fill("This is a test desc")

  //14.Click Update
  await page.locator('//input[@value="Update"]').click()

  //15.Verify the edited fields and print the title of the page
    const companyName = await page.locator('#viewLead_companyName_sp').innerText()
    console.log("CompanyName: " + companyName)
    const annualRevenue = await page.locator('#viewLead_annualRevenue_sp').innerText()
    console.log("CompanyName: " + annualRevenue)
    const department = await page.locator('#viewLead_departmentName_sp').innerText()
    console.log("CompanyName: " + department)
    const description = await page.locator('#viewLead_description_sp').innerText()
    console.log("CompanyName: " + description)

  //16.Get the title  
   const title =await page.title()
   console.log(`Page Title: ${title}`)

})