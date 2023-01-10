const logoImg = document.querySelector(".logoImg");
const FirstTyping = document.querySelectorAll(".FirstTyping");
const SecondTyping = document.querySelectorAll(".SecondTyping");
const p_icons = document.querySelectorAll(".a");
const icons = document.querySelectorAll(".icon");
const textLogo1 = document.querySelector(".textLogo1");
const textLogo2 = document.querySelector(".textLogo2");

function finishIntro() {
  thirdSec.style.display = "block";
  thirdSec.classList.add("overlayDisplay");
  setTimeout(() => {
    location.href = "./pages/main.html";
  }, 2000);
}
function textLogoShow() {
  textLogo1.classList.add("textLogoOn");

  setTimeout(() => {
    textLogo2.classList.add("textLogoOn");
  }, 500);

  setTimeout(() => {
    logoBox.classList.add("animate__flash");
    logoBox.style.transform = "rotate(-5deg)  translateY(50px)";
  }, 1000);

  setTimeout(() => {
    finishIntro();
  }, 2800);
}

function showIcons() {
  ipad.classList.add("animate__fadeInUpBig");
  ipad.style.opacity = 1;
  // p_icons.forEach((p) => {
  //   p.classList.add("animate__zoomIn");
  // });

  icons.forEach((icon, key) => {
    setTimeout(() => {
      icon.classList.add("animate__zoomIn");
      icon.style.opacity = 1;
    }, key * 500);
  });

  setTimeout(() => {
    handIcon.classList.add("animate__fadeInUpBig");
    handIcon.style.opacity = 1;
  }, 1500);

  setTimeout(() => {
    handIcon.classList.remove("animate__fadeInUpBig");
    handIcon.classList.add("clickAni");
  }, 2500);

  setTimeout(() => {
    ipad.classList.remove("animate__fadeInUpBig");
    ipad.classList.add("ipadPlus");
  }, 3000);

  setTimeout(() => {
    handIcon.classList.remove("clickAni");
    handIcon.classList.add("animate__bounceOutDown");
  }, 3500);

  setTimeout(() => {
    textLogoShow();
  }, 4000);
}

function showSecondSec() {
  bgBox.classList.add("SecondSecOn");

  setTimeout(() => {
    showIcons();
  }, 400);
}
function hideAndSecondText() {
  TypingBox.classList.add("animate__zoomOutDown");
  setTimeout(() => {
    SecondTyping.forEach((txt) => {
      txt.style.opacity = 1;
    });
    TypingBox2.classList.add("animate__fadeInLeft");
  }, 600);

  setTimeout(() => {
    TypingBox2.classList.remove("animate__fadeInLeft");
    TypingBox2.classList.add("animate__bounceOutRight");
  }, 1500);

  setTimeout(() => {
    // firstSec.style.opacity = "0";
    secondSec.style.display = "flex";
    showSecondSec();
  }, 2300);
}

function showFirstText() {
  FirstTyping.forEach((txt, key) => {
    setTimeout(() => {
      txt.classList.add("typingOn");
    }, 100 * key);
  });

  setTimeout(() => {
    hideAndSecondText();
  }, 500);
}
function translateLogo() {
  logoImg.classList.add("translateLogoOn");
  let test1 = $(".logoImg");
  console.log($("body").offset());
  bodyPosition = $("body").offset();
  // $("#introCircle").remove();
  $("#introCircle").fadeOut("slow", function () {
    $(this).remove();
  });
  setTimeout(() => {
    $("#imgBox").animate({ top: "0", left: "0" }, 100);
  }, 300);
  setTimeout(() => {
    showFirstText();
  }, 600);
}

function showLogo() {
  logoImg.classList.add("logoOn");
}

window.addEventListener("load", () => {
  introCircle.classList.add("animate__bounceInDown");
  setTimeout(() => {
    introCircle.classList.remove("animate__bounceInDown");
    introCircle.classList.add("circleOn");
    smallCircle.classList.add("s_circleOn");
  }, 1000);

  setTimeout(() => {
    showLogo();
  }, 1100);
  setTimeout(() => {
    translateLogo();
  }, 2000);
});
