
let index = 0;

function showImg() {
    const img = [...document.querySelectorAll(".img")];
    for(let i=0; i<img.length; i++) {
        img[i].style.display = "none";

    }
    index++;

    if(index > img.length) {
        index = 1;
    }
    img[index-1].style.display = "block";
    
    setTimeout(showImg, 2500)
}
showImg()