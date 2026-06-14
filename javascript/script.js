let btn = document.querySelector("button");
let main = document.querySelector("main");

btn.addEventListener("click", function () {
    let arr = ["Hello world", "how are you", "looking good !!!", "have a nice day", "keep smiling", "you are amazing", "javascript is fun", "coding is life", "never give up", "believe in yourself"];
    let x = Math.floor(Math.random() * 80);
    let y = Math.floor(Math.random() * 80);
    let rotate = Math.floor(Math.random() * 360);
    let scale = Math.random() * 2 + 0.5;
    let a = Math.floor(Math.random() * arr.length);


    let h1 = document.createElement("h1");
    h1.textContent = arr[a];
    h1.style.position = "absolute";
    h1.style.left = x + "%";
    h1.style.top = y + "%";
    h1.style.transform = "rotate(" + rotate + "deg)";
    h1.style.scale = scale;
    main.appendChild(h1);
})