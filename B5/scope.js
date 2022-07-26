// Types of scopes: block code / function / module
{
    var x = 1; // Không bị giới hạn trg scope, chỉ bị giới hạn trg function scope
    let y = 0; // Bị giới hạn trg block scope aka {}
}
console.log(x); // 1
console.log(y); // error: y is not defined