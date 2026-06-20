const paragraphs = document.querySelectorAll("p");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

paragraphs.forEach((para) => {
    const text = para.innerText;
    let iteration = 0;
    let interval;

    function randomText() {
        const str = text.split('').map((char, index) => {
            if (index < iteration) {
                return char;
            }

            return characters[Math.floor(Math.random() * 52)];
        }).join("");

        para.innerText = str;

        iteration += 0.4;

        if (iteration >= text.length) {
            clearInterval(interval);
            para.innerText = text;
        }
    }

    para.addEventListener("mouseenter", () => {
        iteration = 0;
        clearInterval(interval);
        interval = setInterval(randomText, 30);
    });
});