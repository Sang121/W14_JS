var Product = /** @class */ (function () {
    function Product(name, price, amouts) {
        this.name = name;
        this.price = price;
        this.amouts = amouts;
    }
    Product.prototype.addProduct = function (numberToAdd) {
        this.amouts += numberToAdd;
    };
    return Product;
}());
var Customer = /** @class */ (function () {
    function Customer(name, quantityOfProduct) {
        this.name = name;
        this.quantityOfProduct = quantityOfProduct;
    }
    Customer.prototype.buyProduct = function (product, quantity) {
        if (product.amouts >= quantity) {
            product.amouts -= quantity;
            this.quantityOfProduct += quantity;
        }
        else {
            console.log("Not enough product");
        }
    };
    return Customer;
}());
console.log("Create product");
var clothe = new Product("Ao", 10000, 5000);
console.log(clothe);
console.log("add 2000 clothe");
clothe.addProduct(2000);
console.log("So luong ".concat(clothe.name, " co trong kho la ").concat(clothe.amouts));
console.log("Create Customer");
var Customer1 = new Customer("Sang", 100);
console.log(Customer1);
console.log("Mua 4000 cai ao");
Customer1.buyProduct(clothe, 4000);
console.log("So luong hang hoa co trong kho cua ".concat(Customer1.name, " la ").concat(Customer1.quantityOfProduct));
