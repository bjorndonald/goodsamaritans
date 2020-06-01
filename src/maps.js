function initMap(){
    // Map options
    var options = {
        zoom: 14,
        center: {lat: 4.9757, lng: 8.3417}
    }

    var map = new google.maps.Map(document.getElementById('map-id'), options)
    var pinColor = 'FFFF00';
    var pinIcon = new google.maps.MarkerImage(
        "./../images/marker.png",
        new google.maps.Size(24, 24));

    // Add marker
    var marker = new google.maps.Marker({
        position:{
            lat: 4.9757, lng: 8.3417
        },
        map: map,
        //icon: './../images/marker.png'
    });
    marker.setIcon(pinIcon);

    var infoWindow = new google.maps.InfoWindow({
        content:'<h1>Lynn MA</h1>'
    });

    marker.addListener('click', function(){
        infoWindow.open(map,marker);
    })

    addMarker({
        lat:4.8808,
        lng:8.5282
    });

    addMarker({
        lat:4.6467,
        lng:7.9429
    });

    // Add Marker Function
    function addMarker(coords) {
        var marker = new google.maps.Marker({
            position:coords,
            map: map,
            icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        });
    }
}