// Q1
// let user = {
//     name : "vishal",
//     email : "alsdfj",
//     login: function(){
//         console.log("logged in");
//     },
// };
// user.login();


// Q2
// class User{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }
//     loggedin(){
//         console.log("loogedin")
//     };
// }
// let user1 = new User("vishal", "a;lkfj")
// let user2 = new User("shivam", "adfdf")
// let user3 = new User("akhil", "a;wwer")
// let user4 = new User("ankush", "wrwrew")
// let user5 = new User("rajveer", "hdfsd")


// Q3
// let product = {
//     name : "cap",
//     price : 3300,
//     discountP: function () {
//         return this.price - 200;
//     },
// };
// console.log(product.discountP());


// Q4
// class Car{
//     constructor(brand, speed){
//         this.brand = brand;
//         this.speed = speed;
//     }
//     drive(){
//         return (this.brand + " - " + this.speed);
//     }
// }
// let car1 = new Car("Hyundai", 180);

// Q5
// let car2 = new Car("Maruti", 170);

// Q6
// class Student{
//     constructor(name, rollnumber){
//         this.name = name;
//         this.rollnumber = rollnumber;
//     }
//     introduce(){
//         console.log(this.name + " " + this.rollnumber);
//     }
// }

// let st1 = new Student("Harsh", 21);


// Q7
// let obj = {
//     sayName : function(){
//         console.log(this)
//     },
//     sayArrowName : ()=> {
//         console.log(this);
//     },
// };
// obj.sayName();
// obj.sayArrowName();


// Q7
// function Animal(){
//     this.name = "vishal";
// }
// let an1 = new Animal();


// Q8
// function Animal(){
//     this.name = "vishal";
// }
// Animal.prototype.loggedin = function(){
//     console.log("loggedin");
// }
// let an1 = new Animal();



// Q9
// function abcd(){
//     console.log(this.name);
// }
// let obj = {
//     name : "vishal"
// }
// abcd.call(obj)

// Q10
// function abcd(a,b,c,d){
//     console.log(this.name);
// }
// let obj = {
//     name : "vishal"
// }
// abcd.apply(obj, [1,2,3,4]);

// Q11
// function abcd(a,b,c,d){
//     console.log(this.name);
// }
// let obj = {
//     name : "vishal"
// }
// let fnc = abcd.bind(obj);
// fnc();