import { test } from "@playwright/test";

test("personal note page", async ({ page }) => {
    await test.step("navigate to playwrightvn", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("click register page", async () => {
        await page.locator("//a[text()='Bài học 4: Personal notes']").click();
    });

    await test.step("add note", async () => {
        let title1 = "Cá mập cam mắc cùng lúc hai hội chứng hiếm";
        let content1 = "Các ngư dân bắt được con cá mập màu cam sáng ngoài khơi Costa Rica mắc chứng bạch tạng (albinism) và hội chứng cực hiếm khác mang tên hoàng sắc (xanthism).";

        let title2 = "Startup AI nổi tiếng phải trả 1,5 tỷ USD vì rắc rối bản quyền";
        let content2 = "Anthropic, startup AI đứng sau chatbot Claude, đồng ý trả ít nhất 1,5 tỷ USD nhằm giải quyết vụ kiện tập thể với một nhóm tác giả sách.";

        let title3 = "Sony Xperia 1 VII chính hãng giá 35 triệu đồng";
        let content3 = "Sony Xperia 1 VII không thay đổi nhiều về kiểu dáng, chủ yếu nâng cấp camera góc siêu rộng, chất lượng âm thanh chuẩn Walkman và bộ tính năng AI Xperia Intelligence.";

        let title4 = "Cách Trung Quốc phủ xanh sa mạc cát ở Nội Mông";
        let content4 = "Những dự án điện mặt trời kết hợp trồng cây chắn cát góp phần giúp Nội Mông lột xác từ vùng đất cát khô cằn thành thung lũng xanh.";

        
        let title5 = "Galaxy S25 FE cải tiến thiết kế, nâng cấp AI";
        let content5 = "Galaxy S25 FE, phiên bản giá tốt của dòng S25, được làm mỏng nhẹ hơn trước, tích hợp Galaxy AI thế hệ mới nhiều tính năng hơn.";


        let title6 =  "Những thiết bị không dùng vẫn 'hút điện";
        let content6 = "Năng lượng lãng phí ngầm từ các thiết bị vẫn cắm điện hoặc để ở chế độ chờ có thể làm tăng hóa đơn tiền điện và ảnh hưởng tới môi trường.";

        let title7 = "Những vật thể nhân tạo 'bất tử' bay xuyên vũ trụ";
        let content7 = "Một số vật thể nhân tạo kỳ lạ, từ tàu NASA đến xe điện Tesla, đang lặng lẽ bay ngoài không gian, trở thành những sứ giả của nhân loại.";
        
        let title8 = "Công ty Italy lập trung tâm thiết kế mạch vệ tinh tại Việt Nam";
        let content8 = "emix Group, tập đoàn tư nhân của Italy chuyên về truyền thông vệ tinh và hàng không vũ trụ, thành lập trung tâm thiết kế tại Việt Nam.";

        let title9 = "Hệ thống phát hiện nhiễu thông tin di động do Việt Nam sáng tạo";
        let content9 = "Hệ thống iSpectra là sáng kiến của Cục Tần số vô tuyến điện, biến trạm BTS thành cảm biến để kiểm soát tần số, phát hiện nhiễu hiệu quả.";

        let title10 = "Thước phim hé lộ sức mạnh của siêu tên lửa Starship";
        let content10 = "SpaceX chia sẻ thước phim quay bên dưới bệ phóng cho thấy sức mạnh của 33 động cơ Raptor ở tầng dưới tên lửa Starship cất cánh trong thử nghiệm hôm 26/8";
        
        await page.fill("//input[@id='note-title']", title1);

        await page.fill("//textarea[@id='note-content']", content1) 

        await page.locator("//button[@id='add-note']").click();

        await page.fill("//input[@id='note-title']", title2);

        await page.fill("//textarea[@id='note-content']", content2);

        await page.locator("//button[@id='add-note']").click();

        await page.fill("//input[@id='note-title']", title3);

        await page.fill("//textarea[@id='note-content']", content3); 

        await page.locator("//button[@id='add-note']").click();

        await page.fill("//input[@id='note-title']", title4);

        await page.fill("//textarea[@id='note-content']", content4);

        await page.locator("//button[@id='add-note']").click();

        await page.fill("//input[@id='note-title']", title5);

        await page.fill("//textarea[@id='note-content']", content5); 

        await page.locator("//button[@id='add-note']").click();

        await page.fill("//input[@id='note-title']", title6);

        await page.fill("//textarea[@id='note-content']", content6); 

        await page.locator("//button[@id='add-note']").click();

        await page.fill("//input[@id='note-title']", title7);

        await page.fill("//textarea[@id='note-content']", content7); 

        await page.locator("//button[@id='add-note']").click();

        await page.fill("//input[@id='note-title']", title8);

        await page.fill("//textarea[@id='note-content']", content8); 

        await page.locator("//button[@id='add-note']").click();

        await page.fill("//input[@id='note-title']", title9);

        await page.fill("//textarea[@id='note-content']", content9); 

        await page.locator("//button[@id='add-note']").click();

        await page.fill("//input[@id='note-title']", title10);

        await page.fill("//textarea[@id='note-content']", content10); 

        await page.locator("//button[@id='add-note']").click();
    });

    await test.step("search note", async () => {
        await page.fill("//input[@id='search']", "Starship");
    });

});