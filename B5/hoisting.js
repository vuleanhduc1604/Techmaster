// Hoisting hoạt động vs function và var
// Các khai báo hàm (function) và biến (var) được di chuyển (nâng) lên đầu khối mã (file)
greeting("Ben");
function greeting(name) {
    console.log(`Hello, ${name}`);
}
greeting("Beo");