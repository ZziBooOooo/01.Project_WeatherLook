let weatherData = JSON.parse(localStorage.weather);
weather_des = weatherData.weather[0].description;
weather_icon = weatherData.weather[0].icon;
console.log(weatherData);
const snow = document.querySelectorAll(".snow");

function setText() {
  const timeDate = new Date();
  let apm = timeDate.getHours();
  let hour = timeDate.getHours();
  let mainTemp = Math.floor(weatherData.main.temp);

  day.textContent = `${timeDate.getMonth() + 1}월 ${timeDate.getDate()}일`;

  if (apm < 12) {
    apm = "오전";
  } else {
    apm = "오후";
    hour = hour - 12;
  }

  let minute = timeDate.getMinutes();
  if (minute < 10) {
    time.textContent = `${apm} ${hour}:0${minute}`;
  } else {
    time.textContent = `${apm} ${hour}:${minute}`;
  }

  region.textContent = weatherData.name;

  temp.textContent = mainTemp + "℃";
}

function setWeatherIcon() {
  // w_Icon.src = `../img/Big_wea_Img/01d.png`;
  w_Icon.src = `../img/Big_wea_Img/${weather_icon}.png`;
}
function filterWeather() {
  if (
    weather_des == "clear sky" ||
    weather_des == "few clouds" ||
    weather_des == "Clouds"
  ) {
    const color1 = "#abe9f8";
    const color2 = "#52bae4";
    shape.style.backgroundImage = `linear-gradient(64.00916346799386deg, ${color1}, ${color2})`;
  }
  if (
    weather_des == "scattered clouds" ||
    weather_des == "broken clouds" ||
    weather_des == "mist" ||
    weather_des == "thunderstorm" ||
    weather_des == "haze"
  ) {
    const color1 = "#93b6ca";
    const color2 = "#4a8daa";
    shape.style.backgroundImage = `linear-gradient(64.00916346799386deg, ${color1}, ${color2})`;
  }
  if (weather_des == "shower rain" || weather_des == "rain") {
    makeItRain();
    const color1 = "#8FAFC2";
    const color2 = "#12204E";
    shape.style.backgroundImage = `linear-gradient(64.00916346799386deg, ${color1}, ${color2})`;
  }
  if (weather_des == "snow") {
    const color1 = "#c7e0ee";
    const color2 = "#83c6e2";
    shape.style.backgroundImage = `linear-gradient(64.00916346799386deg, ${color1}, ${color2})`;
    snow.forEach((item) => {
      item.classList.add("active");
    });
  }
}

window.addEventListener("load", () => {
  //   console.log("test");
  const mainBox = document.querySelector(".mainBox");
  console.log(mainBox);
  mainBox.style.opacity = 1;

  filterWeather();
  setWeatherIcon();
  setText();

  setInterval(setText, 5000);
});

function makeItRain() {
  //clear out everything
  $(".rain").empty();

  var increment = 0;
  var drops = "";
  var backDrops = "";

  while (increment < 100) {
    //couple random numbers to use for various randomizations
    //random number between 98 and 1
    var randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
    //random number between 5 and 2
    var randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
    //increment
    increment += randoFiver;
    //add in a new raindrop with various randomizations to certain CSS properties
    drops +=
      '<div class="drop" style="left: ' +
      increment +
      "%; bottom: " +
      (randoFiver + randoFiver - 1 + 100) +
      "%; animation-delay: 0." +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"><div class="stem" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div><div class="splat" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div></div>';
    backDrops +=
      '<div class="drop" style="right: ' +
      increment +
      "%; bottom: " +
      (randoFiver + randoFiver - 1 + 100) +
      "%; animation-delay: 0." +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"><div class="stem" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div><div class="splat" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div></div>';
  }

  $(".rain.front-row").append(drops);
  $(".rain.back-row").append(backDrops);
}

function getTime() {
  const time = new Date();
  let minute = time.getMinutes();
  if (minute < 10) {
    cur_time.textContent = `${time.getHours()}:0${time.getMinutes()}`;
  } else {
    cur_time.textContent = `${time.getHours()}:${time.getMinutes()}`;
  }
}

setInterval(getTime, 1000);

let cur_weather = JSON.parse(localStorage.getItem("weather"));
cur_weather_des = cur_weather.weather[0].description;

let texts = {
  text: [
    {
      des: "clear sky",
      t: "맑은날",
    },
    {
      des: "few clouds",
      t: "적은 구름",
    },
    {
      des: "scattered clouds",
      t: "많은 구름",
    },
    {
      des: "broken clouds",
      t: "깨진구름이 뭔소리고",
    },
    {
      des: "shower rain",
      t: "샤워레인..?",
    },
    {
      des: "rain",
      t: "비",
    },
    {
      des: "thunderstorm",
      t: "천둥번개",
    },
    {
      des: "snow",
      t: "눈",
    },
    {
      des: "mist",
      t: "안개",
    },
  ],
};
let weather_text = texts.text;
console.log(weather_text);

for (let i = 0; i < weather_text.length; i++) {
  if (cur_weather_des == weather_text[i].des) {
    console.log(i);
    console.log(cur_weather_des);
    console.log(weather_text[i].des);
    weather_des.textContent = weather_text[i].t;
  }
}
