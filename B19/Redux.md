**REDUX**

Là một thư viện State Management

- State
- Context (Reducer)
- Redux (Giúp tách biệt trạng thái là logic cập nhật ra khỏi view (UI))

**Reducer**

Mỗi 1 reducer quản lý 1 phần trạng thái riêng biệt

- Cart => cartReducer
- Product => productReducer
- User => userReducer
- Device => deviceReducer

**Store**

Là kho lưu trữ trạng thái, và cung cấp các phương thức để tương tác với trạng thái bên trong:

- ‘dispatch’: gửi một action đến reducer
- ‘getState’: cách lấy dữ liệu trong một store
- ‘subscribe’: đăng ký một hàm chạy khi trạng thái thay đổi

‘store.dispatch(action)’: gán cho event trên giao diện

**React**

Thư viện ‘react-redux’ cung cấp component để kết nối ứng dụng React với React store => ‘Provider’

Extension Redux Devtool cho phép theo dõi trực tiếp các trạng thái bên trong store cũng như các action được dispatch

**Redux Toolkit**

- Giải quyết các nhược điểm của Redux:
- Cần phải cài đặt thêm nhiều packages khác 
- Tự cấu hình các package để hoạt động với Redux
- Boilerplate code => code mẫu giống nhau (action const, action creator, reducer,…)
- Ưu điểm của Redux Toolkit
- BAO GỒM SẴN tất cả những package thông dụng nhất, và cấu hình sẵn để hoạt động với Redux (redux-thunk, redux-reselect)
- Cung cấp các API mới giúp việc tạo, cấu hình store đơn giản hơn, ngắn gọn hơn

**Các khái niệm chính:**

- Action: Là một hành động kích hoạt khi người dùng thao tác trên giao diện
- Action Constant: Hằng số khai báo tên action => tránh sai chính tả, giúp gợi ý khi code
- Action Creator: Hàm để tạo action => Rút gọn mã
- Reducer: Trình xử lý, chứa logic để cập nhật trạng thái, mỗi reducer thì có 1 phần trạng thái riêng (quản lý 1 phần trạng thái của ứng dụng)
- Store: Kho trạng thái chung, cung cấp các phương thức để thao tác 
- Redux Toolkit: Là bộ công cụ tích hợp các thư viện phổ biến và cung cấp các API giúp đơn giản hóa việc tạo action và cáu hình store
  - ‘configureStore’: cấu hình store
  - ‘createSlice’: API tạo nhanh reducer và các actions liên quan
