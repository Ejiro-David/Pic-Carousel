console.log("hello");
var x = 0;
const LeftClick = document.getElementById('lr');
const RightClick = document.getElementById("rr");




function ack(){
    console.log('click logged')
}






const imgSrc = [
  "./images/hacksultan.jpg",
  "./images/myblogsc.png",
  "./images/seths.jpeg",
  "./images/snailmeme.jpeg",
  "./images/yinyang.webp",
  "./images/putinspittin.jpeg",
];
const imgAlt = [
  "hack sultan on the windows xp wallpapper",
  "screenshot from a recent blog of mine",
  "screenshot from Seth Godin's Blog",
  "meme",
  "Yin Yang",
  "putin speaks some hard truths",
];

const imgData = {};

        
var x = 1;

const setSrc = (ind) => {
    myImg = document.getElementById("img");
    myImg.setAttribute('src', imgSrc[ind])
    myImg.setAttribute('alt', imgAlt[ind])
}
function swipe(event){
    console.log(event.target.id)
    if(event.target.id === 'lr'){
        if(x > 0){
            x--
        }else{
            x = imgAlt.length - 1;
        }
        setSrc(x)
    }else{
        if(x < 6){
            x++
        }else{
            x = 0
        }
        setSrc(x)
    }


}

