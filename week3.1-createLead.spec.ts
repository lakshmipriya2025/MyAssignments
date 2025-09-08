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

  //9.Enter the Salutation
  await page.locator('#createLeadForm_personalTitle').fill("Mrs")

  //10.Enter the Title
  await page.locator('#createLeadForm_generalProfTitle').fill("Test Engineer")

  //11.Enter the Annual Revenue
  await page.locator('#createLeadForm_annualRevenue').fill('500000')

  //12.Enter the  Department
  await page.locator('#createLeadForm_departmentName').fill('Testing')

  //13.Enter the Phone number
  await page.locator('#createLeadForm_primaryPhoneNumber').fill('9876543210')
  await page.waitForTimeout(5000)

  //14.Click Create Lead button
  await page.locator('//input[@name="submitButton"]').click()
  await page.waitForTimeout(2000)

  //15.Verify the company name, first name, last name and the status 
    const companyName = await page.locator('#viewLead_companyName_sp').innerText()
    console.log("CompanyName: " + companyName)
    const firstName = await page.locator('#viewLead_firstName_sp').innerText()
    console.log("firstName : " + firstName)
    const lastName = await page.locator('#viewLead_lastName_sp').innerText()
    console.log("lastName : " + lastName)
    const Status = await page.locator('#viewLead_statusId_sp').innerText()
    console.log("Status : " + Status)
   
  //16.Get the title  
   const title =await page.title()
   console.log(`Page Title: ${title}`)
})