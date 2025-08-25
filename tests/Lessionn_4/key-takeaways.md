## Javascript
1. Phạm vi của biến var và let
    - var: phạm vi truy cập là global
    - let: phạm vi truy cập trong scope {}
    - var: có thể truy cập được vào biến trước khi được khai báo: Giá trị undefined.
    - let: KHÔNG thể truy cập trước khi khai báo.

2. Điều kiện nâng cao
    - if...else
    ```js
    let score = 6;
    if (score >= 6) {
        console.log("Đạt");
    } else {
        console.log("Không đạt");
    }

    ```
    - if...elseif...else
    ```js
    let score = 6;
    if (score >= 8) {
        console.log("Học sinh giỏi");
    } 
    else if (score >=6.5 && <=8) {
         console.log ("Học sinh khá");
    } 
    else {
        console.log("Học sinh trung bình");
    }

    ```
    - switch...case
    ```js
    let motnth = 7;
    switch (moth) {}
        case 11 :
            console.log("Có 30 ngày");
            break;
        case 12:
            console.log("Có 31 ngày");
        default:
            console.log("Tháng không hợp lệ");
    ```

3. So sánh "==" , so sánh "===" và so sánh "!="
    - == : chỉ so sánh về giá trị
    ```js
    let a = "5" == 5 //true
    console.log(a)
    ```
    - === : so sánh giá trị và kiểu dữ liệu của giá trị.
    ```js
    let a = "5" === 5 //false
    console.log(a)
    ```
    - != : chỉ so sánh khác giá trị.
    ```js
    let c = "5" != 5;
    console.log(c)
    ```
4. Vòng lặp
    - for...in (thường dùng lặp qua key object)
        - Đối với object:
        ```js
        let student = {
            "name" : "Công",
            "age": 23,
            "city": HCM
        }

        for (let property in student) {
            console.log(property);
            consolo.log(student[property]);
        }

        ```
        - Đối với array:
        ```js
        let numbers = [5, 78, 23, 76];
        for(let index in numbers) {
            console.log(index)
            console.log(`index: ${index} : ${number[index]}`)
        }
        ```
    - forEach (thường dùng cho array)
        - Đối với array
        ```js
        let numbers = [5, 78, 23, 76];
        number.forEach(val, index) => {
            console.log (`${index}: ${val}`)
        }
        ```

    - for...of (thường dùng cho array)
        - Đối với array
        ```js
        let words = ["a", "b", "c"];
        for (let word of words ) {
            console.log(word);
        }
        ```

    - break and continue:
        - break: thoát khỏi vòng lặp
        ```js
        for (let i = 1; i <= 10; i++) {
            if (i === 5);
            break;
        }
        console.log(i);
        ```
        - continue: bỏ qua vòng lặp hiện tại, chạy đến vòng lặp tiếp theo
        ```js
        for (let i = 1; i <= 10; i++) {
            if (i === 6);
            break;
        }
        console.log(i);
        ```

5. Util function
    - trim(): loại bỏ khoảng trắng ở đầu và cuối.
    ```js
    let str = "  Học JS  ";
    console.log(str.trim());
    ```
    - toUpperCase() và toLowerCase(): in thường và in hoa tất cả kí tự.
    ```js
    let str = "Học JS";
    console.log(str.toUpperCase());
    console.log(str.toLowerCase());
    ```
    - inclues(): kiểm tra chuỗi con có nằm trong chuỗi chính hay không (true or flase).
    ```js
    let str = "Học JS";
    console.log(str.includes("JS")); // true
    ```
    - replace(): thay thể chuỗi con bằng một chuỗi khác.
    ```js
    let str = "Học JS";
    let text = str.replace("JS", "Javascript");
    console.log(text);
    ```
    - split(): chia chuỗi thành các chuỗi con dựa vào một kí tự.
     ```js
    let name = "Loi, Tung Anh, Duom";
    let result = name.split(",");
    console.log(result);
     ```
    - substring(): cắt chuỗi theo index truyền vào.
    ```js
    let str = "Học Javascript"
    let result = str.substring(4,14);
    console.log(result)
    ```
    - indexOf(): trả về vị trí đầu tiên xuất hiện của chuỗi con trong chuỗi chính.
    ```js
    let str = "Học Javascript"
    let result = str.indexOf("Ja");
    console.log(result);
    ```

6. Array untils function
    - map(): dùng để tạo mảng mới bằng cách áp dụng một hàm lên từng phần tử trong mảng gốc.
    ```js
    let numbers = [1, 2, 3, 5];
    let doub = numbers.map((val) => val * 2);
    console.log(doub);
    ```
    - filter(): dùng để tạo ra một mảng chưa các phần tử thỏa điều kiện.
    ```js
    let numbers = [1, 2, 3, 5];
    let result = numbers.filter((val)=> val % 2 === 1);
    console.log(result);
    ```
    - find(): dùng để trả về phần tử đầu tiên thỏa điều kiện.
    ```js
    let numbers = [1, 2, 3, 5];
    let result = numbers.find((val)=> val % 2 === 1);
    console.log(result);
    ```
    - some(): kiểm tra ít nhất 1 phần tử trong mảng thỏa điều kiện, trả về true hoặc false.
    ```js
    let numbers = [1, 2, 3, 5];
    let result = numbers.some((val)=> val % 2 === 1);
    console.log(result);
    ```
    - every(): kiểm tra ít nhất tất phần tử trong mảng thỏa điều kiện, trả về true hoặc false.
    ```js
    let numbers = [1, 2, 3, 5];
    let result = numbers.every((val)=> val % 2 === 1);
    console.log(result);
    ```
    - push(): dùng để thêm một hoặc nhiều phần tử vào cuối mảng.
    ```js
    let numbers = [1, 2, 3, 5];
    let result = numbers.push(6,7);
    console.log(result);
    ```
    - short(): dùng để xóa phần tử đầu tiên của mảng và trả về phần tử đó.
    ```js
    let numbers = [1, 2, 3, 5];
    let result = numbers.shift();
    console.log(result);
    console.log(numbers);
    ```
    - sort(): sắp xếp theo thứ tự tăng dần của mảng hoặc theo hàm so sánh được cung cấp. Hàm này làm thay đổi mảng gốc.
    ```js
    let numbers = [2, 1, 44, 33]; 
    console.log(numbers.sort()); // sắp xếp theo ACSII hoặc UTF-16, mỗi phần tử được chuyển thành chuỗi trước kho so sánh
    ``` 
    - sort(): giảm dần và tăng dần
    ```js
    console.log(numbers.sort((a, b) => b-a)); // sort giảm dần
    console.log(numbers.sort((a, b) => a-b)); // sort tăng dần
    ```
    - reduce(): áp dụng lên mỗi phần tử của mảng và trả về một giá trị duy nhất.
    ```js
    let numbers = [1, 2, 3, 5];
    let total = number.reduce(total, num) => total + num, 0;
    consoloe.log(total);
    ```





