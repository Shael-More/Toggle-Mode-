const btn = document.getElementById('toggler');
const btn_icon = document.getElementById('toggler-icon');
const contain = document.getElementById('contain');
const wind = document.getElementById('wind');

// only toggle mode
btn.onclick = function () {
  if (contain.getAttribute('data-theme') != 'dark') {
    contain.setAttribute('data-theme', 'dark');
    btn_icon.setAttribute('class', 'fas fa-solid fa-sun');
    wind.setAttribute('style', 'color: orange');
  } else {
    contain.setAttribute('data-theme', '');
    btn_icon.setAttribute('class', 'fas fa-solid fa-moon');
    wind.setAttribute('style', 'color: #0f345fe3');
  }
};

// API Call

const apiKey = '8422f1ac14709bb1db7dd36cb7a151ed';
const apiURL =
  'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

const search_box = document.querySelector('.search-box input');
const search_btn = document.querySelector('.search-box button');
const image = document.querySelector('.images');

async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  const data = await response.json();

  console.log(data);

  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML =
    Math.round(data.main.temp) + '&deg;C';
  document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
  document.querySelector('.wind-speed').innerHTML = data.wind.speed + ' Km/h';

  if (data.weather[0].main == 'Clouds') {
    image.src = 'assets/cloud.png';
  } else if (data.weather[0].main == 'Clear') {
    image.src = 'assets/clear.png';
  } else if (data.weather[0].main == 'Drizzel') {
    image.src = 'assets/drizzel.png';
  } else if (data.weather[0].main == 'Rainy') {
    image.src = 'assets/rainy.png';
  } else if (data.weather[0].main == 'Snow') {
    image.src = 'assets/snow.png';
  } else if (data.weather[0].main == 'Sunny') {
    image.src = 'assets/sunny.png';
  } else if (data.weather[0].main == 'Mist') {
    image.src = 'assets/mist.png';
  }
}

search_btn.addEventListener('click', () => {
  checkWeather(search_box.value);
});
