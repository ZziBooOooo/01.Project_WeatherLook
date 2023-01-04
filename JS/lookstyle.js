let genderList = JSON.parse(localStorage.gender);
console.log(genderList);

const lookStyles = document.querySelectorAll(".styleBox");
console.log(lookStyles);

lookStyles.forEach((div) => {
  div.addEventListener("click", (e) => {
    let lookStyleValue = e.target.id;

    let styleList = genderList.filter(
      (item) => item.lookStyle === lookStyleValue
    );
    localStorage.style = JSON.stringify(styleList);

    setTimeout(() => {
      location.href = "./style_screen_01.html";
    }, 500);
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
