const weatherBox = document.querySelector(".weatherBox");
const API_KEY = "367636d16a48743eb5074f58249138c2";
let tempList;

// 메인 컨텐츠 효과
window.addEventListener("load", () => {
  //   console.log("test");
  const mainBox = document.querySelector(".mainBox");
  mainBox.id = "mainBoxShow";

  setTimeout(() => {
    showTitle();
  }, 1500);

  setTimeout(() => {
    showContents();
  }, 3500);
});

function showTitle() {
  mainText.style.opacity = 1;
  animateSequence();
  animateRandom();
}

function animateSequence() {
  var a = document.getElementsByClassName("sequence");
  for (var i = 0; i < a.length; i++) {
    var $this = a[i];
    var letter = $this.innerHTML;
    letter = letter.trim();
    var str = "";
    var delay = 100;
    for (l = 0; l < letter.length; l++) {
      if (letter[l] != " ") {
        str +=
          '<span style="animation-delay:' +
          delay +
          "ms; -moz-animation-delay:" +
          delay +
          "ms; -webkit-animation-delay:" +
          delay +
          'ms; ">' +
          letter[l] +
          "</span>";
        delay += 150;
      } else str += letter[l];
    }
    $this.innerHTML = str;
  }
}

function animateRandom() {
  var a = document.getElementsByClassName("random");
  for (var i = 0; i < a.length; i++) {
    var $this = a[i];
    var letter = $this.innerHTML;
    letter = letter.trim();
    var delay = 70;
    var delayArray = new Array();
    var randLetter = new Array();
    for (j = 0; j < letter.length; j++) {
      while (1) {
        var random = getRandomInt(0, letter.length - 1);
        if (delayArray.indexOf(random) == -1) break;
      }
      delayArray[j] = random;
    }
    for (l = 0; l < delayArray.length; l++) {
      var str = "";
      var index = delayArray[l];
      if (letter[index] != " ") {
        str =
          '<span style="animation-delay:' +
          delay +
          "ms; -moz-animation-delay:" +
          delay +
          "ms; -webkit-animation-delay:" +
          delay +
          'ms; ">' +
          letter[index] +
          "</span>";
        randLetter[index] = str;
      } else randLetter[index] = letter[index];
      delay += 80;
    }
    randLetter = randLetter.join("");
    $this.innerHTML = randLetter;
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showContents() {
  const weatherBox = document.querySelector(".weatherBox");
  const b_mainContentBox = document.querySelector(".b_mainContentBox");
  const testBtn = document.querySelector(".bottomBox button");
  const contents = [weatherBox, b_mainContentBox, testBtn];
  const imgContents = [shirtBox, bagBox, shoesBox, hatBox, smallLogoText];

  contents.forEach((cont, key) => {
    setTimeout(() => {
      console.log(cont);
      cont.classList.add("contentShow");
      if (key == 1) {
        imgContents.forEach((img, key2) => {
          setTimeout(() => {
            img.classList.add("imgContentShow");
          }, 400 * key2);
        });
      }
    }, 800 * key);
  });
}

/* 메인기능 */

/* weather api */
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      displayWeather(json);
      setTemperature(json);
    });
}

/* weatherBox에 현재값 넣는 함수 */
function displayWeather(data) {
  /* const weatherImg = document.createElement("img");
  weatherImg.src = `./img/weather_Icon/${data.weather[0].icon}.png`;
  weatherImg.setAttribute("class", "floating"); */
  // weatherImg.src = `./img/weather_Icon/04d.gif`;
  let mainTemp = Math.floor(data.main.temp);
  weatherIcon.src = `../img/weather_icon/${data.weather[0].icon}.png`;
  temp.innerHTML = mainTemp + "℃";
  region.innerHTML = data.name;
}

function setTemperature(data) {
  loadItems().then((items) => {
    tempFilter(data, items);
  });
}

/* 현재 기온 필터링함수 */
function tempFilter(data, items) {
  console.log(items);
  let mainTemp = Math.floor(data.main.temp);
  let kr_mainTemp;
  if (mainTemp >= 28) {
    kr_mainTemp = "28도 이상";
  } else if (mainTemp >= 23 && mainTemp <= 27) {
    kr_mainTemp = "23도 이상 27도 이하";
  } else if (mainTemp >= 17 && mainTemp <= 22) {
    kr_mainTemp = "17도 이상 22도 이하";
  } else if (mainTemp >= 12 && mainTemp <= 16) {
    kr_mainTemp = "12도 이상 16도 이하";
  } else if (mainTemp >= 7 && mainTemp <= 11) {
    kr_mainTemp = "7도 이상 11도 이하";
  } else if (mainTemp >= 1 && mainTemp <= 6) {
    kr_mainTemp = "1도 이상 6도 이하";
  } else if (mainTemp <= 0) {
    kr_mainTemp = "0도 이하";
  }

  tempList = items.filter((item) => item.temp == kr_mainTemp);
  localStorage.temp = JSON.stringify(tempList);

  setEventListeners(tempList);
}

// 성별선택 박스에 이벤트 등록 + 성별 필터링함수 호출
function setEventListeners(tempList) {
  console.log(tempList);
  const s_btns = document.querySelector(".s_Form");
  s_btns.addEventListener("click", () => filterGender(tempList));
}

navigator.geolocation.getCurrentPosition(onGeoOk);

/* data.json 받아오기 */
function loadItems() {
  return fetch("../data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}
