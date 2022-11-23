***REDUX***
Là một thư viện State Management
- State
- Context (Reducer)
- Redux (Giúp tách biệt trạng thái là logic cập nhật ra khỏi view (UI))
**Reducer**
Mỗi 1 reducer quản lý 1 phần trạng thái riêng biệt
- Cart => cartReducer
- Product => productReducer
- User => userReducer
- Course => courseReducer
- Device => deviceReducer
**Store**
Là kho lưu trữ trạng thái, và cung cấp các phương thức để tương tác với trạng thái bên trong:
- 'dispatch': gửi một action đến reducer
- 'getState': cách lấy dữ liệu trong store
- 'subscribe': đăng ký một hàm chạy khi trạng thái thay đổi
'store.dispatch(action)': gán cho event trên giao diện
**React**
Thư viện 'react-redux' cung cấp component để kết nối ứng dụng react với react store => 'Provider'
Extension Redux Devtool cho phép theo dõi trực tiếp các trạng thái bên trong store cũng như các action được dispatch