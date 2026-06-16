let card = document.querySelector(".card");
let love = document.querySelector("#love");

card.addEventListener("dblclick", function () {
    love.style.opacity = 1;
    love.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)'
    
    setTimeout(function() {
        love.style.opacity = 0;
        love.style.transform = 'translate(-50%, -200%) scale(1) rotate(60deg)'
    }, 800);
    setTimeout(function() {
        love.style.opacity = 0;
        love.style.transform = 'translate(-50%, -50%) scale(0) rotate(60deg)'
    }, 1000);
})