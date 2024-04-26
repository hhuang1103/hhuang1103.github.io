mapboxgl.accessToken = 'pk.eyJ1IjoiaGg3NTgiLCJhIjoiY2xuMXo5bjQxMDJ5YzJrbGpvbXZudTVudSJ9.SzlG3WInkn7aWBEYPJkw0A'
const map = new mapboxgl.Map({
  container: 'Hongtao', // container id
  style: 'mapbox://styles/hh758/clo5vasc200hp01pd9cts456i', // replace this with your style URL,
  center: [-122.42285, 37.76869], // The convention for coordinates is  typically [long, lat]
  zoom: 13,// The zoom level can be any decimal number
  pitch: 50,
  bearing: -40
});
map.on('load',function(){  
  map.addSource('restaurantSource', {
            'type': 'vector',
            'url': 'mapbox://hh758.6j053w3c',
        });
  map.addLayer({
    'id':'restaurantLayer',
    'type':'circle',
    'source':'restaurantSource',
    'source-layer':'Historical_Restaurant_Scores_-7dap0l',
    'paint':{
      'circle-color':[
        'match',
        ['to-number',['get', 'inspection_score']],
        45, '#FF0000 ',
        80, '#FFA500 ',
        85, '#FFFF00 ',
        90, '#ADFF2F ',
        95, '#008000 ',
        'gray' // Default color for any other value not in the ranges
      ],
    }
  });
  map.on('mouseenter','restaurantLayer',function(e){
        console.log(e.features[0]['properties']['business_name']);
        var name = e.features[0]['properties']['business_name'];
        var textField = document.getElementById('restText');
        textField.innerHTML = name;
  });
  console.log('④');
});
