/* 1. Xử lý sự kiện    
- Cách gán sự kiện: truyền trực tiếp vào các thuộc tính sự kiện của JSX Element
- Các thuộc tính sự kiện sử dụng dạng camelCase: `onClick, onMouseOver,...`
- Truyền trực tiếp các hàm (giá trị hàm, không phải cuộc gọi hàm)
VD:*/

const { useState } = require("react")

const handleClick = () => {}
onClick = {handleClick} // Không phải onClick = {handleClick()}

/*
- Để truyền thêm các tham số cho hàm handler thì sử dụng arrow function hoặc là bind

const handleChange = (event,name) => {}
onClick = {(e) => handleChange(e, "Ba")}

- EventObject => Synthetic Event - sự kiện tổng hơp
- Sự kiện onChange => khác với sự kiện onChange trên DOM
*/

// 2. State
// Class component => stateful component (component có trạng thái)
// Function component => stateless component (component không có trạng thái)
/* State là một mô hình dữ liệu trong React, cho phép Component ghi nhớ các giá trị giữa mỗi lần render, điều quan trọng nhất 
với state là khi state thay đổi giá trị thì component sẽ render lại để khớp với trạng thái hiện tại*/
/* Khác biệt với Props:
- State là 1 trạng thái thuộc về 1 component vs Props là giá trị truyền từ component cha xuống component con
- State thì có thể thay đổi được vs Props không thể thay đổi được
*/
// 3. Hooks
/* Hooks là các hàm đặc biệt cho phép Function component sử dụng được các tính năng giống Class Component, ví dụ state, lifecycle,...
=> Hooks biến function component thành Stateful component
*/
// Tất cả các hook thì đều bắt đầu bằng `use` => `useState, useEffect, useRef, useMemo,...`
// Có thể tự tạo custom hook dựa trên những hook có sẵn
// Một số hook cơ bản:
/*
- useState
+ Khai báo một giá trị trạng thái (cho phép Function component ghi nhớ 1 giá trị giữa mỗi lần render)
+ Cú pháp:
*/
const [state, setState] = useState(initialValue)
/* initialValue: Có thể là một giá trị hoặc một hàm trả về một giá trị, sử dụng hàm (lazy initial state) trong trường 
hợp mà giá trị trạng thái ban đầu cần phải tính toán phức tạp, giá trị `initialValue` chỉ sử dụng lần đầu tiên */
// State có thể là bất kỳ giá trị nào (chuỗi, số, null, undefined, array, object,...)
// Sử dụng state thì truy cập trực tiếp qua biến `state`
// Để cập nhật state thì sử dụng hàm `setState`, lưu ý:
// - Không gọi `setState` trực tiếp trong phần thân hàm, mà thường gọi `setState` trong các trình xử lý sự kiện
// Cú pháp:
const [count, setCount] = useState(0);
handleClick = () => {
    setCount(count + 1)
}

handleClick = () => {
    // Thường được sử dụng khi có nhiều state liên quan chia tách ra nhiều trình xử lý / nhiều component khác nhau
    setCount(prev => { // prev: Giá trị trước đó
        return newCount
    })
}
/*
- useRef
+ Tương tự như State, cho phép Function component ghi nhớ giá trị giữa mỗi lần render, tuy nhiên khác biệt lớn nhất là nó không kích hoạt render lại component khi thay đổi giá trị
+ Thường sử dụng để chứa tham chiếu đến các đối tượng đặc biệt, ví dụ 1 node DOM, bộ đếm timer,...
- useContext
*/
