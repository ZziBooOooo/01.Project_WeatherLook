let tempList = JSON.parse(localStorage.temp);
let genderValue;

window.addEventListener("load", () => {
  //   console.log("test");
  const mainBox = document.querySelector(".mainBox");
  /*   console.log(mainBox); */
  mainBox.style.opacity = 1;
});

female.addEventListener("click", () => {
  location.href = "./lookstyle.html";
  genderValue = female.id;
  filterGender(tempList, genderValue);
});

male.addEventListener("click", () => {
  location.href = "./lookstyle.html";
  genderValue = male.id;
  filterGender(tempList, genderValue);
});

function filterGender(tempList, genderValue) {
  let genderList = tempList.filter((item) => item.gender == genderValue);
  localStorage.gender = JSON.stringify(genderList);
}

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
