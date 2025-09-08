import {test} from '@playwright/test'


test("Create Individual",async({page})=>{

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
 

//6.Click Individuals
  await page.getByPlaceholder('Search apps or items...').last().fill('Individuals')
  await page.waitForTimeout(3000)
  await page.locator('//mark[text()="Individuals"]').click()
  
//7.Click on the Dropdown icon in the Individuals tab
 await page.locator('[class="slds-context-bar__label-action slds-p-left_none slds-p-right_x-small"]').click()

//8.Click on New Individual
 await page.getByRole('menuitem',{name:"New Individual"}).click()
  
//9.Enter the Last Name
  await page.getByPlaceholder('Last Name').last().fill('Priya')

//10.Click Save
await page.locator('[title="Save"]').click()


//11.Verify Individuals Name
 const createIndividual = await page.locator('//span[text()="Priya"]').first()
const individualName = await createIndividual.innerText()
console.log("Created Individual Name: " + individualName)

  //12.Get the title  
  const title =await page.title()
  console.log(`Page Title: ${title}`)

})