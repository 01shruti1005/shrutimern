//async programming
//Promise
//Object data type
  //3 phases
    //pending
    //fulfill/reject
    //settlement 

// const promiseObj = new Promise((resolve, reject) => {
//   // build logic here 
//   // success 
//   // failed 
//   // resolve("Hello world")
//   reject("I am reject")
// })

const promiseObj = () => {
    return new Promise((resolve, reject) => {
      // build logic here
      // success
      // failed
      resolve("Hello world")
      // reject("I am reject")
    })
  }
  
  // async-await 
  
  promiseObj()
    .then((res) => {
      console.log(res)        
    })           // fulfill stage
    .catch((exception) => {
      console.log("Error: ", exception)
    })          // reject stage
    // .finally(() => {
    //   console.log("I am always executed.")
    // })        // settlement stage
  
    console.log("I  am last")
    console.log("I  am another line"); 