"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var navigation = _toConsumableArray(document.querySelectorAll(".navigation li"));

var pictures = _toConsumableArray(document.querySelectorAll(".pictures .img"));

window.addEventListener("load", function () {
  var splashScreen = document.getElementById("load");
  splashScreen.style.display = "none";
});

if (window.navigator.userAgent.indexOf("Chrome") > -1) {
  document.querySelector('meta[name="theme-color"]').setAttribute("content", "#317EFB");
} else if (window.navigator.userAgent.indexOf("Firefox") > -1) {
  document.querySelector('meta[name="theme-color"]').setAttribute("content", "#317EFB");
} else if (window.navigator.userAgent.indexOf("MSIE") > -1) {
  document.querySelector('meta[name="msapplication-TileColor"]').setAttribute("content", "#317EFB");
}

for (var i = 0; i < navigation.length; i++) {
  navigation[i].addEventListener("mouseover", toggle);
  navigation[i].addEventListener("mouseleave", exit);
}

function toggle() {
  var li = this;
  navigation.forEach(function (item) {
    return item.classList.add("disabled");
  });
  li.classList.remove("disabled");
  li.classList.add("clikedElement");

  if (li === navigation[0]) {
    pictures[0].classList.add("active");
  } else if (li === navigation[1]) {
    pictures[1].classList.add("active");
  } else if (li === navigation[2]) {
    pictures[2].classList.add("active");
  } else if (li === navigation[3]) {
    pictures[3].classList.add("active");
  } else if (li === navigation[4]) {
    pictures[4].classList.add("active");
  }
}

function exit() {
  navigation.forEach(function (item) {
    item.classList.remove("disabled");
    item.classList.remove("clikedElement");
  });
  var li = this;

  if (li === navigation[0]) {
    pictures[0].classList.remove("active");
  } else if (li === navigation[1]) {
    pictures[1].classList.remove("active");
  } else if (li === navigation[2]) {
    pictures[2].classList.remove("active");
  } else if (li === navigation[3]) {
    pictures[3].classList.remove("active");
  } else if (li === navigation[4]) {
    pictures[4].classList.remove("active");
  }
}
//# sourceMappingURL=main.dev.js.map
