function initializeMap() {
  const focus = { lat: 32.6858, lng: -117.1254};

  const map = new google.maps.Map(document.getElementById("map"), {
    center: focus,
    zoom: 14,
  });

  const marker = new google.maps.Marker({
    position: focus,
    map: map,
    title: "Naval Base San Diego",
  });

}