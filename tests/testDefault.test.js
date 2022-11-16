require("chromedriver");

const {Builder, By, Key, until, error} = require("selenium-webdriver");
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
    // it("send mail",async function(){
    //     const driver = await new Builder().forBrowser("chrome").build();
    //
    //     try{
    //         await driver.get("https://namnguyen.io/");
    //         // await driver
    //         //     .findElement(By.xpath('//input[@name="firstName"]')).sendKeys("Min");
    //         // await driver
    //         //     .findElement(By.name('lastName')).sendKeys('kute');
    //         // await driver
    //         //     .findElement(By.name('email')).sendKeys('mimin110191@gmail.com');
    //         // await driver
    //         //     .findElement(By.name('message')).sendKeys('Mập địt tới đây');
    //
    //         await Promise.all([
    //             driver.findElement(By.xpath('//input[@name="firstName"]')).sendKeys("Min"),
    //             driver.findElement(By.name('lastName')).sendKeys('kute'),
    //             driver.findElement(By.name('email')).sendKeys('mimin110191@gmail.com'),
    //             driver.findElement(By.name('message')).sendKeys('Mập địt tới đây')
    //         ]);
    //         await driver
    //             .findElement(By.xpath("//button[text()='Send Message']")).click();
    //
    //         // const a = new Promise((resolve, reject) => {
    //         //     return reject('a');
    //         // }).then(result => console.log(result)).catch(error => console.log(error));
    //
    //         const text = await driver.wait(until.elementLocated(By.id('headlessui-dialog-title-7')), 5000);
    //         assert.equal(await text.getAttribute("innerHTML") ,'Notification');
    //             // .then(el => assert.equal(el.getAttribute("innerHTML") ,'Notification'))
    //             // .catch(error => console.log(error));
    //     }
    //     finally {
    //         await driver.quit();
    //     }
    // })
    it(' validation send mail',async function(){
        const driver = await new Builder().forBrowser("chrome").build();
        try{
            await driver.get("https://namnguyen.io/");
            await driver.findElement(By.xpath("//button[text()='Send Message']")).click();

            const [firstName, lastName, email, message] = await Promise.all([
                driver.wait(until.elementsLocated(By.xpath("//input[@name='firstName']/following-sibling::span[1]")), 1000),
                driver.wait(until.elementsLocated(By.xpath("//input[@name='lastName']/following-sibling::span[1]")),1000),
                driver.wait(until.elementsLocated(By.xpath("//input[@name='email']/following-sibling::span[1]")),1000),
                driver.wait(until.elementsLocated(By.xpath("//textarea[@name='message']/following-sibling::span[1]")),1000)
            ])

            assert.equal(await firstName[0].getAttribute('innerHTML'),'First name is required');
            assert.equal(await lastName[0].getAttribute('innerHTML'),'Last name is required');
            assert.equal(await email[0].getAttribute('innerHTML'),'Email is required');
            assert.equal(await message[0].getAttribute('innerHTML'),'Message is required');

            console.log("TEST PASSED");
        } finally {
            //await driver.quit();
        }
    })
})
