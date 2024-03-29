function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 6.67, lng: 46.51},
    zoom: 15
  });

  var request = {
    placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4',
    fields: ['name', 'formatted_address', 'place_id', 'geometry']
  };

  var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);

  service.getDetails(request, function(place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
          'Place ID: ' + place.place_id + '<br>' +
          place.formatted_address + '</div>');
        infowindow.open(map, this);
      });
    }
  });
}