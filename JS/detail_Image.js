idValue = localStorage.getItem("id_key");
styleList = JSON.parse(localStorage.getItem("style"));
let clickId = idValue.slice(1) - 1;
let img_src = styleList[clickId].image.slice(5);
const StyleimgsBoxleft = document.querySelector(".StyleimgsBoxleft");
const codyTitle = document.querySelector(".cody_title");
const codyText = document.querySelector(".cody_text");

detailImg.src = `../img/Cody${img_src}`;

codyTitle.textContent = styleList[clickId].title;

let swiperWrapper = document.querySelector(".swiper-wrapper");
let detailImgArr = document.querySelectorAll(".swiper-slide img");
let detailImgArray = [];
for (let i = 0; i < 6; i++) {
  detailImgArray.push(detailImgArr[i]);
}

for (const key in styleList) {
  let img_src = styleList[key].image.slice(5);
  console.log(img_src);
  //detailImgArr[key].src = `../img/Cody${img_src}`;

  swiperWrapper.innerHTML += ` <div class="swiper-slide">
    <img src="../img/Cody${img_src}" id=${key} alt="">
    </div>`;
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    activeIndexChange: function () {},
  },
});

const imgArr = document.querySelectorAll(".swiper-slide img");
console.log(imgArr);

imgArr.forEach((img) => {
  img.addEventListener("click", (e) => {
    imgSrc = img.src;
    let arr = [];
    let searchvalue = "/";
    let pos = 0;
    while (true) {
      let foundPos = imgSrc.indexOf(searchvalue, pos);
      if (foundPos == -1) break;
      arr.push(foundPos);
      pos = foundPos + 1;
    }
    let test = imgSrc.slice(arr[4]);

    StyleimgsBoxleft.innerHTML = ` <div class="swiper-slide">
    <img src="../img/Cody/${test}" alt="" >
    </div>`;

    styleList.forEach((list, key) => {
      if (key == e.target.id) {
        codyTitle.textContent = list.title;
      }
    });
    // cody_title.textContent=
  });
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

console.log(styleList);

let texts = {
  text: [
    {
      temp: "0도 이하",
      t: "추운날씨엔 목도리, 모자, 장갑을 챙겨주세요",
    },
    {
      temp: "1도 이상 6도 이하",
      t: "날씨가 많이 춥지 않습니다. 얇은 옷을 여러겹 입는 것을 추천드려요",
    },
    {
      temp: "7도 이상 11도 이하",
      t: "선선한 날씨에는 얇은 외투, 자켓 등을 챙겨주세요",
    },
    {
      temp: "17도 이상 22도 이하",
      t: "활동하기에 딱 좋은 날씨. 얇지만 아직은 긴소매 옷을 추천드려요 ",
    },
    {
      temp: "23도 이상 27도 이하",
      t: "일교차가 있어요. 아침과 밤에 일정이 있다면 얇은 외투를 추천합니다",
    },
    {
      temp: "28도 이상",
      t: "날씨가 더워요. 소매가 없거나 짧은 하의를 추천드려요",
    },
  ],
};
let weather_text = texts.text;
console.log(texts.text);

for (let i = 0; i < weather_text.length; i++) {
  if (styleList[0].temp == weather_text[i].temp) {
    console.log("ji");
    codyText.textContent = weather_text[i].t;
  }
}

// 공유아이콘 마우스 이벤트
/* const contenti = document.querySelector(".contenti i");
const sns = document.querySelectorAll(".sns a i");
console.log(sns);

contenti.addEventListener("mouseover", () => {
  sns.forEach((i, key) => {
    setTimeout(() => {
      i.classList.add("iconAniClass");
    }, key * 200);
  });
});

contenti.addEventListener("mouseout", () => {
  sns.forEach((i) => {
    setTimeout(() => {
      i.classList.remove("iconAniClass");
    }, 200);
  });
});
 */

const contenti = document.querySelector(".contenti");
const sns = document.querySelector(".sns");
const snsa = document.querySelector(".sns a");

contenti.addEventListener("mouseover", () => {
  sns.style.opacity = 1;
  sns.style.height = "68px";
  //sns.style.display = 'block';
  sns.style.visibility = "visible";
});

contenti.addEventListener("mouseleave", () => {
  sns.style.opacity = 0;
  sns.style.height = "0px";
  //sns.style.display = 'none';
  sns.style.visibility = "hidden";
});
