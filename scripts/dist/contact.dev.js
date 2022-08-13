"use strict";

var pictures = document.querySelector(".pictures");
var images = document.querySelectorAll(".pictures .hotel");
var active = 0;
var submitButton = document.querySelector(".submit");
var input = document.querySelector(".direction");
var changeBaner = setInterval(function () {
  switch (active) {
    case 0:
      {
        images[0].style.visibility = 'visible';
        images[1].style.visibility = 'hidden';
        images[2].style.visibility = 'hidden';
        images[3].style.visibility = 'hidden';
        active++;
        break;
      }

    case 1:
      {
        images[0].style.visibility = 'hidden';
        images[1].style.visibility = 'visible';
        images[2].style.visibility = 'hidden';
        images[3].style.visibility = 'hidden';
        active++;
        break;
      }

    case 2:
      {
        images[0].style.visibility = 'hidden';
        images[1].style.visibility = 'hidden';
        images[2].style.visibility = 'visible';
        images[3].style.visibility = 'hidden';
        active++;
        break;
      }

    case 3:
      {
        images[0].style.visibility = 'hidden';
        images[1].style.visibility = 'hidden';
        images[2].style.visibility = 'hidden';
        images[3].style.visibility = 'visible';
        active = 0;
        break;
      }
  }
}, 2500);
//# sourceMappingURL=contact.dev.js.map
