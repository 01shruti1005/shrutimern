//Task1
//Create an array variable names as students and assigned atleast 5-10 students information as an object to the array.
//Use different array function for insertion push(),unshift() and splice()
//Each student information must contain name email address and score obtained shouls be less than 500

let students = [
  { name: "Ram", email: "ram@12gmail.com", score: 450 },
  { name: "Shyam", email: "shyam@12gmail.com", score: 390 },
  { name: "Hari", email: "hari@12.com", score: 410 },
];

students.push({ name: "Sita", email: "sita12@gmail.com", score: 470 });

students.unshift({ name: "Meera", email: "meera12@gmail.com", score: 430 });

students.splice(2, 0, {
  name: "Shruti",
  email: "shruti12@gmail.com",
  score: 420,
});

students.push({ name: "Tara", email: "tara12@gmail.com", score: 400 });
students.push({ name: "Ishu", email: "ishu12@gmail.com", score: 390 });
students.push({ name: "Malisha", email: "malisha12@gmail.com", score: 440 });
students.push({ name: "Kriti", email: "kriti12@gmail.com", score: 410 });

console.log(students);


