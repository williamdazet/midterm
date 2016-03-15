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
  var kml1 = new google.maps.KmlLayer({
    url: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week_depth_animated_link.kml',
    preserveViewport: true // setting to true will prevent the map from zooming to this layer
  });
  kml1.setMap( map );

var kml2 = new google.maps.KmlLayer({
  url: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week_age_animated_link.kml',
  preserveViewport: true // setting to true will prevent the map from zooming to this layer
});
kml2.setMap( map );


var kml3 = new google.maps.KmlLayer({
  url: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month_depth_animated_link.kml',
  preserveViewport: true // setting to true will prevent the map from zooming to this layer
});
kml3.setMap( map );
}




/*
 * Add layer(s) from an online KML or KMZ file
 *
 * function: google.maps.KmlLayer
 * documentation: https://developers.google.com/maps/documentation/javascript/examples/layer-kml
 */
