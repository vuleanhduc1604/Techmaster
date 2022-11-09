**Chia sẻ state giữa các component**

- Nâng giá trị trạng thái lên Component cha gần nhất
- Sử dụng context để quản lý trạng thái tập trung (tránh việc phải truyền props xuống nhiều lớp)
- Sử dụng các thư viện quản lý trạng thái (Redux, Mobx, Recoil,…) để quản lý trạng thái global

**Two-way data binding (Source code)**

**Lifecycle**

- Lifecycle – vòng đời: Là các giai đoạn phát triển về một sự vật, sự việc
- Các component trong React cũng có các giai đoạn chính:
  - Mounting
  - Updating
  - Unmount
- Lifecycle methods – phương thức vòng đời: Là phương thức được React định nghĩa và chạy khi component đạt đến giai đoạn cụ thể
- Mountng:
  - render()
  - componentDidMount()
- Update:
  - componentDidUpdate()
- Unmount:
  - componentWillUnmount()

![](Aspose.Words.4e62c4a6-2e00-4f5e-b271-14a663ac2b2b.001.png)

**Hạn chế của Lifecycle methods trong class component**

- Chỉ có 1 phương thức lifecycle => Khi có nhiều thao tác khác nhau cần phải chạy trong cùng 1 lifecycle
- Các lifecycle method chạy ở các giai đoạn khác nhau => 1 thao tác phải tách ra 3 lifecycle methods

**useEffect**

- Thay thế, thực hiện lifecycle methods trong function component
- Sử dụng để đồng bộ trạng thái của React Component với API bên thứ 3 (hệ thống bên ngoài => tác dụng phụ)

useEffect(callback, ?dependencies)

- Được dùng để khắc phục các hạn chế của Lifecycle methods trong Class component
- Chạy với mỗi lần render:

useEffect(effectCallback) // Ko có dependencies => didMount và didUpdate

- Chạy khi một/nhiều giá trị thay đổi

useEffect(effectCallback, [value1, value2, ...]) // => didUpdate

- Chạy 1 lần duy nhất

useEffect(effectCallback, []) // Dependencies rỗng => didMount

- Khi Component unmount

useEffect(() => {

`    `// code

`    `return () => {

`        `// Hàm chạy trước khi component re-render

`    `}

})

**Lỗi thường gặp với useEffect**	

1. Không truyền đúng các dependencies => Xác định rõ các biến bên ngoài được sử dụng trong useEffect (bao gồm cả 1 số trường hợp biến không nằm trong useEffect)
1. Không có hàm return (unmount) để dọn dẹp => Thường gặp khi làm việc với API

VD: 

Lần đầu tiên render => Gọi API lần 1 => Xong sau (“BBB”)

Có 1 state/props thay đổi => re-render => Gọi API lần 2


