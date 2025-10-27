let products = [
    { id: 1, name: "Laptop", price: 1200, inStock: true },
    { id: 2, name: "Smartphone", price: 800, inStock: false },
    { id: 3, name: "Tablet", price: 400, inStock: true },
    { id: 4, name: "Monitor", price: 300, inStock: true },
    { id: 5, name: "Keyboard", price: 100, inStock: false }
];




// In ra tên sản phẩm đầu tiên trong mảng
console.log("Sản phẩm đầu tiên:", products[0].name);

//Thay đổi giá sản phẩm thứ 2 thành 150
products[1].price = 150;
console.log("Giá sản phẩm thứ 2 sau khi thay đổi:", products[1].price);

// Thêm một sản phẩm mới vào cuối mảng
products.push({ id: 6, name: "Mouse", price: 50 });
console.log("Mảng sản phẩm sau khi thêm sản phẩm mới:", products);

//Xóa sản phẩm cuối cùng
products.pop();
console.log("Mảng sản phẩm sau khi thực hiện các thao tác:", products);

//Dùng forEach
products.forEach(product => {
    console.log(`ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}`);
});

let bangGiaSP = products.map(products => {
    return ` Giá ${products.price}`
})

console.log("Bảng giá sản phẩm:", bangGiaSP);

//Dùng filter
let sanPhamConHang = products.filter(product => {
    return product.inStock === true;
});
console.log("Sản phẩm còn hàng:", sanPhamConHang);

// Dùng for...in duyệt sản phẩm đầu tiên
for (const key in products) {
    if (products[key].id !== 1) continue;

    const element = products[key];
    console.log(`Sản phẩm đầu tiên - ID: ${element.id}, Tên: ${element.name}, Giá: ${element.price}`);
}