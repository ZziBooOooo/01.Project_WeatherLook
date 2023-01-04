window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

const wrapSlider = document.querySelector("#js-wrapSlider");
const widthWrap = wrapSlider.offsetWidth;

let items;
let sliders;
let sliderList = [];

let styleList = JSON.parse(localStorage.style);

const getSliderList = () => {
  sliders = document.querySelectorAll(".js-slider");
  // get the dom elements in a array to better use it
  sliderList = [...sliders];
};

// made a function for update later
getSliderList();

const slider = document.querySelectorAll(".js-slider")[0];
const sliderWidth = slider.offsetWidth;

const sumIsLargerThanSlider = sliderWidth >= widthWrap + sliderWidth;

const iterationItems = Math.ceil((widthWrap + sliderWidth) / sliderWidth);

// we clone number of slider we need
if (iterationItems > 1) {
  for (let i = 0; i < iterationItems - 1; i++) {
    const clone = slider.cloneNode(true);
    wrapSlider.appendChild(clone);
  }

  getSliderList();
}

// we create an array for knowing the state of each item
let stateList = sliderList.map((item, i) => {
  let pos = 0;
  let start = false;

  // here we allow the slide to start fully at left
  if (i < iterationItems - 1) {
    pos = -widthWrap + sliders[i].offsetWidth * i;
    start = true;

    sliders[i].style.transform = `translate(${pos}px, -50%)`;
  }

  return {
    pos,
    start,
  };
});

// logic animation for sliding each item at a time
const translate = () => {
  for (let i = 0; i < sliderList.length; i++) {
    const slider = sliderList[i];
    const sliderWidth = slider.offsetWidth;
    const nextIndex = i != sliderList.length - 1 ? i + 1 : 0;
    let pos;

    // if slider should be in movement
    if (stateList[i].start) {
      stateList[i].pos -= 1;
      pos = stateList[i].pos;

      slider.style.transform = `translate(${pos}px, -50%)`;
    }

    const isComplete = pos <= -sliderWidth;
    const isOutSeen = pos <= -widthWrap - sliderWidth;

    // if the slider is fully on screen
    if (isComplete) {
      stateList[nextIndex].start = true;
    }
    // if the slider finished crossing the slider and has disappeared
    if (isOutSeen) {
      stateList[i].start = false;
      stateList[i].pos = 0;
    }
  }
};

let isPaused = false;

function start() {
  if (!isPaused) {
    translate();
  }

  requestAnimFrame(start);
}

wrapSlider.addEventListener("mouseover", () => {
  isPaused = true;
});
wrapSlider.addEventListener("mouseout", () => {
  isPaused = false;
});

/* 필터링 거친 이미지 넣는 함수 */
function setImage() {
  let imgArray = [c1, c2, c3, c4, c5, c6];
  console.log(imgArray);
  for (const key in styleList) {
    console.log(key);
    let img_src = styleList[key].image.slice(5);
    imgArray[key][0].src = `../img/Cody${img_src}`;
    imgArray[key][1].src = `../img/Cody${img_src}`;
  }

  setDetailImage(imgArray);
}

function setDetailImage(items) {
  /*   let newItems = [];
  let newItems2 = [];
  for (let i = 0; i < 5; i++) {
    newItems.push(items[i][0]);
    newItems2.push(items[i][1]);
  }
  console.log(newItems);

  newItems.forEach((item, key) => {
    item.addEventListener("click", (e) => {
      console.log(e.target);
    });
  }); */
  let itemArray = document.querySelectorAll(".js-slider article");

  itemArray.forEach((item, key) => {
    item.addEventListener("click", (e) => {
      let clickItemId = e.target.id;
      setClickImage(clickItemId);
    });
  });
}

function setClickImage(id) {
  localStorage.setItem("id_key", id);
}

window.addEventListener("load", () => {
  setImage();
  start();
});

function getTime() {
  const time = new Date();
  let minute = time.getMinutes();
  if (minute < 10) {
    console.log("8");
    cur_time.textContent = `${time.getHours()}:0${time.getMinutes()}`;
  } else {
    cur_time.textContent = `${time.getHours()}:${time.getMinutes()}`;
  }
}

setInterval(getTime, 1000);

const mainBox = document.querySelector(".mainBox");
mainBox.style.opacity = 1;
