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
  w_Icon.src = `../img/Big_wea_Img/02d.png`;
  // w_Icon.src = `../img/Big_wea_Img/${weather_icon}.png`;
}
function filterWeather() {
  weather_des == "clear sky";
  weather_des == "few clouds";
  weather_des == "Clouds";

  const color1 = "#abe9f8";
  const color2 = "#52bae4";
  shape.style.backgroundImage = `linear-gradient(64.00916346799386deg, ${color1}, ${color2})`;

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

  setText();
  filterWeather();
  setWeatherIcon();
  setInterval(setText, 5000);
  setTempText();
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
cur_weather_icon = cur_weather.weather[0].icon;

let texts = {
  text: [
    {
      des: "01d",
      t: "오늘은 맑고 화창한 날! 상쾌한 기분으로 오늘 하루를 즐겨보세요",
    },
    {
      des: "01n",
      t: "오늘은 맑고 화창한 날! 상쾌한 기분으로 오늘 하루를 즐겨보세요",
    },
    {
      des: "02d",
      t: "맑지만 약간의 구름이 있는 날이예요. 오늘도 즐거운 하루 되세요",
    },
    {
      des: "02n",
      t: "맑지만 약간의 구름이 있는 날이예요. 오늘도 즐거운 하루 되세요",
    },
    {
      des: "03d",
      t: "흐린 날이지만 웃으면서 즐거운 하루 보내세요",
    },
    {
      des: "03n",
      t: "흐린 날이지만 웃으면서 즐거운 하루 보내세요",
    },
    {
      des: "04d",
      t: "오늘은 날이 흐려요. 내일은 화창한 날씨를 바라며! 오늘도 즐거운 하루 보내세요",
    },
    {
      des: "04n",
      t: "오늘은 날이 흐려요. 내일은 화창한 날씨를 바라며! 오늘도 즐거운 하루 보내세요",
    },
    {
      des: "09d",
      t: "오늘은 비가 내리는 날이예요. 비가 오면 맑은 날보다 챙겨야 할 것들이 많지만 한발 먼저 움직이며 여유로운 시간이 되었으면 좋겠어요. 오늘도 여유로운 하루!",
    },
    {
      des: "09n",
      t: "오늘은 비가 내리는 날이예요. 비가 오면 맑은 날보다 챙겨야 할 것들이 많지만 한발 먼저 움직이며 여유로운 시간이 되었으면 좋겠어요. 오늘도 여유로운 하루!",
    },
    {
      des: "10d",
      t: "비가 온 뒤에야 환한 무지개를 만나듯 힘든 일 걷히고 좋은 일만 가득할 거라는 기대와 설렘으로 행복한 하루 보내ㅛㅔ요.",
    },
    {
      des: "10n",
      t: "비가 온 뒤에야 환한 무지개를 만나듯 힘든 일 걷히고 좋은 일만 가득할 거라는 기대와 설렘으로 행복한 하루 보내ㅛㅔ요.",
    },
    {
      des: "11d",
      t: "천둥과 번개가 공포를 느끼게 해도 그저 자연 현상일 뿐이라고 생각해요. 불안해 하지마세요!",
    },
    {
      des: "11n",
      t: "천둥과 번개가 공포를 느끼게 해도 그저 자연 현상일 뿐이라고 생각해요. 불안해 하지마세요!",
    },
    {
      des: "13d",
      t: "눈이 한바탕 내리고 나니 점점 추워져요. 항상 건강 조심하시고, 행복하게 겨울 보내세요",
    },
    {
      des: "13n",
      t: "눈이 한바탕 내리고 나니 점점 추워져요. 항상 건강 조심하시고, 행복하게 겨울 보내세요",
    },
    {
      des: "50d",
      t: "안개는 건강에 좋지 않아요. 오늘은 야외활동을 자제하여 호흡기 질환을 조심해요",
    },
    {
      des: "50n",
      t: "안개는 건강에 좋지 않아요. 오늘은 야외활동을 자제하여 호흡기 질환을 조심해요",
    },
  ],
};
let weather_text = texts.text;
console.log(weather_text);

function setTempText() {
  for (let i = 0; i < weather_text.length; i++) {
    if (cur_weather_icon == weather_text[i].des) {
      weather_textBox.textContent = weather_text[i].t;
    }
  }
}
