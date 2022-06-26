"use strict";

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
    position: {
      lat: 53.152360,
      lng: -0.224120
    },
    map: map
  });
  var info = new google.maps.InfoWindow({
    content: '<h1>The Petwood Hotel</h1>'
  });
  marker.addListener("click", function () {
    info.open(map, marker);
  });
}
//# sourceMappingURL=googleMap.dev.js.map
