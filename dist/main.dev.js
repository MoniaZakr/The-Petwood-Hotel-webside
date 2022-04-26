"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var navigation = _toConsumableArray(document.querySelectorAll("li"));

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
}

function exit() {
  navigation.forEach(function (item) {
    return item.classList.remove("disabled");
  });
}
//# sourceMappingURL=main.dev.js.map
