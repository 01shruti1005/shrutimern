const validation = (x) => {
  return new Promise((res, rej) => {
    if(x) {
      res({
        message: "I am resolve of validation",
      });
    } else {
      rej({
        reason: "I am reject from validation",
      });
    }
  })
}


const login = (x) => {
  return new Promise((res, rej) => {
    if(x) {
      res({
        message: "I am resolve of login",
      });
    } else {
      rej({
        reason: "I am rejecet from login",
      });
    }
  })
}

// const giveAccessToDashboard = (x) => {
//   return new Promise((res, rej) => {
//     if(x) {
//       res({
//         message: "Access Granted"
//       })
//     } else {
//       rej ({
//         reason: "Permission not allowed!!"
//       })
//     }
//   })
// }

// const giveAccessToDashboard = (x) => {
//   if (x) {
//     return Promise.resolve({
//       message: "Access Granted",
//     });
//   } else {
//     return Promise.reject({
//       reason: "Permission not allowed!!",
//     });
//   }
// };

const giveAccessToDashboard = async (x) => {      // Promise return 
  if (x) {
    return {                          // resolve 
      message: "Access Granted",
    }
  } else {
    throw {                         // reject 
      reason: "Permission not allowed!!",
    }
  }
};


// validation(true)
//   .then((resData1) => {
//     console.log(resData1);

//     login(true)
//       .then((resData2) => {
//         console.log(resData2);


//         giveAccessToDashboard(true) 
//           .then((resData3) => {
//             console.log(resData3)
//           })
//           .catch((exception) => {
//             console.log(exception)
//           })

//       })
//       .catch((exception) => {
//         console.log(exception);
//       })

//   })
//   .catch((exception) => {
//     console.log(exception);
//   })


// Chaining of promises
// validation(true)
//   .then((res) => {
//     console.log(res)
//     return login(true)
//   })
//   .then((res) => {
//     console.log(res)
//     return giveAccessToDashboard(true)
//   })
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((exception) => {
//     console.log(exception)
//   })


// let promises = [validation(true), login(true), giveAccessToDashboard(false)]

// // Promise.all(promises);
// Promise.allSettled(promises)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((exception) => {
//     console.log(exception);
//   });



// Bill data
  // summary 
    // Detail 
      // Item 3
        // 


// 2 table 
  // bill summary ===> inser query()
  // bill detail  => 3 query ()


  // 4 query => 4 promise 

  // Promise.all([billSummary, detail1, detail2, detail3])


// CSV  User detail 
  // Db login  100
  // Promise.allSettled([100 query ]  )   => [{status: "fullfilled/rejected", reason/value: {}}].filter((obj) => obj.status === 'fullfilled')


const handler = async () => {
  try {
    let result = await validation(true)     // always can be used within async function only
    console.log(result)
    let res2 = await login(true)
    console.log(res2)
    let res3 = await giveAccessToDashboard(true)
    console.log(res3)


    const resolve = await Promise.allSettled([validation(false), login(true), giveAccessToDashboard(true)])
    console.log(resolve)
  } catch(exception){
    console.log(exception)
  }
  
}

handler()