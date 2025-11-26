function initializeMap() {
  const center_focus = { lat: 22.3321, lng: 114.1903};

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