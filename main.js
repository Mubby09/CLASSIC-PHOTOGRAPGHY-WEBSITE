// On Init
renderTravlers();

var maxTravellers = 9;
var minTravellers = 0;
var travellersText = "1 Adult";

var travellersSelector = document.querySelector(".travellers-selector");
travellersSelector.addEventListener("click", function() {
  // Show or Hide Dropdown List Items
  var travellersDropdown = document.querySelector(".travellers-dropdown");

  if (travellersDropdown.style.display == "none") {
    travellersDropdown.style.display = "block";
    //   travellersDropdown.classList.add("zoomOut");
    // travellersDropdown.classList.remove("zoomIn");
  } else {
    travellersDropdown.style.display = "none";
    // travellersDropdown.classList.add("zoomIn");
    // travellersDropdown.classList.remove("zoomOut");
  }
});

function renderTravlers() {
  var travellersText = document.querySelector(".travellers-text");
  travellersText.innerText = "1 Adult";
}
