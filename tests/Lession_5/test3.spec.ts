import { test } from "@playwright/test";

test("to do page", async ({ page }) => {
    await test.step("navigate to playwrightvn", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("click to do page", async () => {
        await page.locator("//a[text()='Bài học 3: Todo page']").click();
    });

    await test.step("create 100 todo item", async () => {
        for (let i = 0; i <= 100; i++) {
            const todo = `Todo ${i}`;
            await page.fill("//input[@id='new-task']", todo);
            await page.locator("//button[@id='add-task']").click();
        }
    });

    await test.step("delete todo item", async () => {
        page.on('dialog', async dialog => dialog.accept());
        for (let i = 1; i <= 100; i += 2) {
            await page.locator(`//button[@id='todo-${i}-delete']`).click();
        }
    });
});