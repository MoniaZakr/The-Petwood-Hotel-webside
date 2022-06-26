function intMap() {
    const location = {lat :53.152360, lng :-0.224120};
    const map = new google.maps.Map(document.getElementById("map"), { zoom: 8,
    center: location});

    const marker = new google.maps.Marker({
        position:{lat :53.152360, lng :-0.224120},
        map:map
    })

    const info = new google.maps.InfoWindow({
        content:'<h1>The Petwood Hotel</h1>'
    });
    marker.addListener("click", function() {
        info.open(map, marker)
    })
}