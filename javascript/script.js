// function addunl(...nums) {
//    let ans = nums.reduce(function(acc, val){
//       return acc + val;
//    }, 0);
//    console.log(ans)
   
// }
// addunl(1, 2, 3, 4, 5)

(function(){
   console.log("i run instantly!")
}) 

function parent(){
   let a = 12;
   function child(){
      console.log(a);
   }
}

let arr = ["apple","guava","grapes","mango","banana"];
arr.push("pear");
arr.unshift("orange");

for(let i = 0; i<arr.length; i++){
   console.log(arr[i])
}

let obg = {
   name: "vishal",
   age:19,
   city:"chandigarh"
};
for(let key in obg){
   console.log(obg[key])
}


setTimeout(function(){
   console.log("time up")
},2000)