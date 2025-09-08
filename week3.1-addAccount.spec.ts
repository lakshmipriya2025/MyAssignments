import {test,expect} from '@playwright/test'


test("Add Account",async({page})=>{

  //1.Navigate to the login page
  await page.goto("https://login.salesforce.com/")

  //2.Enter valid credentials
  await page.getByLabel('username').fill('dilip@testleaf.com')
  await page.getByLabel('password').fill('Leaf@2025')

  //3.Click Login
  await page.locator('#Login').click()

  //4.Verify the title and url of the page using appropriate assertions
  await expect(page).toHaveTitle("Home | Salesforce")
  await expect(page).toHaveURL("https://testleaf4-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")

  //5.Click on App Launcher
  await page.locator('.slds-icon-waffle').click()
  await page.waitForTimeout(8000);

  //6.Click on View All--> using getByText
  await page.getByText("View All").click()

  //7.Enter ‘Service’ in the App Launcher Search box --> using getByPlaceHolder
  await page.getByPlaceholder('Search apps or items...').last().fill('Service')
  await page.waitForTimeout(3000)

  await page.getByPlaceholder('Search apps or items...').click()

  //8.Click on Service --> using index based XPath
   await page.locator('(//a[contains(@class,"slds-text-heading_small")])[1]').click()
   await page.waitForTimeout(5000)
  
   //9.Click Accounts --> using CSS Selector
    await page.locator('[title ="Accounts"]').click()

    //10.Click New --> using getByRole
    await page.getByRole('button',{name:"New"}).click()
    await page.waitForTimeout(2000)

    //11.Enter Account name --> using attribute based CSS selector
     await page.locator('[name="Name"]').fill("Test Account")

     //12.Click Save button --> using XPath
     await page.locator("//button[text()='Save']").click();

     //13.Verify the toast message displayed
     const toast = page.locator('[class="slds-hyphenate"]')
     await expect(toast).toBeVisible()
     await expect(toast).toContainText('Account')

      //13.Get the title
       const title =await page.title()
      console.log(`Page Title: ${title}`)
})