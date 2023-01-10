const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

window.addEventListener("resize", () => {
  /*   console.log(window.innerWidth); */
  /* 
  if (window.innerWidth <= 780) {
    cursor.style.display = "none";
  } */
});
