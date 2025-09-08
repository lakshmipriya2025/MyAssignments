import {test} from '@playwright/test'


test("Edit Lead",async({page})=>{

  //1.Launch the browser
  await page.goto("http://leaftaps.com/opentaps/control/main")
  await page.waitForTimeout(2000)

  //2.Login with valid credentials
  await page.locator('#username').fill("Demosalesmanager")
  await page.locator('#password').fill("crmsfa")
  await page.locator('.decorativeSubmit').click()
  
  //3.Click CRM/SFA
  await page.locator('//a[contains(@href,"crmsfa/control/main")]').first().click()
 
  //4.Navigate to Leads page
  await page.getByRole('link',{name:'Leads'}).click()

   //5.Click on Create Lead
  await page.getByRole('link',{name:'Create Lead'}).click()
  
  //6.Enter the Company Name
  await page.locator('#createLeadForm_companyName').fill("PWCompany")

  //7.Enter the First Name
  await page.locator('#createLeadForm_firstName').fill("Lakshmi")

  //8.Enter the Last Name
  await page.locator('#createLeadForm_lastName').fill("Priya")

   //9.Click Create Lead button
  await page.locator('//input[@name="submitButton"]').click()
  await page.waitForTimeout(2000)

  //10.Click on Edit
  await page.locator('//a[text()="Edit"]').click()

  //11.Change the company name
  await page.locator('#updateLeadForm_companyName').fill('testcompany')
 
  //12.Click Update
  await page.locator('[name="submitButton"]').first().click()

})

