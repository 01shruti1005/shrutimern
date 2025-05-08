/**
 * A function can take anything as an input.
 * A function can return anything as an output
 */

//function addTwoNumbers(a,b) {
//const addTwoNUmbers =function (a,b) {

//arrow
//const addTwoNUmbers = (a,b) {
 //   let c = a+b 
    //function ko body
    //return optional
  //  return c;
//}

//const addTwoNUmbers =(a,b)=> {
//    return a+b;
//};


const addTwoNumbers = (a,b) => a+b


//a,b,c===> not av
let result= addTwoNumbers(10,20)
console.log(result)  


const user = {
    name : "Shruti",
    getName : function () {
        //this
        return this.name;
    },
    //getName1: () {}
}

//
//console.log()

console.log(user.getName()) 

function greet (greeting, punctuation) {
    console.log (greeting + "," + this.name + punctuation)

}

greet.call({name: "Shruti"}, "Hello","....")
greet.apply({name:"Shruti"}, ["Hello","..."] )

const greetShruti =greet.bind ({name:"Shruti"})
 greetShruti("Hello", "!")

//greet("hello",".....")

//Recursive
//Closure
//CallBack
//Async
  //Promise based
   //.then().catch().finally()
   //async-await