if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showLocation);
  console.log(navigator.geolocation)
}

function showLocation(position){

  const long = position.coords.longitude;
  const lat = position.coords.latitude;

  const mapUrl = `https://maps.google.com/maps?q=${lat},${long}&t=&z=10&ie=UTF8&iwloc=&output=embed`;

  const mapContainer = document.getElementById("map");
    mapContainer.innerHTML = `<iframe width="600" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="${mapUrl}"></iframe>`;

}