// create map object and center lat/lon and zoom level
var map = L.map('map').setView([30, -90], 4);
var streets = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
// Different layers from nowcoast web site
var lighting = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer/WMSServer", {
    layers: '1',
    format: 'image/png',
    transparent: true,
    attribution: "NOAA"
}).addTo(map);

var meteohydro = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_rtma_time/MapServer/WMSServer", {
    layers: '1',
    format: 'image/png',
    transparent: true,
    opacity: 0.333,
    attribution: "NOAA"
}).addTo(map);

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
};

var overlays = {
    "lighting": lighting,
    "meteohydro": meteohydro,
    "maxtemp": maxtemp,
};

L.control.layers(baseLayers, overlays).addTo(map);
