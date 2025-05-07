//var b
console.log("Hello World")
console.log("Another Line")

//Single line comment

/**
 * Multi
 * line
 * comments
 * dont use comments real kaam ma intead of comments explain readme ma 
 * Single threaded program node is always a single threaded program
 * -Thread (process) its is a single process 
 * -REPL node execution always based on this 
 * -Read, Evaluate, Process, Loop
 */

//Data store run time
//Variables and constants
//Variables can be changed
//Scope

//Alphanumeric
//Should always start with alphabet
//can use _ as separater in name
//relevent name use

//ECMA rule govern garne community 

//Loosely couple dynamically typed programming language


var fullName= "Shruti Shrestha"

//let
let name ="Shruti Shrestha"

console.log(fullName)

console.log(name)

fullName= "Shrestha Shruti";

name = 12343435

//console.log(a)      //Error
let a=10;
//let a=20     //redeclare not allowed ->error


console.log(b)    //undefined
var b=10;
var b=20; //allowed

//function
//class


//js Hoisting
//declaration is always at the top not assignment

//var, fucntion =>global

//block scope
var c=10
console.log(c)  //10
//var c =20;   //Error

{
    var c=20;   //redeclare
    console.log(c)  //20
    //anything we write in this is blockscope block bhanda bahira ko global variable block bhitra is block variable
}
console.log(c)  //20

//Constants dubai global ra block dincha
const GRAVITY =9.8
console.log (GRAVITY)



