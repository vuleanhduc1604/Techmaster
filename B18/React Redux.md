**I/ Redux là gì?**

- Redux là một thư viện JS để quản lý và cập nhật state của ứng dụng
- Redux là một PATTERN (khuôn mẫu)

**II/ Vì sao nên dùng Redux?**

- Redux giúp quản lý Global State:
  - Các components đều có thể truy cập và cập nhật từ Global State
  - Giải quyết vấn đề React khi truyền state vào cấp con cháu
- Giúp dễ dàng Debug
- Xử lý caching dữ liệu từ Server

**III/ Khi nào nên dùng Redux?**

- Khi dự án có lượng lớn state được sử dụng ở nhiều nơi
- Khi state được cập nhật thường xuyên
- Logic cập nhật state phức tạp
- Dự án có lượng lớn code và có nhiều người làm chung

**IV/ Immutability (tính bất biến)**

- Trong Redux, hầu hết các object, array sẽ không được thay đổi (bất biến) nên để thay đổi các value trong object, array ta phải tạo một object, array mới rồi mới thay đổi:

```js

const obj = {

  a: {

    // Để thay đổi obj một cách an toàn thì ta cần phải copy obj

    c: 3

  },

  b: 2

}

const obj2 = {

  // copy obj

  ...obj,

  // overwrite a

  a: {

    // copy obj.a

    ...obj.a,

    // overwrite c

    c: 42

  }

}

const arr = ['a', 'b']

// Tạo một bản copy của arr với ‘c’ được append ở cuối

const arr2 = arr.concat('c')

// Hoặc ta có thể tạo một arr mới

const arr3 = arr.slice()

// và thay đổi arr đó

arr3.push('c')

```

**V/ Action**

- Là một object thường bao gồm hai field: `type` và `payload`
- Giá trị `type` thường được dùng để xác định công việc mà một Reducer cần làm và `payload` là giá trị cho Reducer làm công việc của mình

```js

const INCREMENT = {

	type = ‘todo/increment’,

	payload = 1

}

```

**VI/ Reducer**

- Là một function gồm hai tham số: state và action
- Reducer được dùng để cập nhật lại giá trị state của kho chung (Store)

```js

// Lấy intialState làm giá trị ban đầu

export default function appReducer(state = initialState, action) {

  // Reducer thường cần có action.type để xác định cần phải làm gì

  switch (action.type) {

    // Lm gì đó dựa trên action

    default:

      // Nếu như reducer ko nhận đc action.type

      // thì return state ban đầu

      return state

  }

}

```

Lưu ý: Một reducer không được phép 

**VII/ Store, Subscribe và Dispatch**

- Store: Là nơi quản lý, lưu trữ các State, có thể được dễ dàng truy cập qua `getState()`
- Subscribe: Là phương thức để đăng kí listener cho store: `subscribe(listener)`
- Dispatch: Là phương thức để update các State trong Store: `dispatch(action)`
