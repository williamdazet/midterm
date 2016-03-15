/*
 * Create a basic map.
 * documentation: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 */

var map;
function initMap() {
  map = new google.maps.Map( document.getElementById( 'map' ), {
    center: { lat: 30, lng: -90 },
    zoom: 4
  });

  // code to add layers goes here

}
