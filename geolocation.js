if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showLocation);
  console.log(navigator.geolocation)
}

let map, showLocation;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  });
  showLocation = new google.maps.showLocation();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          showLocation.setPosition(pos);
          showLocation.setContent("Location found.");
          showLocation.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, showLocation, map.getCenter());
        },
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, showLocation, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, showLocation, pos) {
  showLocation.setPosition(pos);
  showLocation.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation.",
  );
  showLocation.open(map);
}

window.initMap = initMap;