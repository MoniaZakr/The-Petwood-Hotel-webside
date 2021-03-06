const navigation = [...document.querySelectorAll(".navigation li")];
const pictures = [...document.querySelectorAll(".pictures .img")]

for (var i = 0; i < navigation.length; i++) {
    navigation[i].addEventListener( "mouseover", toggle);
    navigation[i].addEventListener( "mouseleave", exit);
}
  
function toggle() {
    const li = this;
    navigation.forEach(item => 
        item.classList.add("disabled")
    );
    li.classList.remove("disabled");
    li.classList.add("clikedElement");
    
    if(li === navigation[0]) {
        pictures[0].classList.add("active")
    }
    
    else if(li === navigation[1]) {
        pictures[1].classList.add("active")
    }
    else if(li === navigation[2]) {
        pictures[2].classList.add("active")
    }
    else if(li === navigation[3]) {
        pictures[3].classList.add("active")
    }else if(li === navigation[4]) {
        pictures[4].classList.add("active")}
}

function exit() {
    navigation.forEach(item => {
        item.classList.remove("disabled");
        item.classList.remove("clikedElement")
    })
    const li = this;
    if(li === navigation[0]) {
        pictures[0].classList.remove("active")
    }
    else if(li === navigation[1]) {
        pictures[1].classList.remove("active")
    }
    else if(li === navigation[2]) {
        pictures[2].classList.remove("active")
    }
    else if(li === navigation[3]) {
        pictures[3].classList.remove("active")
    }
    else if(li === navigation[4]) {
        pictures[4].classList.remove("active")
    }
}