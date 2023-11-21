// Your Google Maps API key goes here
const apiKey = "AIzaSyCePGmogmGkgiP1WbwMNNrQcYsXc2JIPPU";

// Function to initialize the map
function initMap() {
  // Initialize map centered at your preset location
  const presetLocation = { lat: 37.7749, lng: -122.4194 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: presetLocation,
  });

  // Add a marker for the preset location
  new google.maps.Marker({
    position: presetLocation,
    map: map,
    title: "Preset Location",
  });
}

// Function to calculate distance
function calculateDistance() {
  const userLocationInput = document.getElementById("userLocation").value;

  // Use Google Maps Geocoding API to convert user's location input to coordinates
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: userLocationInput }, function (results, status) {
    if (status === "OK" && results[0]) {
      const userLocation = results[0].geometry.location;

      // Use Google Maps Geometry Library to calculate distance
      const presetLocation = new google.maps.LatLng(37.7749, -122.4194);
      const distance = google.maps.geometry.spherical.computeDistanceBetween(
        userLocation,
        presetLocation
      );

      alert(
        `Distance from your location to preset location: ${distance.toFixed(
          2
        )} meters`
      );
    } else {
      alert("Geocoding failed. Please enter a valid location.");
    }
  });
}
