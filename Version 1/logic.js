var origin = "Tamil Nadu, India";
var destination = "Delhi, India";
var lastResponse=null;
var olat, olng, dlat, dlng;
var tripOrigin, tripDestination, tripDistance, tripDuration;
var directionsRenderer;
var directionsService;
var placesService;
var map;
var isFirstTime = true;
function initMap() {
    map = new google.maps.Map(document.getElementById("mapID"), {
      zoom: 13,
      center: { lat: 37.77, lng: -122.447 },
    });
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsService = new google.maps.DirectionsService();
    placesService = new google.maps.places.PlacesService(map);
    directionsRenderer.setMap(map);
    calculateAndDisplayRoute();
    // document.getElementById("mode").addEventListener("change", () => {
    //   calculateAndDisplayRoute(false);
    // });
    document.getElementById("checkButton").addEventListener("click", () => {
      if(checkValidDestination())
      {
        calculateAndDisplayRoute();
        showPlaces();
      }
    });
  }
  
  function calculateAndDisplayRoute() {
    const selectedMode = document.getElementById("mode").value;
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        // Note that Javascript allows us to access the constant
        // using square brackets and a string value as its
        // "property."
        travelMode: google.maps.TravelMode[selectedMode],
      }, directionsCallback
    );
  }

  function directionsCallback(response, status) {
    console.log(response, status, isFirstTime);
    saveLastResponse(response);
    if (status == "OK") {
      directionsRenderer.setDirections(response);
      setTripDetailsInTable();
      console.log(isFirstTime);
      if(!isFirstTime)
      {
        alert("Map updated! Please check.");
      }
      else{
        isFirstTime=false;
      } 
    } else {
      window.alert("Directions request failed due to " + status);
    }
  }

  function setTripDetailsInTable()
  {
    document.querySelector("#tripOrigin").innerHTML = getTableRowFormattedData(tripOrigin);
    document.querySelector("#tripDestination").innerHTML = getTableRowFormattedData(tripDestination);
    document.querySelector("#tripDistance").innerHTML = getTableRowFormattedData(tripDistance);
    document.querySelector("#tripDuration").innerHTML = getTableRowFormattedData(tripDuration);
  }

  function saveLastResponse(response)
  {
    lastResponse = response;
    olat = response.routes[0].legs[0].start_location.lat();
    olng = response.routes[0].legs[0].start_location.lng();
    dlat = response.routes[0].legs[0].end_location.lat();
    dlng = response.routes[0].legs[0].end_location.lng();
    tripOrigin = lastResponse.routes[0].legs[0].start_address;
    tripDestination = lastResponse.routes[0].legs[0].end_address;
    tripDistance = lastResponse.routes[0].legs[0].distance.text;
    tripDuration = lastResponse.routes[0].legs[0].duration.text;
    console.log('Saving lastResponse', lastResponse);
  }

  function showPlaces()
  {
    if(document.getElementById("placeCheckBox").checked)
    {
      var destinationLatLng = {lat: dlat, lng: dlng };
      placesService.nearbySearch({
        location : destinationLatLng,
        radius : 5500,
        type : [ 'hotel' ]
      }, placesCallback);
    }
  }

  function placesCallback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      alert("Nearest hotels found -> " + results.length + " results")
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
            console.log(results[i]);
        }
    }
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map : map,
        position : placeLoc
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });
}


function displayMap()
{
    document.getElementById('mapID').style.display = "block";
    initialize();
}
function initialize()
{
    // create the map
    var myOptions = {
        zoom: 14,
        center: new google.maps.LatLng( 0.0, 0.0 ),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map( document.getElementById( "mapID" ),myOptions );
}

function checkValidDestination()
{
  destination = document.getElementById("destination").value;
  if(destination==null || destination=="")
  {
    alert("Hey, please enter a valid destination!");
    return false;
  }
  return true;
}

function getTableRowFormattedData(value) {
  return (
    '<center><font color = "white " size = 5 >' + value + "</font></center>"
  );
}