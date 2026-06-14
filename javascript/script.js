let btn = document.querySelector("button");
let main = document.querySelector("main");

btn.addEventListener("click", function () {
    let div = document.createElement("div");
    let x = Math.random()*100;
    let y = Math.random()*100;
    var c1 = Math.floor(Math.random()*256);
    var c2 = Math.floor(Math.random()*256);
    var c3 = Math.floor(Math.random()*256);

    div.style.width = "100px";
    div.style.height = "100px";
    div.style.position = "absolute";
    div.style.left = x + "%";
    div.style.top = y + "%";
    div.style.border = "1px solid black";
    div.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
    main.appendChild(div);
})