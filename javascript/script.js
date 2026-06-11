//Q1
// function runtwice(fn){
//    fn()
//    fn()
// }
// runtwice(function(){
//    console.log("hello")
// })

//Q2
// function pure(a,b){
//    console.log(a+b);
// }
// pure(2,3)

// let global = 0
// function impure(a,b){
//    global++;
//    console.log(global);
// }

//Q3 object distructuring
// function abcd({name, age}){
//    console.log(name , age)
// }
// abcd({name:"vishal", class:"BCA"})

//Q4
// let obj = {
//    name:"vishal",
//    fnc: function(){
//       console.log(this)
//    },
//    fnc2: ()=>{
//       console.log(this)
//    }
// }


//Q5
// let arr = [1,2,3,4,5];
// let newarr = arr.map(function(val){
//    return val * val;
// })
// console.log(newarr);

//Q6
// let arr = [1,2,3,4,5,6,7,8,9]
// let even = arr.filter(function(val){
//    return val%2 === 0;
// })
// console.log(val);

//Q7
// let salary = [1000, 2000, 3000];
// let ans = salary.reduce(function(acc, val){
//    return acc+val;
// },0)
// console.log(ans)

//Q8
// let names = ["raj", "vishal", "ravi"];
// let ans = names.some(function(val){
//    return val.length >3;
// })
// let names = ["raj", "vishal", "ravi"];
// let ans = names.every(function(val){
//    return val.length >3;
// })

// Q9
// let user = {
//    name:"vishal",
//    age: 18,
//    email : "sl@lkjd"
// }
// Object.freeze(user);

// Q10
// let obj = {
//    user : {
//       name: "vishal",
//       address: {
//          city:"chd",
//       },
//    },
// };

// let {city} = obj.user.address;