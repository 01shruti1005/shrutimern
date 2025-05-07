/**
 * a.String
 * '',"",``
 * b.Number
 * 123,12.3,12e3
 * c.Boolean
 * true,false
 * d.Null
 * null
 * e.Undefined  
 * //these are primitive data type
 * 
 * f.Array 
 * -collection of data separated by comma, enclosed within[], assigned with index-value pair, index starts from 0
 * g.Object/Json (Js object notation)
 * -collection of data separated by comma, enclosed within{}, assigned with key-value pair, keys are custom created or defined
 * h.function
 * 
*/
let a = '';
let b= "";
let c= ``;
console.log(typeof a);  //string
console.log(typeof b);   //string
console.log(typeof c);   //string

let d= [1,2,3,5,6,a,b,1.2,null,true,[]]
console.log(typeof d)    //object

let name= "shruti"
console.log(typeof name)    //string

console.log(name.toUpperCase())

let decimal=123.32457542
console.log(typeof decimal)
console.log(decimal.toFixed(2))

let userArr = ['Shruti', 'shrutishres12@gmail.com', 'Kathmandu',2345666]
console.log(userArr[2])

//JSON universal datatype
let userObj ={
    name: "Shruti",
    email:"shrutishres12@gmail.com",
    address:"Kathmandu",
    phone:"5454654",
}

//arrow function
const addNumber =() => {}
console.log(typeof addNumber)




