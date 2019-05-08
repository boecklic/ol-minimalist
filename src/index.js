// import {Map, View, control} from 'ol';
import {Map, View} from 'ol';
import olms from 'ol-mapbox-style';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;

var view = new View({
  center: [ 917905.0809027092, 5915236.671894917 ],
  zoom: 8
}); 

var map  = new Map({
  target: 'map',
  // controls: ol.control.defaults({
  //   attribution: false
  // }),
  view: view
});

$.getJSON('https://mf-geoadmin4.int.bgdi.ch/ol-minimalist/v006_style_singledomain.json', function (json) {
  olms(map, json)
  .then(
    function success (styledMap) {
      console.log('olms done');
      console.log('map', map);
      console.log('view', map.getView())
    }
  )
});

// webpack wraps everything into a module
// variables that should be accessible in the console should
// be defined on window
window.map = map;
window.view = view;