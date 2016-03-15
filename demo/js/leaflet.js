// create map object and center lat/lon and zoom level
var map = L.map('map').setView([30, -90], 4);
var streets = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var satellite = L.tileLayer( 'http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.{ext}', {
	type: 'sat',
	ext: 'jpg',
	attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency',
	subdomains: '1234'
});


// Added lighting
var lightning = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer/WMSServer", {
    layers: '1',
    format: 'image/png',
    transparent: true,
    attribution: "NOAA"
}).addTo(map);
//Added meteohydro
var meteohydro = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_rtma_time/MapServer/WMSServer", {
    layers: '1',
    format: 'image/png',
    transparent: true,
    opacity: 0.333,
    attribution: "NOAA"
}).addTo(map);
// Added daily max air temp.
var maxtemp = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_dailymaxairtemp_offsets/MapServer/WMSServer", {
    layers: '1',
    format: 'image/png',
    transparent: true,
    opacity: 0.222,
    attribution: "NOAA"
}).addTo(map);

//create an object with layers for each base map
var baseLayers = {
    "streets": streets,
    "Satellite": satellite
};

var overlays = {
    //"lighting": lighting,
    "meteohydro": meteohydro,
    "maxtemp": maxtemp,
};

function addpopup( feature, layer ){
  var html = feature.properties.mag + " magnitude, " + feature.properties.place;
  layer.bindPopup( html );
}

$.getJSON( "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson", function( geojsonFeatures ){
  L.geoJson( geojsonFeatures, { onEachFeature: addpopup } ).addTo(map);
});

L.control.layers(baseLayers, overlays).addTo(map);
