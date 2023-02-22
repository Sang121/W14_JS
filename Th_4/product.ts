class Product{
    name: string;
    price: number;
    amouts:number;
    constructor(name: string, price: number, amouts: number){
    this.name =name;
    this.price =price;
    this.amouts =amouts;}
    addProduct(numberToAdd: number){
    this.amouts += numberToAdd;}
}
class Customer{
name: string;
quantityOfProduct: number;
constructor(name: string, quantityOfProduct: number){
this.name = name;
this.quantityOfProduct = quantityOfProduct;}
buyProduct(product: Product,quantity: number){
    if(product.amouts >= quantity){
        product.amouts -= quantity;
        this.quantityOfProduct += quantity;}
    else{
        console.log("Not enough product");}
    }

}
console.log( `Create product` )
let clothe=new Product("Ao",10000,5000);
console.log( clothe )
console.log( `add 2000 clothe` )
clothe.addProduct(2000);
console.log(`So luong ${clothe.name} co trong kho la ${clothe.amouts}`);
console.log(`Create Customer`);

let Customer1=new Customer("Sang",100);
console.log(Customer1);
console.log(`Mua 4000 cai ao`);
Customer1.buyProduct(clothe,4000);
console.log(`So luong hang hoa co trong kho cua ${Customer1.name} la ${Customer1.quantityOfProduct}`);




