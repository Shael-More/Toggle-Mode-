const btn = document.getElementById('toggler');
const btn_icon = document.getElementById('toggler-icon');
const contain = document.getElementById('contain');
const wind = document.getElementById('wind');


// only toggle mode 
btn.onclick = function() {
  if (contain.getAttribute("data-theme") != "dark") {
    contain.setAttribute("data-theme", "dark")
    btn_icon.setAttribute("class", "fas fa-solid fa-sun");
    wind.setAttribute("style", "color: orange");
  } else {
    contain.setAttribute("data-theme", "");
    btn_icon.setAttribute("class", "fas fa-solid fa-moon");
    wind.setAttribute("style", "color: #0f345fe3");
  }
}