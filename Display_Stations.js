
// Initialize and add the map
function initMap() {
  // The location of Pully
  var Pully= {lat: 6.67, lng: 46.51};
  var Berne_Zollik= {lat: 7.47, lng: 46.98};
  var Zuerich= {lat: 8.5667, lng: 47.3831};
  // The map, centered at Pully
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: Pully});
  // The marker, positioned at Pully
  var marker = new google.maps.Marker({position: Pully, map: map});
// The map, centered at Berne_Zollik
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: Berne_Zollik});
  // The marker, positioned at Berne_ollik
  var marker = new google.maps.Marker({position: Berne_Zollik, map: map});

// The map, centered at Zuerich
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: Zuerich});
  // The marker, positioned at Zuerich
  var marker = new google.maps.Marker({position: Zuerich, map: map});

}

