const navigation = [...document.querySelectorAll("li")];

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
}
function exit() {
    navigation.forEach(item => item.classList.remove("disabled"))
}