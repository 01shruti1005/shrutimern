/** 
let products =[
{
    name:"Product One",
    price: 1000,
    dicount: 10,

},

{
    name:"Product Two",
    price: 5000,
    dicount: 7.5,

},

{
    name:"Product Three",
    price: 5434,
    dicount: 9,

}
];

let discountAmt= 0;
let afterDiscount=0;


for(let i=0; i<products.length; i++) {
discountAmt = products[0].price*products[0].discount/100;
afterDiscount=products[i].price-discountAmt;
products[i].discountAmount=discountAmt;
products[i].afterDiscount=afterDiscount;

}
*/
//
//Print the array in the following formant using loop:
//Product Name:........
//Product price: Npr.......
//Discount in % :..........
//Discount Amt: Npr..............
//After discount:............
//..............

/** 
let products = [
    { name: "Laptop", price: 1500, discountPercent: 10 },
    { name: "Mobile", price: 2200, discountPercent: 15 },
    { name: "Bottle", price: 3000, discountPercent: 20 }
  ];
  
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let discountAmt = (product.price * product.discountPercent) / 100;
    let finalPrice = product.price - discountAmt;
  
    console.log("Product Name: " + product.name);
    console.log("Product price: Npr " + product.price);
    console.log("Discount in % : " + product.discountPercent + "%");
    console.log("Discount Amt: Npr " + discountAmt.toFixed(2));
    console.log("After discount: Npr " + finalPrice.toFixed(2));
    console.log(".............");
  }
*/

//Git Operations

  //Functions

  

