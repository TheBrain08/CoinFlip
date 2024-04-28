const pic = ["CoinFront.png", "CoinBack.png"];
const img = document.getElementById("pic");
const sound = new Audio('./coinSound.mp3');
let isFlipping = false;

function flip() {
    if (isFlipping) return;
    isFlipping = true;
    sound.play();
    randomNum = Math.floor(Math.random() * 2);
    img.src = pic[randomNum];
    setTimeout(() => {
        img.style.transform = `rotateX(180deg)`;
        setTimeout(() => {
            isFlipping = false;
            img.style.transform = "rotateX(0deg)";
        }, 200);
    }, 0);
}