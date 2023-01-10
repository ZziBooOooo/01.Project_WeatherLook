const cards = document.querySelectorAll(".card");
const refreshBtn = document.querySelector("#popupBox button");

let maxTime = 2;
let matched = 0;
let cardOne, cardTwo, timer;
let disableDeck = false;
let timeLeft = maxTime;
isPlaying = false;

function initTimer() {
  if (timeLeft <= 0) {
    stopGame();
    return clearInterval(timer);
  }
  timeLeft--;
  timeText.textContent = `남은시간 : ${timeLeft}`;
}
function stopGame(matched) {
  console.log("test");
  resultText.textContent = `You Lose! 😢 `;
  popupBox.classList.add("active");
  if (matched == 6) {
    resultText.textContent = `You Win! 😊 `;
  }
}

function flipCard({ target: clickedCard }) {
  //   console.log({ target: clickedCard });
  //   console.log(clickedCard);

  if (!isPlaying) {
    isPlaying = true;
    timer = setInterval(initTimer, 1000);
  }
  if (clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
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
    console.log(matched);

    if (matched == 6 && timeLeft > 0) {
      stopGame(matched);
      return clearInterval(timer);
    }
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne = cardTwo = "";
    return (disableDeck = false);
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
  cardOne = cardTwo = "";
  clearInterval(timer);
  timeText.textContent = `남은시간 : ${timeLeft}`;
  disableDeck = isPlaying = false;

  let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
  arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
  //   console.log(arr);

  cards.forEach((card, i) => {
    card.classList.remove("flip");
    let imgTag = card.querySelector(".back-view img");
    setTimeout(() => {
      imgTag.src = `../img/gameImg/img-${arr[i]}.png`;
    }, 500);
    card.addEventListener("click", flipCard);
  });
}

shuffleCard();

refreshBtn.addEventListener("click", shuffleCard);

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});
