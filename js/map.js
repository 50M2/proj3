function initializeMap() {
  const center_focus = { lat: 32.6858, lng: 117.1254};

  const map = new google.maps.Map(document.getElementById("map"), {
    center: center_focus,
    zoom: 14,
  });

  const marker = new google.maps.Marker({
    position: center_focus,
    map: map,
    title: "Naval Base San Diego",
  });

}