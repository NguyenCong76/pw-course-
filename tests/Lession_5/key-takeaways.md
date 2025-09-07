## Javascript
1. Anonymus functions:
    - Hàm không có tên khi khai báo; thường chỉ dùng một lần duy nhất; không làm tham số cho hàm khác.
    - Cú pháp: 
    ```js
    function () {
        console.log("Hello World")
    }
    ```
    
2. Lambda function (Arrow function):
    - Cú pháp : (tham_so) => {}
    - Hàm nhiều tham số:
        ```js
        const sum (a, b) => {
            return a + b;
        }
        ```
    - Hàm có 1 tham số:
        ```js
        const duplicate = x => {
            return x * 2
        }
        ```
        ```js
        const duplicate2 x => x * 2
        ```
    - Hàm không có tham số:
        ```js
        () => {
            console.log("Hello World");
        }
        ```

## DOM 
1. Khái niệm
    - DOM (Document Object Model) là một cấu trúc dữ liệu hình cây đại diện cho nội dung tài liệu HTML hoặc XML. Mỗi thành phần trong tài liệu, như các thẻ HTML, thuộc tính của thẻ, hoặc nội dung văn bản, đều được biểu diễn dưới dạng một "node" (nút) trong cây.
2. Node
    - Node là các thẻ (element) trong trong DOM.
    - Cấu trúc:
        - Element:
            - <[Thẻ mở] [Thuộc tính]="[Giá trị thuộc tính]"> [Text] </[Thẻ đóng]>
            ```html
            <option value="vn">Việt Nam</option>
            ```
            -Thẻ tự đóng:
            ```html
            <img src="image.png" >
            ```
3. Các thẻ HTML thường gặp
    - Thẻ 
    ```html
    <div> 
    ```
    (viết tắt của divide): dùng để chia các khối trong trang web
- Thẻ 
    ```html
    <h1></h1> 
    ```
    đến 
    ```html
    <h6></h6> 
    ```
    (viết tắt của heading): dùng để tạo ra các header phân cấp theo thứ tự từ lớn đến bé.
- Thẻ 
    ```html
    <form></form>
    ```
dùng để chứa một form thông tin.
- Thẻ input: text, email, radio, checkbox, file, color, range, date
- Thẻ textarea: hiển thị ô input, dạng to.
- Thẻ radio button: tạo nút chọn một (radio).
- Thẻ checkbox: tạo nút chọn nhiều lựa chọn (checkbox).
- Thẻ list và dropdown: hiển thị danh sách hoặc menu thả xuống.
- Thẻ button: tạo nút bấm.
- Thẻ table: hiển thị bảng dữ liệu.
    - thead = table heading
        - tr = table row = 1 dòng
            - th: table heading: text in đậm
    - tbody
        - tr -> td = table data
- Thẻ date picker: tạo bộ chọn ngày.
- Thẻ slider: tạo thanh trượt.
- Thẻ iframe: hiển thị nội dung từ một trang web khác bên trong trang hiện tại.

## Selector
1. Selector: là cách chọn elemnet trong DOM.
2. Các kiểu selector: Xpath selector, CSS selector, Playwright selector.
3. Xpath (XML path):
    - Xpath tuyệt đối (Absolute Xpath)
        - Tìm element đi dọc theo cây DOM, bắt đầu bởi dấu /
        - VD: /html/body/div/h1
        - Nhược điểm: phụ thuộc thứ tự cha-con khi DOM thay đổi thì Xpath sẽ không tìm được element; cú pháp dài viết tốn thời gian.
    - Xpath tương đối (Relative Xpath)
        - Tìm elemet theo đặc trung của element đó, bắt đầu bằng dấu //
        - Cú pháp: //tenthe[@thuoctinh="gia tri"]
        - VD: //input[@id="male"]

## Playwright basic syntax
1. Đơn vị để khai báo một test
```js
import { test } from '@playwright/test';

test('test case', async ({ page }) => {
    //code test
});
```
2. Test step: Đơn vị nhỏ hơn test, để khai báo từng step của test case
    - Lưu ý: step nên được map 1-1 với test case để dễ dàng maintain.
    ```js
    await test.step('nhập username', async () => {
        //code here
    });
    ```
    ```js
    test('test case', async ({ page }) => {
        await test.step('nhập username', async () => {
        //code here
        });
    });
    ```
3. Basic actions:
    - Navigate:
    ```js
    await page.goto("https://material.playwrightvn.com");
    ```
    - Click:
        - Single click
        ```js
        await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();
        ```
        - Double click:
        ```js
        await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").dbclick();
        ```
        - Click chuột phải:
        ```js
        await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click({button: right});
        ```
        - Click chuột kèm bấm phím khác:
        ```js
        await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click({modifiers: ['Shift']});
        ```
    - Input:
        - Fill: Giống việc bạn paste content vào một input
        ```js
        await page.locator("//input[@id='male']").fill('Playwright Viet Nam');
        ```
      - pressSequentially: Giống việc bạn gõ từng chữ cái vào ô input
       ```js
        await page.locator("//input[@id='male']").pressSequentially('Playwright Viet Nam', {
        delay: 100,
        });
       ```
    - Radio/checkbox:
        - Check
        ```js
        await page.locator("//input[@id='male']").check();
        await page.check("//input[@id='male']");
        ```
        - Uncheck:
        ```js
        await page.locator("//input[@id='male']").setChecked(false);
        ```
        - Lấy giá trị hiện tại đang là check hay không:
        ```js
        const isChecked = page.locator("//input[@id='male']").isChecked();
        ```

    - Select option:
    ```js
    await page.selectOption("//select[@id='country']", "uk");
     ```
    - Set input file:
    ```js
    await page.setInputfile("//input[@id='profile']", "test/Lession-5/key-takeawways.md");
    ```

    

    
