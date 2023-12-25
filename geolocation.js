if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showLocation);
}

function showLocation(position) {
  const long = position.coords.longitude;
  const lat = position.coords.latitude;

  console.log(`longitude: ${long}, latitude: ${lat}`);
  
  const mapUrl = `https://maps.google.com/maps?q=${lat},${long}&t=&z=10&ie=UTF8&iwloc=&output=embed`;

  const mapIframe = document.getElementById("gmap_canvas");
  mapIframe.src = mapUrl;
}