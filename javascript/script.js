// let aud = new Audio('./audio')
const sounds = {
    C: new Audio("./audio/28.mp3"),
    D: new Audio("./audio/29.mp3"),
    E: new Audio("./audio/30.mp3"),
    F: new Audio("./audio/32.mp3"),
    G: new Audio("./audio/36.mp3"),
    A: new Audio("./audio/38.mp3"),
    B: new Audio("./audio/45.mp3")
};

buttons = document.querySelectorAll(".key");

document.body.addEventListener("keydown", function (dets) {
    if (dets.code === 'KeyA' || dets.code === 'KeyJ' || dets.code === 'KeyZ') {
        sounds.A.play();
        buttons[0].classList.add("active");
        setTimeout(() => {
            buttons[0].classList.remove("active");
        }, 1000);
    }
    if (dets.code === 'KeyB' || dets.code === 'KeyK' || dets.code === 'KeyX') {
        sounds.B.play();
        buttons[1].classList.add("active");
        setTimeout(() => {
            buttons[1].classList.remove("active");
        }, 1000);
    }
    if (dets.code === 'KeyC' || dets.code === 'KeyL' || dets.code === 'KeyW') {
        sounds.C.play();
        buttons[2].classList.add("active");
        setTimeout(() => {
            buttons[2].classList.remove("active");
        }, 1000);
    }
    if (dets.code === 'KeyD' || dets.code === 'KeyM' || dets.code === 'KeyS') {
        sounds.D.play();
        buttons[3].classList.add("active");
        setTimeout(() => {
            buttons[3].classList.remove("active");
        }, 1000);
    }
    if (dets.code === 'KeyE' || dets.code === 'KeyN' || dets.code === 'KeyH') {
        sounds.E.play();
        buttons[4].classList.add("active");
        setTimeout(() => {
            buttons[4].classList.remove("active");
        }, 1000);
    }
    if (dets.code === 'KeyF' || dets.code === 'KeyO' || dets.code === 'KeyI') {
        sounds.F.play();
        buttons[5].classList.add("active");
        setTimeout(() => {
            buttons[5].classList.remove("active");
        }, 1000);
    }
    if (dets.code === 'KeyG' || dets.code === 'KeyP' || dets.code === 'KeyU') {
        sounds.G.play();
        buttons[6].classList.add("active");
        setTimeout(() => {
            buttons[6].classList.remove("active");
        }, 1000);
    }
    if (dets.code === 'KeyQ' || dets.code === 'KeyR' || dets.code === 'KeyT' || dets.code === 'KeyY') {
        sounds.F.play();
        buttons[5].classList.add("active");
        setTimeout(() => {
            buttons[5].classList.remove("active");
        }, 1000);
    }
})