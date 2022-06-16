"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var index = 0;

function showImg() {
  var img = _toConsumableArray(document.querySelectorAll(".img"));

  for (var i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }

  index++;

  if (index > img.length) {
    index = 1;
  }

  img[index - 1].style.display = "block";
  setTimeout(showImg, 2500);
}

showImg();
//# sourceMappingURL=restaurant.dev.js.map
