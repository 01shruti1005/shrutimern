/**
 * a.mathematical or arithmetic operators
 * +, -, *, /, %
 * i. Increment or Decrement
 * ++, --
 * b.Assignment Operators
 * =, +=, *=, /=, %=
 * c.String or concatenation 
 * +
 * d.Comparison Operators
 * <,>,<=,>=,==,!=,!==,===
 * 
 * e.Logical Operators
 * &&,||,!
 * 
 * f.Ternary or Consitional Operators
 * (exp) ? true:false;
 *   i.Null Coleaching operators
 *    let result= value??defaultValue
 * 
 * g. Object or Array Destructure
 * h.Spread and rest operators
 * ...
 * 
 * i.Bitwise  Operator
 * &,|
 * 
 * 4&5 =>
 *   0100
 * & 0101
 * ----------
 *   0100 =>4
 * 
 * 
 * 4&5 =>
 *   0100
 * | 0101
 * ----------
 *   0101=>5
 * 
 * 
 * 
 */



let a=10;
let b=3;

let c= a%b
console.log(c)   //1

//a=10
a=a+1 //a=11
//a=11
a++
//a=12
++a
//a=13

console.log(a++)  //13==> console.log(a) , a=a+1
//a=>14
console.log(++a);  //15==> a=a+1 ,console.log(a)

a=a+2

a+=2;

let x=10;
let y='10';

let z=x+y
console.log(z)   //1010


let name="Shruti"
let username= "shrutiuser"

let msg= "Dear " +name
msg += ", Thankyou for registering with us . Your username is:"
msg += username+". Please login to access the system"

//h.
let adminUser= {
    fullName: "Shruti Shrestha",
    email: "shrutishres12@gmail.com",
    address:"Kathmandu",
    role:"student",
    phone: {
        mobile:254524584514,
        work:58785454,
    },

};

let {fullName, role, ...rest} =adminUser;



let adminUser2 = {
    ...adminUser
}  //ref

console.log(adminUser)
adminUser2.fullName= "New User Name"

console.log(adminUser)

