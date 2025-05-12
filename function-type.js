// // // const func1 = () => {
// // //   let x = 10


// // //   const func2 = () => {
// // //       console.log("I am in func2")
// // //       console.log("value of x is: ", x)
// // //   }
// // //   return func2;
// // // }


// // // const func3 = () => {
// // //   // 
// // //   const func2 = () => {
// // //     console.log("I am in func2");
// // //     console.log("value of x is: ", x);
// // //   };
// // // }


// // // let result = func1()  
// // // result()
// // // // console.log(result())       // undefinedc

// // // callback 
// // const func1 = (cb) => {
  
// //   cb()
// // }

// // const func3 = (cb) => {
// //   // logic 
// //   cb()
// // }


// // const func2 = () => {

// // }

// // func2()
// // func1(func2)

// // func3(func2)

// function handler(i){
//   console.log(i+". I am inside handler function, "+this.name)
//   // i++
// }
// const handler1 = handler.bind({name: "First"}, 1)
// const handler2 = handler.bind({ name: "Second" }, 2);
// const handler3 = handler.bind({ name: "Thrid" }, 3);
// // console.log(handler1)
// // handler1()

// // setTimecut(handler3, 1000);


// // setInterval(handler1, 1000)

// // polling 
// // bi-directional converstation 
//   // socket programming (RTC)


// // js digitial clock
// const showClock = () => {
//   // logically clock 
//   let today = new Date()
//   const hours = `${today.getHours()}`.padStart(2, '0')
//   const minutes = `${today.getMinutes()}`.padStart(2, '0')
//   const seconds = `${today.getSeconds()}`.padStart(2, '0')
//   console.log(hours+":"+minutes+":"+seconds)
// }

// // showClock()
// // setInterval(showClock, 1000)

// // setInterval(() => {
// //   // logically clock
// //   let today = new Date();
// //   const hours = `${today.getHours()}`.padStart(2, "0");
// //   const minutes = `${today.getMinutes()}`.padStart(2, "0");
// //   const seconds = `${today.getSeconds()}`.padStart(2, "0");
// //   console.log(hours + ":" + minutes + ":" + seconds);
// // }, 1000);


// let arr = [1,2,3,4,5,6]

// const hanlder = (val, i) => {};

// // for(let i in arr) {
// //   console.log(i)
// //   console.log(arr[i])
// // }

// // 

// arr.forEach(handler)

// arr.forEach((val) => {
//   console.log({val})
// });

// let newarr = arr.map((val, i) => {
//   return val * 2
// })

// console.log(newarr)


// 
let numb1 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// let even = []

// for(let numb of numb1) {
//   if(numb % 2 === 0) {
//     even.push(numb)
//   }
// }

// even = [];
// numb1.forEach((val) => {
//   if(val % 2 === 0) {
//     even.push(val)
//   }
// })

// even = [];
// numb1.map((val) => {
//   if (val % 2 === 0) {
//     even.push(val);
//   }
// });

// // let even1 = numb1.filter((val) => {
// //   return (val % 2 === 0)
// // })

// let even1 = numb1.filter((val) => (val % 2 ===0))


// [2,4,6,8,10,12,14,16,18,20]
// if we do not pass the second argument for reduce 
  // prev =>numb1[0], val => numb1[1], ind: 1, return => undefined
  // prev => undefined, val => numb1[2], ind: 2
// if we pass the second argument for reduce 
  //  prev => second arg of reduce, val => numb1[0], ind: 0, return => undefined
  // prev => undefined

// let result = numb1.reduce((prev, val, ind) => {
//   console.log({prev, val, ind})
//   prev += val;
//   return prev;
// }, 0)
// console.log(result)

// some
// every 


// console.log([].fill(1, 0, 10));
// 1-10
[...Array(10)].map((val, ind) => {
  console.log({val, ind})
});

let totalSum = [...Array(40)].reduce((sum, _, ind) => {
  if((ind+1) % 2 !== 0) {
    sum += (ind+1)
  }
  return sum;
}, 0)

console.log(totalSum)

// every 
// some 

let arr = [1,2,3]

let key = 1

// (arr[0] === key && arr[1] === key && arr[2] === key)
// 1 === 1 && 2 === 1 && 3 === 1
// true && false && false => false 
let boolTrue = arr.every((val) =>  val >= key )
let boolsome = arr.some((val) => val === key)
// true || false || false => true

console.log(boolTrue)