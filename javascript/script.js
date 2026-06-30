//Quetions on callbacks
// Q1
// function afterdelay(time, cb){
//     setTimeout(() => {
//         cb();
//     }, time);
// }
// afterdelay(3000, function(){
//     console.log("executed")
// })

// Q2
// function getUser(username, cb){
//     console.log("getting user details....");
//     setTimeout(() => {
//         cb({id:1, username: "vishal"});
//     }, 1000);
// }
// function getUserPosts(id, cb){
//     console.log("getting users posts....")
//     setTimeout(() => {
//         cb(["hello", "good day", "yoo"])
//     }, 2000);
// }
// getUser("vishal", function(data){
//     getUserPosts(data.id, function(allposts){
//         console.log(data.username, allposts)
//     })
// })

// Q3
function loginUser(username, cb){
    console.log("logging in user....")
    setTimeout(() => {
        cb({id:1212, username:"vihal"});
    }, 1000);
}
function fetchPermissions(id, cb){
    console.log("loading permissions....")
    setTimeout(() => {
        cb(["read","write","delete"])
    }, 2000);
}
function loadDashboard(permission, cb){
    console.log("loggging dashboard....");
    setTimeout(() => {
        cb();
    }, 2000);
}

loginUser("vishal", function(userdata){
    fetchPermissions(userdata.id, function(permissions){
        loadDashboard(permissions, function(){
            console.log("dashboard loaded ✅");
        })
    })
})