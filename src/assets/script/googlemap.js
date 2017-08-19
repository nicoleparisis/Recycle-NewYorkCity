window.onload = initialize();
var map;
var service;
var infowindow;

function initialize() {
  infowindow = new google.maps.InfoWindow();
  navigator.geolocation.getCurrentPosition(showPosition);
}
function showPosition(position) {
  var userLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

  map = new google.maps.Map(document.getElementById('map'), {
      center: userLocation,
      zoom: 12
    });
  var request = {
    location: userLocation,
    radius: '500',
    query: 'stop & shop'
  };
   var request2 = {
    location: userLocation,
    radius: '500',
    query: 'target'
  };
   var request3 = {
    location: userLocation,
    radius: '500',
    query: 'whole foods'
  };
  var request4 = {
    location: userLocation,
    radius: '500',
    query: 'walmart'
  };
  var request5 = {
    location: userLocation,
    radius: '500',
    query: 'recycling'
  };

  var request6 = {
    location: userLocation,
    radius: '500',
    query: 'shoprite'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
  service.textSearch(request2, callback);
  service.textSearch(request3, callback);
  service.textSearch(request4, callback);
  service.textSearch(request5, callback);
  service.textSearch(request6, callback);
  
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}
function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
          switch(place.name) {
            case "Whole Foods Market":
                infowindow.setContent(place.name + "<br>Recycle services: plastic bags, batteries, wine bottle corks");
                break;
            case "Target":
                infowindow.setContent(place.name + "<br>Recycle services: plastic bags, plastic bottles, cans");
                break;
            case "Stop & Shop":
                infowindow.setContent(place.name + "<br>Recycle services: plastic bags");
                break;
            default:
                infowindow.setContent(place.name + "<br>Recycle services: call for details");
                break;
         }
          
          infowindow.open(map, this);
        });
      }
