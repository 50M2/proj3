function initializeMap() {
  const focus = { lat: 32.6858, lng: -117.1254};

  const map = new google.maps.Map(document.getElementById("map"), {
    center: focus,
    zoom: 14,
  });

  const sanDiegoMarker = new google.maps.Marker({
    position: focus,
    map: map,
    title: "Naval Base San Diego",
  });

  const illinoisTechMarker = new google.maps.Marker({
    position: { lat: 41.8367, lng: -87.6260 },
    map: map,
    title: "Illinois Institute of Technology",
  });

  const questionsButton = document.getElementById("mapButton");
  questionsButton.addEventListener("click", handeClick);

  function handeClick() {
    //display message when button is clicked
    alert("If you have any questions, contact me at tboyne@hawk.illinoistech.edu");
  }
}