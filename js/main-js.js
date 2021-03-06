var link = document.querySelector(".write-us-btn");

var popup = document.querySelector(".contacts-popup");
var close = popup.querySelector(".contact-us-cancel");

var form = popup.querySelector("form");
var yourName = popup.querySelector("[name=name]");
var yourMail = popup.querySelector("[name=email]");
var yourMessage = popup.querySelector("[name=letter]");

var btn = form.querySelector(".filter-button");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  yourname.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

btn.addEventListener("click", function (evt) {
  if (!yourName.value || !yourMail.value || !yourMessage.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

var mapLink = document.querySelector(".button-map");

var mapPopup = document.querySelector(".map-popup");
var mapClose = mapPopup.querySelector(".contact-us-cancel");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  // evt.preventDefault();
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});