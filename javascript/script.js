//for loop
//  for(let i = 1; i<=10; i++){
//     console.log(i)
//  }
// for(let i = 1;i<10;i++){
//    if(i%2 === 0){
//       console.log(i)
//    }
// }

// for(let i = 10; i>=1; i--){
//    console.log(i)
// }

// for(let i=1; i<=5; i++){
//    console.log("yes")
// }

// let age = prompt("Enter number");
// if (age === null){
//    console.error("You Cancelled")
// }
// else{
//    if(age.trim() === ""){
//       console.error("bhai dhang ka likh le")
//    }
//    else{
//       age = Number(age.trim());
//       if(isNaN(age)){
//          console.error("write some correct write no.")
//       }
//       else{
//          console.log("confirm ye number hai")
//       }
//    }
// }

//Assignments

// let age = prompt("Enter age")
// if(age >= 18){
//    console.log("You are eligible for vote")
// }
// else{
//    console.log("You are not eligible for vote")
// }

// for(let i = 1; i<=10; i++){
//    console.log(`5 x ${i} = ${i*5}`);
// }

// let count = 0;
// for(i=1; i<=15; i++){
//    if(i > 8){
//       count++;
//    }
// }
// console.log(`${count} numbers are greater than 8`)

// let password = "vishalbhai"
// let pass = prompt("Enter password")

// if(pass == null){
//    console.error("canceled")
// }
// else if(password === pass){
//    console.log("successful login")
// }
// else{
//    console.log("not matched")
// }

// let attampt = 0;
// let pass = "helloworld"
// attampt++;
// let password = prompt("Enter password")
// while (password != pass){
//    if(attampt === 3)
//       console.log("account Locked")
//       break;
//    password = prompt("password batao");
//    attampt++;
// }

let correct = "vishal"
let pass = prompt("Enter your password")

while(correct !== pass){
   pass = prompt("Enter your password")
}