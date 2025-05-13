/** 
 * Decision making statements  
 * flow control 
 * direction provide 
 * - if-else 
 * - else-if 
 * - switch-case
 * 
 * - Loop 
 * */

// syntax 

// truthy
  // - not null, true, any number except 0, variable containing values or defined 
// falsy 
  // - null, false, 0, empty variable, undefined 
  
// if (expression) {
//   // if block 
// } else {
//   // optional block 
// }

let x = '';

if(x) {
  console.log("x is defined. Value is: ",x)
} else {
  //
  console.log("X is undefined")
}


// task: 
  // Create a js variable to store the name of a day (Sunday till Saturday)
  // print the following: 
    // if day ====> Saturday or Sunday ====> Print Holiday
    // if day ====> Friday ======> Print Weekend
    // if day =====> Other then these =====> Print Weekday

// use only if-else 

let day = "Friday";

// nesting 

if(day === "Saturday" || day === 'Sunday') {
  console.log("Holiday")
} else {
  if(day === 'Friday') {
    console.log("Weekend")
  } else {
    console.log("Weekday")
  }
}


if (day === 'Friday') {
  console.log("Weekend");
} else {
  if (day === "Saturday" || day === "Sunday") {
    console.log("Holiday");
  } else {
    console.log("Weekday");
  }
}

// else if 
if (day === "Friday") {
  console.log("Weekend");
} else if(day === "Saturday" || day === 'Sunday') {
  console.log("Holiday")
} else  {
  console.log("Weekday")
}

// switch case 
switch (day) {
  // body 
  case "Friday":
    console.log("Weekend")
    break;  
  case "Saturday":
  case "Sunday": 
    console.log("Holiday");
    break;
  default:      // optional
    console.log("Weekday")
    break;      // optional
}


// 1-7
let dayNo = 1;    
switch(dayNo){
  case 1: 
    console.log("Sunday");
    break;
  case 2: 
    console.log("Monday");
    break;
    //
}



// Task: 1
// Create a js object named Student with name, email, marksObtained as a number value
// Assign some static value to the student variable. 
// Consider total as 500
// Print the percentage and division based on the marksObtained by following break down: 
// If percentage is >= 80 => Print Distinction
// If percentage is >= 60 but < 80 => Print First Division
// If percentage is >= 45 but < 60 => Print Second Division
// If percentage is >= 32 but < 45 => Print Third Division
// If percentage is < 32 => Print Sorry! You are failed. 

// Percentage = marksObtained/total * 100

let Student = {
  name: "Student One",
  email: "one@student.com",
  marksObtained: 350
}
const total = 500;
const percentage = Student.marksObtained/total * 100;

if(percentage >= 80) {
  console.log("Distinction")
} else if(percentage >= 60 ) {
  console.log("First Division");
} else if(percentage >= 45) {
  console.log("Second Division")
} else if(percentage >= 32) {
  console.log("Third Division");
} else {
  console.log("Sorry! You are failed.")
}



if (percentage >= 80) {
  console.log("Distinction");
} else {
  if (percentage >= 60) {
    console.log("First Division");
  } else {
    if (percentage >= 45) {
      console.log("Second Division");
    } else {
      if (percentage >= 32) {
        console.log("Third Division");
      } else {
        console.log("Sorry! You are failed.");
      }
    }
  }
}

// percentage 86

if (percentage >= 80) {
  console.log("Distinction");
}

if (percentage >= 60 && percentage < 80) {
  console.log("First Division");
}

if (percentage >= 45 && percentage < 60) {
  console.log("Second Division");
} 

if (percentage >= 32 && percentage < 45) {
  console.log("Third Division");
} 


if(percentage < 32) {
  console.log("Sorry! You are failed.");
}


switch (true) {
  case percentage >= 80:
    console.log("Distiction");
    break;
  case percentage >= 60 && percentage < 80:
    console.log("First");
    break;
  case percentage >= 45 && percentage < 60:
    console.log("Second");
    break;
  case percentage >= 32 && percentage < 45:
    console.log("Third");
    break;
  // case (percentage < 32):
  default: 
    console.log("Sorry! You are failed.")
    break;
}


// Task: 2 
// Calculate electricity bill amount to be paid based on the following: 
// Consider total units consumed to be some non negative numeric value.
// The bill amount to calculate has to follow the following: 
// If total units consumed is <= 30, a lumsum amount of Npr. 80 has to be paid
// for next 20 units, the rate is Npr. 4.5/unit
// For next 30 units, the rate is Npr. 5/unit
// for next 50 units, the rate is Npr. 7.5/unit
// For next 100 units, the rate is Npr. 12/unit
// for next 200 units, the rate is Npr. 15/unit
// and for above any, the rat is Npr. 25/unit

// What will be the bill amount if, units consumed are: 
// a. 25 => 80
// b. 37
// c. 65
// d. 100
// e. 120
// f. 223
// g. 350
// h. 457

let unitsConsumed = 25;

// logic 
console.log("")