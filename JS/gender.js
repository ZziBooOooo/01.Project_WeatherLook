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
