const pictures = document.querySelector(".pictures");
const images = document.querySelectorAll(".pictures .hotel");
let active = 0;
const submitButton = document.querySelector(".submit");
const input = document.querySelector(".direction");


let changeBaner = setInterval(() => {
    switch(active) {
        case 0: {
           images[0].style.visibility = 'visible';
           images[1].style.visibility = 'hidden';
           images[2].style.visibility = 'hidden';
           images[3].style.visibility = 'hidden';

           active++;
           break;
        }
        case 1: {
           images[0].style.visibility = 'hidden';
           images[1].style.visibility = 'visible';
           images[2].style.visibility = 'hidden';
           images[3].style.visibility = 'hidden';

           active++;
           break;
        }
        case 2: {
           images[0].style.visibility = 'hidden';
           images[1].style.visibility = 'hidden';
           images[2].style.visibility = 'visible';
           images[3].style.visibility = 'hidden';

           active++;
           break;
         }
         case 3: {
            images[0].style.visibility = 'hidden';
            images[1].style.visibility = 'hidden';
            images[2].style.visibility = 'hidden';
            images[3].style.visibility = 'visible';
 
            active = 0;
            break;
          }
      }
},2500);

   


