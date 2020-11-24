import React from 'react';

function loadMap() {
    if(google){
        function getReverseGeocodingData(lat, lng) {
            var latlng = new google.maps.LatLng(lat, lng);
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                if (status !== google.maps.GeocoderStatus.OK) {
                    alert(status);
                }
                if (status == google.maps.GeocoderStatus.OK) {
                    document.getElementById('address2').value=(results[0].formatted_address);
                }
            });
        }
              function initMap() {
                var myLatLng = {lat: 14.5526503, lng: 121.0323753};
        
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 13.75,
                    center: myLatLng,
                    styles: [
                        {
                            "stylers": [
                                {
                                    "visibility": "on"
                                },
                                {
                                    "saturation": -100
                                },
                                {
                                    "gamma": 0.54
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "stylers": [
                                {
                                    "color": "#6c8e87"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels.text",
                            "stylers": [
                                {
                                    "visibility": "simplified"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels.text",
                            "stylers": [
                                {
                                    "visibility": "simplified"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#b4ede1"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.line",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "gamma": 0.48
                                }
                            ]
                        },
                        {
                            "featureType": "transit.station",
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "gamma": 7.18
                                }
                            ]
                        }
                    ]
                });
        
                var autocomplete;
                  autocomplete = new google.maps.places.Autocomplete((document.getElementById('address2')),);
                  google.maps.event.addListener(autocomplete, 'place_changed', function() {
                });
        
                var center = new google.maps.LatLng(12.8797, 121.7740);
                var circle = new google.maps.Circle({
                    center: center,
                    radius: 500
                });
                autocomplete.setBounds(circle.getBounds());
                        
                var geocoder = new google.maps.Geocoder();
                var marker2 = new google.maps.Marker
        
                document.getElementById('verify').addEventListener('click', function() {
                    geocodeAddress(geocoder, map);
                });
        
                // document.getElementById('submit').addEventListener('click', function() {
                //     geocodeAddress2(geocoder, map);
                // });
        
                  function geocodeAddress(geocoder, resultsMap) {
        
                  var address = document.getElementById('address2').value;
        
                  geocoder.geocode({'address': address}, function(results, status) {
                      if (status === 'OK') {
                      resultsMap.setCenter(results[0].geometry.location);
                      resultsMap.setZoom(18);
        
                      // const lngInfo = document.getElementById('lngInfo')
                      // latInfo.innerHTML = "Latitude: " + results[0].geometry.location.lat()
                      // lngInfo.innerHTML = "Longitude: " + results[0].geometry.location.lng()
        
                      localStorage.setItem("address", JSON.stringify(results[0].geometry.location))
        
                      // localStorage.setItem(results[0].geometry.location, "address")
        
                      // console.log(results[0].geometry.location)
                      marker2 = new google.maps.Marker({
                          map: resultsMap,
                          position: results[0].geometry.location,
                          // draggable: true,
                          draggable: false,
                          animation: google.maps.Animation.DROP,
                          // icon: "/assets/images/publicmarker.png",
                          zoom: 20
                      });
        
                      var infowindow = new google.maps.InfoWindow();
                      infowindow.setContent("Name: " + document.getElementById('firstName').value + " " + document.getElementById('lastName').value + "<br />" + "Email: " + document.getElementById('email').getAttribute('placeholder') + "<br />" + "Address: " + document.getElementById('address1').value.split("&")[0]);
                      infowindow.open(map,marker2);
        
                      // google.maps.event.addListener(marker2, 'dragend', function (evt) {
                      //     // latInfo.innerHTML = "Latitude: " + evt.latLng.lat().toFixed(7)
                      //     // lngInfo.innerHTML = "Longitude: " + evt.latLng.lng().toFixed(7)
        
                      //     getReverseGeocodingData(evt.latLng.lat().toFixed(7), evt.latLng.lng().toFixed(7))
                      //     event.preventDefault()
                      // }); 
        
                      } 
                      else {
                      alert('Address field blank or Address does not exist');
                      }
                  });
                }
              }

              initMap()
            }
};

export default loadMap;
