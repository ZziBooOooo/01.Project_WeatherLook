idValue = localStorage.getItem("id_key");
styleList = JSON.parse(localStorage.getItem("style"));
let clickId = idValue.slice(1) - 1;
let img_src = styleList[clickId].image.slice(5);

detailImg.src = `../img/Cody${img_src}`;

let swiperWrapper = document.querySelector(".swiper-wrapper");
let detailImgArr = document.querySelectorAll(".swiper-slide img");
let detailImgArray = [];
for (let i = 0; i < 6; i++) {
  detailImgArray.push(detailImgArr[i]);
}

for (const key in styleList) {
  let img_src = styleList[key].image.slice(5);
  console.log(img_src);
  console.log(detailImgArr[key]);
  //detailImgArr[key].src = `../img/Cody${img_src}`;

  swiperWrapper.innerHTML += ` <div class="swiper-slide">
    <img src="../img/Cody${img_src}" alt="">
    </div>`;
}
console.log(detailImgArray);

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
