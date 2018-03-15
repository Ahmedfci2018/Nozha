//initializing your javascript
var name;


             $('.open-popup-link').magnificPopup({
              type:'inline',
              midClick: true ,// allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
              closeBtnInside: false,
                 
            });

var panorama;
var lat;
var lng;
var places=[
    {lat:29.977940,lng: 31.131511,name:"Pyramids"},
    {lat:40.619226,lng: 40.294574,name:"Uzungöl"},
    {lat:25.718835,lng: 32.657270,name:"Karnak"}
];

function getValue(value){
    
    name=value;
    initialize();
}
      function initialize() {
          for(var i=0;i<places.length;i++)
          {
              if(name==places[i].name)
              {
                  lat=places[i].lat;
                  lng=places[i].lng;
              }
          }
          
        panorama = new google.maps.StreetViewPanorama(
            document.getElementById('street-view'),
            {
              position: {lat:lat, lng: lng},
              pov: {heading: 34, pitch: 10},
              zoom: 1
            });
      }