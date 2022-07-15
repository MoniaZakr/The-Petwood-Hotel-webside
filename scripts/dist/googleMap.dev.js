"use strict";

var button = document.querySelector(".search");
var input1 = document.getElementById('origin');

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
  calcRoute(directionsDisplay, directionsService);
  document.getElementById("mode").addEventListener("change", function () {
    calcRoute(directionsDisplay, directionsService);
  });
}

function calcRoute(directionsDisplay, directionsService) {
  var request = {
    origin: input1.value,
    destination: {
      lat: 53.152360,
      lng: -0.224120
    },
    travelMode: google.maps.TravelMode[selectMode]
  };
  console.log(request.travelMode); //pass the request to the route method

  directionsService.route(request, function (result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      //Get distance and time
      var _output = document.querySelector('.output');

      _output.innerHTML = "<div class='alert-info'>From: " + document.getElementById("origin").value + ".<br />To: Petwood Hotel" + ".<br /> Distance <i class='fas fa-road'></i> : " + result.routes[0].legs[0].distance.text + ".<br />Duration <i class='fas fa-hourglass-start'></i> : " + result.routes[0].legs[0].duration.text + ".</div>"; //display route

      directionsDisplay.setDirections(result);
    } else {
      //delete route from map
      directionsDisplay.setDirections({
        routes: []
      }); //center map in London

      map.setCenter(location); //show error message

      output.innerHTML = "<div class='alert-danger'> Could not retrieve driving distance.</div>";
    }
  });
}
//# sourceMappingURL=googleMap.dev.js.map
