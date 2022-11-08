console.log('hello')

const imgSrc = ['./images/hacksultan.jpg', './images/myblogsc.png', './images/scofield.jpeg', './images/seths.jpeg', './images/snailmeme.jpeg', './images/yinyang.webp']
const imgAlt = ['hack sultan on the windows xp wallpapper', 'screenshot from a recent blog of mine', 'Micheal Scofield from Prison Break', "screenshot from Seth Godin's Blog", "meme", "Yin Yang"]


const imgData = {
    
}

function pickSrc(x){
    if(x === 5){
        return 0
    }else{
        return x + 1
    }
}

function slide(){
    console.log('pic should slide')
    let myImg = document.getElementById("img");
}
window.addEventListener('click', slide)
