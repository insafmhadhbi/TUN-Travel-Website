let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let formClose = document.querySelector("#form-close");
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let videoBtn = document.querySelectorAll(".vid-btn");

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};
menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

formBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});
formClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
});
videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});

var nameError = document.getElementById("name-error");
var PhoneError = document.getElementById("phone-error");
var emailError = document.getElementById("Email-error");
var messageError = document.getElementById("message-error");
var SubmitError = document.getElementById("Submit-error");

function validateName() {
  var name = document.getElementById("contact-name").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
function validatePhone() {
  var phone = document.getElementById("contact-phone").value;
  if (phone.length == 0) {
    PhoneError.innerHTML = "phone No is required";
    return false;
  }
  if (phone.length !== 8) {
    PhoneError.innerHTML = "phone No should be 8 digits";
    return false;
  }
  if (!phone.match(/^[0-9]{8}$/)) {
    PhoneError.innerHTML = "only digits please.";
    return false;
  }
  PhoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  var email = document.getElementById("contact-email").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email invalid";
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateMessage() {
  var message = document.getElementById("contact-message").value;
  var required = 30;
  var left = required - message.length;
  if (left > 0) {
    messageError.innerHTML = left + "more characters required";
    return false;
  }
  messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    Submit.style.diasplay = "block";
    SubmitError.innerHTML = "Please fix error to submit";
    setTimeout(function () {
      SubmitError.style.diasplay = "none";
    }, 3000);
    return false;
  }
}
$(function () {
  var citys = [
    "Tunis",
    "Sfax",
    "Sousse",
    "kairouan",
    "Bizerte",
    "Gabès",
    "Gafsa",
    "Monastir",
    "Kasserine",
    "Djerba",
    "Nabeul",
    "Tataouine",
    "Béja",
    "Le Kef",
    "Mahdia",
    "Sidi Bouzid",
    "Jendouba",
    "Tozeur",
    "Siliana",
    "Zaghoua",
    "Kébili",
    "React",
  ];
  $("#city").autocomplete({
    source: citys,
  });
});