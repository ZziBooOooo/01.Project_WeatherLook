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
