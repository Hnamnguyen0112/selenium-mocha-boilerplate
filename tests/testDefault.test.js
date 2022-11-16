require("chromedriver");

const {Builder, By, Key} = require("selenium-webdriver");
const assert = require("chai").assert;

//describe - describes test
describe("Default test plan", function () {
    //it - describes expected behaviour
    it("default test case - should add a note and display on the page", async function () {
        /*Selenium automates:
       1. Open Chrome
       2. Navigate to app
       3. Type "Hello Selenium" in input box
       4. Clicks the Enter key
      */
        const driver = await new Builder().forBrowser("chrome").build();

        try {
            //open the website
            await driver.get("https://victoria-lo.github.io/bulletin-board/");

            //find the search box and enter a note
            await driver
                .findElement(By.xpath('//*[@id="new-item"]/input'))
                .sendKeys("Hello Selenium", Key.RETURN);

            //get the note's text
            let note = await driver
                .findElement(By.xpath('//*[@id="items"]/div/p'))
                .getText();

            //assert that the note's text is the same as the input text "Hello Selenium"
            assert.equal(note, "Hello Selenium");
            console.log("TEST PASSED");
        } finally {
            //close the browser
            await driver.quit();
        }
        //Chai asserts if new note's text matches the input
    })
    it("Test Nam qq", async function () {
        const driver = await new Builder().forBrowser("chrome").build();

        try {
            await driver.get("https://namnguyen.io/blog");
            await driver
                .findElement(By.xpath('//a[@href="/airbnbs-microservices-architecture-journey-to-quality-engineering"]'))
                    .click();
            const note = await driver.findElement(By.xpath("//article/h1")).getAttribute("innerHTML");
            assert.equal(note, 'Airbnb’s Microservices Architecture Journey To Quality Engineering');
            console.log("TEST PASSED");
        } finally {
            await driver.quit();
        }
    })
    it("send mail",async function(){
        const driver = await new Builder().forBrowser("chrome").build();

        try{
            await driver.get("https://namnguyen.io/blog");
            await driver
                .findElement(By.xpath("//form/div[1]/input"))
                .sendKeys("Min");
            await driver
                .findElement(By.xpath('("//button[text()='Send Message'']")).click()
        }
        finally {
            await driver.quit();
        }
    })
})
