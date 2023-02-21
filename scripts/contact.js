const pictures = document.querySelector(".pictures");
const images = document.querySelectorAll(".pictures .hotel");
let active = 0;
const submitButton = document.querySelector(".submit");
// const input = document.querySelector(".direction");


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

// function myFunction() {
//    // Get the value of the input field 
//    let input = document.querySelector(".direction").value;

//    // let x = input.value;
//    // If x is Not a Numbe
//    if (isNaN(input) || "") {
//     alert ("pppp");
//       return false
    
//    }
//    console.log(input);
// }
function checkPostcode() {
   let postcode = document.getElementById("postcode").value;
   if (isNaN(postcode) || postcode === "") {
     alert("Proszę wpisać kod pocztowy");
   } else {
     location.href = "http://127.0.0.1:5500/pages/googleMap.html";
     document.querySelector(".direction").value = ""; 
   }
}


