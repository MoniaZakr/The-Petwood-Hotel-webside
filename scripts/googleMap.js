
const input1 = document.getElementById('origin');
const output = document.querySelector('.output');
const mode = document.getElementById("mode");



window.addEventListener("load", function() {
    this.alert("Please enter the Google maps api key in the HTML file! More information at: https://developers.google.com/maps/documentation/javascript/get-api-key?hl=pl")
    const selectedMode = document.querySelector('input[type="radio"]:checked')
    input1.value = "";
    output.innerHTML = "";
    if (selectedMode) {
      selectedMode.checked = false;
    }
});

  
function intMap() {
    const location = {lat :53.152360, lng :-0.224120};

    const map = new google.maps.Map(document.getElementById("map"), { zoom: 8,
    center: location});
    
    const marker = new google.maps.Marker({
        position: location,
        map:map,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    })

    const info = new google.maps.InfoWindow({
        content:'<h1>The Petwood Hotel</h1>'
    });
    
    marker.addListener("click", function() {
        info.open(map, marker)
    });
    
    autocomplete1 = new google.maps.places.Autocomplete(input1);
      

    const directionsDisplay = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    
    
    directionsDisplay.setMap(map);
    mode.addEventListener("change", function () {
        const selectedMode = document.querySelector('input[type="radio"]:checked').value;
        calcRoute(directionsDisplay, directionsService, map, location, selectedMode);
    });
}

function calcRoute(directionsDisplay, directionsService, map, location, selectedMode) {
    
    const request = {
        origin: input1.value,
        destination: {lat :53.152360, lng :-0.224120},
        travelMode: google.maps.TravelMode[selectedMode], 
    }
    console.log(request.origin);

    //pass the request to the route method
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {

            //Get distance and time
            // const output = document.querySelector('.output');
            output.innerHTML = "<div class='alert-info'>From: " + document.getElementById("origin").value + ".<br />To: Petwood Hotel"  + ".<br /> Distance : " + result.routes[0].legs[0].distance.text + ".<br />Duration : " + result.routes[0].legs[0].duration.text + ".</div>";

            //display route
            directionsDisplay.setDirections(result);
        } else {
            //delete route from map
            directionsDisplay.setDirections({ routes: [] });
            //center map 
            map.setCenter(location);

            //show error message
             output.innerHTML = "<div class='alert-danger'> Could not retrieve driving distance.</div>";
        }
    });
}

  

  
    

    



 
 
