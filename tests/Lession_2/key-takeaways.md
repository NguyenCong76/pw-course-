## Version Control System (VCS)
VCS là hệ thống quản lý phiên bản theo thời gian, mục đích là để khôi phục lại các phiên bản trước nếu phiên bản hiện tại gặp sự cố giảm thiểu nguy cơ mất mát dữ liệu.
 
Các loại VCS:
 - Local: dữ liệu được lưu trữ ở máy cá nhân.
 - Centralize: dữ liệu được lưu chứ ở máy chủ tập trung.
 - Distributed: dữ liệu phiên bản được lưu ở các máy (local, server) khác nhau, nếu một số máy có sự cố thì các máy còn lại vẫn còn dữ liệu.

 ## Git & Github
Git là phần mềm quản lý phiên bản phân tán (Disibuted). Mục đích giúp đội ngũ phát triển phần mềm làm việc trong cùng một dự án mà không bị ảnh hưởng đến code của nhau.

Github là dịch vụ phần mềm quản lý các phiên bản ở local ở môi trường online, dữ liệu phiên bản sẽ được lưu trữ ở server của Github.

So sánh Git và Github:

- Git: là phần mềm --- Github: là dịch vụ web.
- Git: cài trên máy của bạn --- Github: Host trên website.
- Git: là một commandline tool --- Github: Là công cụ có giao diện.
- Git: là công cụ quản lý phiên bản, đưa file vào Git repository. --- Github: là nơi để upload Git repository
 lên.
 - Git: có các tính năng của Version
Control System --- Github: Có các tính năng của Version
Control System và một số tính năng khác.

Các trạng thái của Git:
- Working Directory: vùng chưa các file mới và các file có thay đổi.
- Staging Area: vùng chứa các file đã xác nhận các thay đổi (tạo phiên bản).
- Repository: vùng chưa các file đã lưu các thay đổi (các phiên bản).

Một số câu lệnh Git:

- "git init": khởi tạo thư mục được quản lý bởi Git (thêm các file ở local vào Working Directory).
- "git config user.name <name>": cấu hình name cho repository.
- "git config user.email <email>": cấu hình enail cho repository.
- "git config --global user.name <name>": cấu hình name cho toàn bộ máy tính.
- "git config --gload user.email <email>": cấu hình enail cho toàn bộ máy tính.
- "git add <file_name>": thêm file cụ thể ở Working Directory vào Staging Area.
- "git add .": thêm tất cả các file ở Working Directory vào Staging Area.
- "git status": xem trạng thái các file.
- "git commit -m <message>": thêm file ở vùng Staging Area vào vùng Repository.

Quy tắc viết message khi commit:
- Loại commit:
1. chore: sửa lỗi nhỏ như chính tả, xóa các file không cần dùng.
2. feat: thêm tính năng mới, test case mới.
3. fix: sửa lỗi một test trước đó
- Mô tả: ngắn ngọn khoảng 50 kí tự, tiếng Anh hoặc Tiếng Việt không dấu.

- Ví dụ: "feat: add login test case".

## Javascript

1. Variable: nghĩa là biến, dùng để lưu trữ giá trị, biến có thể thay đổi được giá trị.
- var <ten_bien> = <gia_tri>;
- let <ten_bien> = <gia_tri>;
- Quy tắc đặt tên biến: 
    - Bắt đầu bằng ký tự chữ, hoặc gạch dưới, hoặc $.
    - KHÔNG chứa dấu cách.
    - KHÔNG là các "từ khóa", tức là các từ đã có trong Javascript (ví dụ: var, let, for, if,...)

- Ví dụ:
    - var test = 10;
    - let pw = "playwright";

- In ra giá trị của biến:
    - console.log ("Giá trị biến test là: ", test)

- Khác nhau giữa khai báo "var" và "let":
    - "var" khai báo lại được, còn "let" thì không.
        - var item1 = "a"
        - var item1 = "c"; // OK  

        - let item2 = "b";
        - let item2 = "d"; // error
    - Phạm vi của biến:
        - var: phạm vi toàn cục (global).
        - let: phạm vi trong cặp ngoặc {}.
    - Nên dùng "let" vì dễ kiểm soát phạm vị của biến.

2. Const: nghĩa hằng số, dùng để khai báo các giá trị không thể thay đổi.
- Ví dụ: 
    - const a = 10;
    - const b = "K17_Playwright"

3. Data type: Kiểu dữ liệu
- Có 8 loại kiểu dữ liệu trong JS: String; Number; Bigint, Boolean; Undefined; Null; Symbol; Object.
- Đầu tiên quan tâm tới các kiểu dữ liệu:
    - String: dùng để khai báo giá trị là một chuỗi.
        - VD: let srt = "Nguyen Cong";
    - Number: dùng để khai báo giá trị một số.
        - let num = "1000";
    - Boolean: dùng để khai báo giá trị kiểu đúng hoặc sai (true or false).
        - let bol = true;

4. Comparison operator (toán tử so sánh): dùng để so sánh giá trị giữa hai biến với nhau. Kết quả sẽ trả về Boolean (true hoặc false).
- Các toán tử so sánh:
    - So sánh hơn kém: ">", "<".
    - So sánh bằng: "=="; "==="; "!="; "!=="; ">="; "<=".
    - Ví dụ:
        - let a = "10";
        - let b = "20";
        - console.log (a>b); // false

5. Unary operator: toán tử một ngôi.
- Dùng để tăng hoặc giảm giá trị
- i++ bằng với i=i+1.
- i-- bằng với i=i-1.

6. Arithmetic operator: toán tử số học.
- Dùng tính toán các giá trị biểu thức.
- Các phép toán: "+";  "-"; "*"; "/".

7. Conditional: nghĩa là điều kiện, dùng để kiểm tra có nên thực hiện một đoạn logic không.
- Cú pháp: if (<điều kiên> ) { // code }
- Ví dụ: Nếu biến a có giá trị lớn hơn biến b thì sẽ in ra kết quả "5 lớn hơn 3".
    - let a = 5;
    - let b = 3;
    - if ( a > b) {
        console.log ("5 lớn hơn 3")
      }

8. Loops: nghĩa là vòng lặp, dùng để thực hiện một đoạn logic một số lần nhất định.
- Cú pháp: for (<khởi tạo>; <điều kiện chạy>; <điều kiện tăng>) { // code }
- Ví dụ: Vòng lặp in ra các giá trị từ 1 đến 10.
    - for (let i = 1; i <= 10; i++) {
        console.log("Giá trị của i là: ", i)
      }

9. Format code: mục đích giúp code gọn gàng, dễ đọc và dễ bảo trì hơn.
- Win: Alt + Shift + F
- Mac: Option + Shift + F




    





