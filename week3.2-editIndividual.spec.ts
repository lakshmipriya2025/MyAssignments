import {test} from '@playwright/test'


test("Create Individual",async({page})=>{

//1.Navigate to the login page
  await page.goto("https://login.salesforce.com/")
   await page.waitForTimeout(2000)

//2.Enter valid credentials
  await page.getByLabel('username').fill('dilip@testleaf.com')
  await page.getByLabel('password').fill('Leaf@2025')

//3.Click Login
  await page.locator('#Login').click()

//4.Click on App Launcher
  await page.locator('.slds-icon-waffle').click()
  await page.waitForTimeout(5000)

//5.Click on View All--> using getByText
  await page.getByText("View All").click()
 
//6.Click Individuals
  await page.getByPlaceholder('Search apps or items...').last().fill('Individuals')
 await page.locator('//a[contains(., "Individuals")]').click();
  
//7.Click on the Individuals tab 
 await page.locator('//span[text()="Individuals"]').first().click()

//8.Search the Individuals last name
  await page.getByPlaceholder('Search this list...').last().fill('testIndividuals')
  await page.locator('[name="Individual-search-input"]').first().click()

//9.Click Edit
   await page.locator('//a[@class="slds-truncate"]').first().click()
   await page.locator('//div[@title="Edit"]').click()
   await page.locator('(//div[@class="uiPopupTrigger"])[3]').click()

//10.Select Salutation as 'Mr'
 await page.locator('//a[text()="Mr."]').first().click()

//11.Now enter the first name
await page.getByPlaceholder('First Name').fill('Lakshmi')

//12.Click on Save 
 await page.locator('//span[text()="Save"]').click()

 //13.Verify First Name
 const editIndividual = await page.getByRole('textbox',{name:"First Name"})
const individualName = await editIndividual.inputValue()
console.log("Updated individual Name "+ individualName)

//14.Get the title  
  const title =await page.title()
  console.log(`Page Title: ${title}`)


})