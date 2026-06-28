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

//homework
// let laptop = {
//     brand : "HP",
//     price : 60000,
//     start : function(){
//         console.log("Laptop Started");
//     },
//     increase: function(){
//         this.incprice = this.price * 0.10;
//         return this.price + this.incprice;
//     }
// }
// console.log(laptop);
// console.log(laptop.start());
// console.log("New price : "+ laptop.increase())



// class Employee {
//     constructor(name, salary) {
//         this.name = name;
//         this.salary = salary;
//     }
//     showDetails(){
//         console.log("name of Emp : "+this.name)
//         console.log("salary of Emp : "+this.salary)
//     }

// }
// const emp = new Employee("vishal",5000)
// const emp2 = new Employee("Rahul", 60000);
// const emp3 = new Employee("Amit", 70000);
// emp.showDetails();
// emp2.showDetails();
// emp3.showDetails();


// class BandAcc{
//     constructor(Aholder, balance){
//         this.Aholder = Aholder;
//         this.balance = balance;
//     }
//     diposit(dipositamount){
//         this.amount = dipositamount;
//         this.balance = this.balance + this.amount
//         console.log(this.amount + "diposit successfully")
//     }
//     show(){
//         console.log("account holder : "+this.Aholder);
//         console.log("Balance : "+this.balance);
//     }
// }
// let pnb = new BandAcc("vishal",100000);
// let pnb1 = new BandAcc("abhay",10000);
// pnb.show();
// pnb1.diposit(5000);
// pnb1.show();



function Vehicle(type, wheels) {
  this.type = type;
  this.wheels = wheels;
  Vehicle.prototype.describe = function(){
    console.log("Type : "+this.type);
    console.log("Wheels : "+this.wheels);
  }
}

let car = new Vehicle("rubbur", "modify")
car.describe();