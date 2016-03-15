require(["esri/map", "esri/layers/ArcGISDynamicMapServiceLayer","dojo/domReady!"], function(Map, ArcGISDynamicMapServiceLayer) {
  var map = new Map("map", {
    center: [-118, 34.5],
    zoom: 8,
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

  // Create a layer object from an ArcGIS Server web service, with no options
  var layer1 = new ArcGISDynamicMapServiceLayer( "http://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer" );
  map.addLayer(layer1); // add the layer object to the map

  // Create a layer object from an ArcGIS Server web service, setting the opacity option
  var layer2 = new ArcGISDynamicMapServiceLayer( "  http://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer", {
    "opacity": 0.35
  });
  map.addLayer(layer2); // add the layer object to the map

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
