## Git
1. Thay đổi commit massage (chỉ thay đổi được message của commit gần nhất)
    - Dùng lệnh "git commit --amend".
    - Gõ "i" để vào chế độ insert để sửa message.
    - Gõ "esc" để thoát insert.
    - Gõ “:wq” -> write and quit để lưu vào thoát.
    - Hoặc có thể dùng lệnh "git commit --amend -m”message”" để thay cho các bước trên.

2. Đưa từ vùng Staging về Working directory
    - Dùng lệnh "git restore --staged <file>".

3.  Đưa từ vùng repository về working directory (uncommit)
    - Dùng lệnh "git reset HEAD~1" (undo 1 commit mới nhất, tăng số lượng sau dấu "~" nếu muốn undo nhiều commit hơn nữa theo thứ tự từ trên xuống dưới).

4. Branching model (nhánh):
    - Dùng branch để tạo ra một vùng làm việc mới, không ảnh hưởng tới vùng làm việc đã ổn định.
    - Dùng lệnh "git branch <ten_branch>" để xem tất cả các nhánh trong repo.
    - Dùng lệnh "git checkout <ten_branch>" để chuyển tới một branch khác.
    - Dùng lệnh "git checkout -b <ten_branch>" để tạo và chuyển branch vừa tạo.
    - Tips: Luôn tạo branch mới trước khi thực hiện một lệnh copy từ internet.
    
5. .gitignore file: đưa tên file/foler để xác định các file/folder không cần git theo dõi
    - Chỉ thêm vào các file chưa thực hiện commit.
    - Ignore file: <file_name>
    - Ignore folder: <folder_name>/

## Javascript

1. Quy tắc đặt tên (Convenition)
    - snake_case: chưa dùng // snake_case_now_now
    - kebab-case: tên file // kebab-case-now-now
    - camelCase: tên biến // camelCaseNowNow
    - PascalCase: tên  // PascalCaseNowNow

2. Formatted console.log
```js
let name = "Công";
console.log (`Tên tôi là ${name}`); // Tên tôi là Công
```

3. Object: Object là đối tượng, dùng để lưu trữ tập hợp các giá trị vào cùng một biến hoặc hằng số
    - Khai báo
    ```js
    let user = {"name": "Alex", "age": 10, "email": "alex@gmail.com"}

    const product = {
    "name": "Laptop",
    "price": 500,
    "isWindow": true,
    "manufacturer": {
    "name": "Acer",
        "year": 2024 ,
        },
    }
    ```
    - Gán lại
    ```js
    user.age = 28;

    product["manufacturer"]["year"] = 2025
    ```

4. Logical operator (áp dụng cho data type Boolean)
    - &&: cả 2 vế của mệnh đề đều đúng.
    - ||: một trong 2 mệnh đề đúng.
    - ! : đảo ngược giá trị của mệnh đề.

    ```js
    let a = true;
    let b = flase;
    
    if (a && b) {
        console.log ("run code"); // flase
    }
    ```

5. Array (mảng)
    - Mảng dùng để lưu tập hợp nhiềugiá trị có nhiều kiểu dữ liệu khác nhau.
    -  Khai báo
    ```js
    const list = [
        'playwright',
        'K17', 
        100, 
        true, 
        {"test": "abc", "pw": "k17"}
        ];
    ```
    - Truy xuất mảng:
    ```js
    console.log (list.length); // in độ dài mảng (số lượng phần tử của mảng)
    console.log (list[3]); // in ra phần tử thứ 3 của mảng (index bắt đầu từ 0)
    ```
    -  In ra các phần tử của mảng
    ```js
    for (let i = 0; i <= list.length; i++) {
        console.log(list[i])
    }
    ```

6. Function (hàm):
    - Hàm là đoạn code được đặt tên và có thể tái sử dụng, thực hiện một nhiệm vụ hoặc một tính toán cụ thể.

    - Khai báo:
     ```js
    function <nameFunction>() {
        //code
    }

    function hello() {
        console.log("hello")
    }

    // In lại 10 lần hàm hello

    for (let i = 0; i < 10; i++) {
        hello()
    }
     ```
     - Hàm trả về dữ liệu:
     ```js
     function sum(a,b){
        return a+b;
     }

     const total = sum (5, 3);
     console.log(total);
     ```






