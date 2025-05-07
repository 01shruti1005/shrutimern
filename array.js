/** Array
 *
 * is a collection of data
 * separated by comma
 * assigned in index-value pair
 * index always starts from 0
 * always enclosed by []
 *
 * -collection of data
 */

//Single Dimensional Array
let ProductInfo = ["Product Name", "Cat 1", "Brand Name", 1000, 10];
console.log(ProductInfo[0]);
console.log(ProductInfo[1]);
console.log(ProductInfo[2]);
console.log(ProductInfo[3]);
console.log(ProductInfo[4]);

//Multi Dimensional Array
let allProducts = [
  ["Product Name", "Cat 1", "Brand Name", 1000, 10],
  ["Product Name 2", "Cat 2", "Brand 1", 1200, 20],
  ["Product Name 3", "Cat 3", "Brand 2", 1500, 60],
];

console.log(allProducts[2][0]);
console.log(allProducts[2][1]);
console.log(allProducts[2][2]);
console.log(allProducts[2][3]);

let product1 = [
    "Iphone 12",  //data-type:string,product name
    "Apple",
    "Smart Phone",
    "120000",
    "10",
    "15"

];
let afterDiscount = product1[3]-product1[3]*product1[4]/100


let productObj = {
    discount : 10,
    name: "Iphone 12",
    category: "Smart Phone",
    price:"120000",
    discount:"10",
    stock:"15"
};

console.log(productObj.name)
console.log(productObj['price'])

let result = productObj.price-productObj.price*productObj.discount/100
console.log(result);


//JSON (JavaScript Object Notation)
//Universal Data type
 //any programming does support JSON
   //API consume, return

let phoneDirectory= [];

let userOne = {
    name: "Username One",
    email: "shruti@12gmailcom",
    address:"Kathmandu",
    phone: 325879410
};

 //Insert in any array
  //from end(like Queue)
  console.log(phoneDirectory)  //[]
  //from top(like Stack)
  phoneDirectory.unshift(userFour)
  //console.log(phoneDirectory)
  //or any position

  //0,1,2,.............,4,5
  phoneDirectory.splice(2,0, userFive)
  console.log(phoneDirectory)
  //0,1,2,3,
//Read from any Array
 //from end(like Stack)
 //from top(like Queue)
 //or any position


 //Task1
 //Create an array variable names as students and assigned atleast 5-10 students information as an object to the array.
 //Use different array function for insertion(), push(),unshift() and splice()
 //Each student information must contain name email address and score obtained shouls be less than 500