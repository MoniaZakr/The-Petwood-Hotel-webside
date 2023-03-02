"use strict";

var input1 = document.getElementById('origin');
var output = document.querySelector('.output');
var mode = document.getElementById("mode");
window.addEventListener("load", function () {
  var splashScreen = document.getElementById("load");
  splashScreen.style.display = "none";
});
window.addEventListener("load", function () {
  this.alert("Please enter the Google maps api key in the HTML file! More information at: https://developers.google.com/maps/documentation/javascript/get-api-key?hl=pl");
  var selectedMode = document.querySelector('input[type="radio"]:checked');
  input1.value = "";
  output.innerHTML = "";

  if (selectedMode) {
    selectedMode.checked = false;
  }
});

function intMap() {
  var location = {
    lat: 53.152360,
    lng: -0.224120
  };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  var info = new google.maps.InfoWindow({
    content: '<h1>The Petwood Hotel</h1>'
  });
  marker.addListener("click", function () {
    info.open(map, marker);
  });
  autocomplete1 = new google.maps.places.Autocomplete(input1);
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var directionsService = new google.maps.DirectionsService();
  directionsDisplay.setMap(map);
  mode.addEventListener("change", function () {
    var selectedMode = document.querySelector('input[type="radio"]:checked').value;
    calcRoute(directionsDisplay, directionsService, map, location, selectedMode);
  });
}

function calcRoute(directionsDisplay, directionsService, map, location, selectedMode) {
  var request = {
    origin: input1.value,
    destination: {
      lat: 53.152360,
      lng: -0.224120
    },
    travelMode: google.maps.TravelMode[selectedMode]
  };
  console.log(request.origin); //pass the request to the route method

  directionsService.route(request, function (result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      //Get distance and time
      // const output = document.querySelector('.output');
      output.innerHTML = "<div class='alert-info'>From: " + document.getElementById("origin").value + ".<br />To: Petwood Hotel" + ".<br /> Distance : " + result.routes[0].legs[0].distance.text + ".<br />Duration : " + result.routes[0].legs[0].duration.text + ".</div>"; //display route

      directionsDisplay.setDirections(result);
    } else {
      //delete route from map
      directionsDisplay.setDirections({
        routes: []
      }); //center map 

      map.setCenter(location); //show error message

      output.innerHTML = "<div class='alert-danger'> Could not retrieve driving distance.</div>";
    }
  });
}
//# sourceMappingURL=googleMap.dev.js.map
