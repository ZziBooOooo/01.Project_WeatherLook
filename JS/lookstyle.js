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
    cur_time.textContent = `${time.getHours()}:0${time.getMinutes()}`;
  } else {
    cur_time.textContent = `${time.getHours()}:${time.getMinutes()}`;
  }
}

setInterval(getTime, 1000);

const mainBox = document.querySelector(".mainBox");
mainBox.style.opacity = 1;

/* const shapes = document.querySelectorAll(".styleBox");
const mainBox2 = document.querySelector(".mainBox");
console.log(shapes);

shapes.forEach((shape, key) => {
  shape.addEventListener("mouseenter", (e) => {
    if (key == 0) {
      mainBox2.style.backgroundColor = "rgb(248, 237, 237)";
    }
    if (key == 1) {
      mainBox2.style.backgroundColor = "rgb(231, 250, 236)";
    }
    if (key == 2) {
      mainBox2.style.backgroundColor = "rgb(250, 247, 231)";
    }
  });

  shape.addEventListener("mouseleave", (e) => {
    mainBox2.style.backgroundColor = "white";
  });
}); */
