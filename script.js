console.log("hello");
var x = 0;

const imgSrc = [
    "./images/hacksultan.jpg",
    "./images/myblogsc.png",
    "./images/seths.jpeg",
    "./images/snailmeme.jpeg",
    "./images/yinyang.webp",
    "./images/putinspittin.jpeg"
];
const imgAlt = [
    "hack sultan on the windows xp wallpapper",
    "screenshot from a recent blog of mine",
    "screenshot from Seth Godin's Blog",
    "meme",
    "Yin Yang",
    "putin speaks some hard truths"
];

const imgData = {};

function pickSrc(y) {
    if (y === 5) {
        return 0;
    } else {
        return y + 1;
    }
}
var x = 1;
function slide() {
    let myImg = document.getElementById("img");
    console.log("click acknowledged");

    myImg.setAttribute('src', imgSrc[ x >= 7 ? x = 0 : x++], console.log('src set'));
    
}
window.addEventListener("click", slide);
