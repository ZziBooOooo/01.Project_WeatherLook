const cards = document.querySelectorAll(".card");
const refreshBtn = document.querySelector("#popupBox button");

let maxTime = 30;
let matched = 0;
let cardOne, cardTwo, timer;
let disableDeck = false;
let timeLeft = maxTime;
isPlaying = false;

function stopGame(matched) {
  console.log("test");
  popupBox.classList.add("active");
  if (matched == 6) {
  }
}

function initTimer() {
  if (timeLeft <= 0) {
    stopGame();
    return clearInterval(timer);
  }

  timeLeft--;
  timeText.textContent = `남은시간 : ${timeLeft}`;
}

function flipCard({ target: clickedCard }) {
  //   console.log({ target: clickedCard });
  //   console.log(clickedCard);

  if (!isPlaying) {
    isPlaying = true;
    timer = setInterval(initTimer, 1000);
  }
  if (cardOne !== clickedCard && !disableDeck) {
    console.log(cardOne);
    clickedCard.classList.add("flip");
    if (!cardOne) {
      return (cardOne = clickedCard);
    }
    cardTwo = clickedCard;
    disableDeck = true;
    let cardOneImg = cardOne.querySelector(".back-view img").src,
      cardTwoImg = cardTwo.querySelector(".back-view img").src;
    matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(img1, img2) {
  if (img1 === img2) {
    matched++;
    if (matched == 6) {
      if (matchedCard == 6 && timeLeft > 0) {
        return clearInterval(timer);
      }
      cardOne.removeEventListener("click", flipCard);
      cardTwo.removeEventListener("click", flipCard);
      cardOne = cardTwo = "";
      stopGame(matched);
      return (disableDeck = false);
    }
  }
  setTimeout(() => {
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
  }, 400);

  setTimeout(() => {
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    cardOne = cardTwo = "";
    disableDeck = false;
  }, 1200);
}

function shuffleCard() {
  popupBox.classList.remove("active");
  timeLeft = maxTime;
  matched = 0;
  console.log(matched);
  clearInterval(timer);
  timeText.textContent = `남은시간 : ${timeLeft}`;

  disableDeck = isPlaying = false;
  cardOne = cardTwo = "";
  let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
  arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
  //   console.log(arr);
  cards.forEach((card, i) => {
    card.classList.remove("flip");
    let imgTag = card.querySelector(".back-view img");
    imgTag.src = `/img/gameImg/img-${arr[i]}.png`;
    card.addEventListener("click", flipCard);
  });
}

shuffleCard();

refreshBtn.addEventListener("click", shuffleCard);

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});
