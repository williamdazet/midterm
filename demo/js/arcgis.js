require(["esri/map", "esri/layers/ArcGISDynamicMapServiceLayer","esri/dijit/BasemapToggle","dojo/domReady!"], function(Map,ArcGISDynamicMapServiceLayer,BasemapToggle){
  var map = new Map("map", {
    center: [-90, 30],
    zoom: 4,
    basemap: "topo"
  });


  /*
   * Add layer(s) from an ArcGIS web service
   *
   * function name: ArcGISDynamicMapServiceLayer
   * module name: "esri/layers/ArcGISDynamicMapServiceLayer"
   * documentation: https://developers.arcgis.com/javascript/jssamples/map_dynamic.html
   * example: http://developers.arcgis.com/javascript/samples/map_dynamic/
   */


  // Create a layer object from an ArcGIS Server web service, setting the opacity option
  var layer1 = new ArcGISDynamicMapServiceLayer( "http://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer", {
    "opacity": 1

  });
  map.addLayer(layer1); // add the layer object to the map

  /*
   * Adds a map control to select a basemap. Requires a div with id="BasemapToggle" inside the map div.
   *
   * function name: BasemapToggle
   * module name: "esri/dijit/BasemapToggle"
   * documentation: https://developers.arcgis.com/javascript/jssamples/widget_toggle.html
   * example: http://developers.arcgis.com/javascript/samples/widget_toggle/
   */

  var toggle = new BasemapToggle({
    map: map,
    basemap: "hybrid"
  }, "BasemapToggle");
  toggle.startup();

});
