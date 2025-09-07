import {test} from "@playwright/test";

test ("register page", async ({ page } ) =>{

    await test.step("navigate to playwrightvn", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("click register page", async () => {
        await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();
    });

    await test.step("fill form register", async () => {
        await page.fill("//input[@id='username']", "Công");

        await page.fill("//input[@id='email']", "c.cong2k1@gmail.com");

        await page.check("//input[@id='male']");

        await page.check("//input[@id='traveling']");

        await page.selectOption("//select[@id='interests']", "Technology");

        await page.selectOption("//select[@id='country']", "Canada");

        await page.fill("//input[@id='dob']", "2001-11-04");

        await page.setInputFiles("//input[@id='profile']", "tests/Lession_5/pw.png");

        await page.fill("//textarea[@name='bio']", "Nguyễn Chí Công, sinh năm 2001");
        
        await page.fill("//input[@name='rating']", "10");

        await page.fill("//input[@type='color']", "#ffffff");

        await page.locator("//div[contains(text(),'Hover over me')]").hover();

        await page.locator("//input[@id='newsletter']").click();

        await page.locator("//span[@class='slider round']").click();

        await page.locator("//div[@id='starRating']").click();
    });

     await test.step("click button register", async () => {
        await page.locator("//button[contains(text(),'Register')]").click();
    })
}
);