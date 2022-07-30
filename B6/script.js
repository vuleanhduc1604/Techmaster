// Synchronous - Đồng bộ: Chương trình thực hiện lần lượt từng câu lệnh trong mã theo thứ tự
// Câu lệnh trước kết thúc thì mới đến câu lệnh tiếp theo

const loadScript = (src /* tên file */, callback /* hàm gọi lại sau khi tải xong */) => {
    const script = document.createElement('script');
    script.src = src;
    // Sau khi tải xong
    script.onload = () => callback(script)
    document.head.append(script); // Lúc này trình duyện mới bắt đầu tải file script
}

// Bằng cách nào đó đợi other.js chạy xong rồi ms gọi hàm

// C1:  Đặt lịch cho 1 hành động (hàm handler) chạy sau 1 khoảng thời gian nhất định
// setTimeout(() => {
    // console.log(sum(1, 2))
// }, 100);

loadScript("other.js", (script) => {
    console.log("loaded");
    console.log(sum(1, 2))
});