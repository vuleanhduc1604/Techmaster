// Synchronous - Đồng bộ: Chương trình thực hiện lần lượt từng câu lệnh trong mã theo thứ tự
// Câu lệnh trước kết thúc thì mới đến câu lệnh tiếp theo

const loadScript = (src /* tên file */, callback /* hàm gọi lại sau khi tải xong */) => {
    const script = document.createElement('script');
    script.src = src;
    // Lập trình bất đồng bộ
    script.onload = () => {
        console.log("Script loaded");
        callback(script)
    }
    document.head.append(script); // Lúc này trình duyện mới bắt đầu tải file script
}
loadScript("other.js", (script) => {
    console.log(sum(1, 2))
});


// Promise 

const promise = new Promise((resolve, reject) => {
    console.log("Đi mua bò húc");

    const yes = Math.round(Math.random());

    setTimeout(() => {
        if (yes) {
            resolve("Bò húc");
        } else {
            reject("Hết bò húc");
        }
    }, 5000);
})

console.log(promise);

promise.then((value) => {
    console.log("Uống " + value)
})
.catch((reason) => {
    return new Promise((resolve, reject) => {
        console.log("Đi tìm quán khác");
        const yes = Math.round(Math.random());

        setTimeout(() => {
            if (yes) {
                resolve("Bò húc");
            } else {
                reject("Hết bò húc");
            }
        }, 5000);
    })
})
.then((value) => {
    console.log("Uống " + value)
})
.catch((reason) => {
    console.log("Thôi bỏ")
})

