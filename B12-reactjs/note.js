// Compiler: Trình biên dịch (babel) cho phép dịch mã JSX thành JavaScript thuần
// JSX: JavaScript XTML - Cú pháp mở rộng cho phép viết trực tiếp thẻ HTML vào JavaScript
/* Lưu ý về cú pháp:
1. JSX Element chỉ có 1 thẻ parent chứa các thẻ khác
2. Các thuộc tính sử dụng trên thẻ tuân thủ cú pháp JavaScript "className", "htmlFor", "onClick", "onMouseOver", "onHover",...
3. Tất cả thẻ JSX phải có thẻ đóng
4. Để nhúng 1 giá trị JavaScript vào trong JSX thì sử dụng cú pháp { }
5. Bên trong { } có thể chứa BẤT KỲ biểu thức JavaScript nào
6. Các giá trị phải là JSX Element (Node) hoặc true/false, null, undefined
*/

/*
Virtual DOM: Đối tượng biểu diễn cấu trúc HTML (trong bộ nhớ)
- Kết quả render trước đó
- Kết quả lần render mới nhất
Component - Base: Đoạn mã xây dựng các thành phần giao diện có thể tái sử dụng => JSX => Đây là khối xây dựng cơ bản nhất của một ứng dụng React
- Class Component => 'class'
- Function Component => 'function'
Props: Là mô hình dữ liệu cơ bản nhất trong React, cho phép truyền dữ liệu từ Component cha xuống cho Component con, props giống các tham số hàm cho phép tùy chỉnh hành vi của Component, JSX mà nó hiển thị,...
- Cú pháp tương tự như HTML, có thể truyền số lượng props tùy ý
- Props có thể nhận bất kỳ dữ liệu gì (có thể object, số, boolean, function, component,...)
- Trừ chuỗi thì có thể truyền trực tiếp 'name = "React"', còn lại tất cả các kiểu dữ liệu khác thì phải đặt trong { }
*/