idValue = localStorage.getItem("id_key");
styleList = JSON.parse(localStorage.getItem("style"));
let clickId = idValue.slice(1) - 1;
let img_src = styleList[clickId].image.slice(5);
const StyleimgsBoxleft = document.querySelector(".StyleimgsBoxleft");
const codyTitle = document.querySelector(".cody_title");

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
    /*     console.log(imgSrc);
    console.log(arr);
    console.log(imgSrc.slice(arr[4])); */
    let test = imgSrc.slice(arr[4]);

    StyleimgsBoxleft.innerHTML = ` <div class="swiper-slide">
    <img src="../img/Cody/${test}" alt="" >
    </div>`;

    /*     console.log(e.target.id);
    console.log(styleList); */

    styleList.forEach((list, key) => {
      console.log(list);
      console.log(key);
      if (key == e.target.id) {
        codyTitle.textContent = list.title;
      }
    });
    // cody_title.textContent=
  });
});

function getTime() {
  const time = new Date();
  cur_time.textContent = `${time.getHours()}:${time.getMinutes()}`;
}

setInterval(getTime, 1000);

const mainBox = document.querySelector(".mainBox");
mainBox.style.opacity = 1;
