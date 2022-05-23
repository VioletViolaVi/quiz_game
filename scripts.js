document.addEventListener("DOMContentLoaded", () => {
  // initial score
  let incrementScore = 0;

  // stores answers & questions
  function entireQuestionObjArr() {
    const questionObjArr = [
      {
        id: 1,
        question: "What colour added to yellow makes green?",
        answer: "blue",
        choices: {
          a: "brown",
          b: "orange",
          c: "red",
          d: "blue",
        },
      },
      {
        id: 2,
        question: "What is the largest country in Asia?",
        answer: "China",
        choices: {
          a: "Singapore",
          b: "China",
          c: "Thailand",
          d: "Japan",
        },
      },
      {
        id: 3,
        question: "How many eggs are in a dozen?",
        answer: 12,
        choices: {
          a: 34,
          b: 7,
          c: 65,
          d: 12,
        },
      },
      {
        id: 4,
        question: "Which is the largest planet in the solar system?",
        answer: "Jupiter",
        choices: {
          a: "Jupiter",
          b: "Pluto",
          c: "Earth",
          d: "Mars",
        },
      },
      {
        id: 5,
        question: "What is the square root of 676?",
        answer: 26,
        choices: {
          a: 24,
          b: 22,
          c: 26,
          d: 20,
        },
      },
    ];
    return questionObjArr;
  }

  // countdown timer
  function countDownTimer() {
    let timer = 5;
    const htmlTimer = document.getElementById("htmlTimer");

    // counts down
    const movingTimer = setInterval(() => {
      timer -= 1;
      htmlTimer.innerHTML = timer;

      // last 10 secs changes to red
      if (timer <= 10) {
        htmlTimer.style.color = "#ff0800";
      }

      // stops counting @ 0
      if (timer === 0) {
        clearInterval(movingTimer);
        htmlTimer.style.color = "#1c2841";
        showRestartModal();
        timer = 60;
      }
    }, 1000);
  }

  // removes start modal
  function removeStartModal() {
    const startBtn = document.getElementById("startBtn");

    startBtn.addEventListener("click", () => {
      // takes modal away
      document.getElementById("startModalBg").style.display = "none";

      // starts timer
      countDownTimer();
    });
  }
  removeStartModal();

  // shows restart modal
  function showRestartModal() {
    document.getElementById("restartModalBg").style.display = "block";
  }

  // removes restart modal
  function removeRestartModal() {
    const restartBtn = document.getElementById("restartBtn");

    // removes modal on click
    restartBtn.addEventListener("click", () => {
      document.getElementById("restartModalBg").style.display = "none";

      // restarts timer
      countDownTimer();

      // resets scores
      incrementScore = 0;
      document.getElementById("scoreInModal").innerText = 0;
      document.getElementById("scoreInFooter").innerText = 0;
    });
  }
  removeRestartModal();

  // clears options for next question
  function nextQuestion() {
    const nextBtn = document.getElementById("nextBtn");
    nextBtn.addEventListener("click", () => {
      // brings back clicking ability
      document.getElementById("bodyId").style.pointerEvents = "auto";

      // choices arr via classes
      const choicesArr = document.getElementsByClassName("options");

      // clears answer colours
      for (let i = 0; i < choicesArr.length; i++) {
        choicesArr[i].removeAttribute("id");
      }
    });
  }
  nextQuestion();

  // main part of game
  function buildQuiz() {
    // stores question
    const theQuestion = [];

    // stores arr of possible answers arr
    const arrOfChoicesArr = [];

    // for each question object
    entireQuestionObjArr().forEach((currentQuestionObj) => {
      // add to html
      theQuestion.push(`${currentQuestionObj.question}`);

      // combine output & put on html page
      const questionContainer = document.getElementById("questionContainer");
      questionContainer.innerText = theQuestion[3]; // index num needs dynamically changing

      // stores possible answers
      const possibleAnswers = [];

      // for each possible answer
      for (const aBCOrDKey in currentQuestionObj.choices) {
        // add to html
        possibleAnswers.push(
          `<li class="options">${currentQuestionObj.choices[aBCOrDKey]}</li>`
        );
      }

      // combine output & put on html page
      const choicesContainer = document.getElementById("choicesContainer");
      choicesContainer.innerHTML = arrOfChoicesArr[3]; // index num needs dynamically changing

      // console.log(possibleAnswers);
      arrOfChoicesArr.push(possibleAnswers.join(""));
    });
  }
  buildQuiz();

  // displays wrong & right answers
  function checkForCorrectAnswer() {
    // choices arr via classes
    const choicesArr = document.getElementsByClassName("options");

    // modal score
    const scoreInModal = document.getElementById("scoreInModal");

    // for increasing scores
    const scoreHTML = document.getElementById("scoreInFooter");

    // checking if clicked choice is correct via iterating through choices arr
    for (let i = 0; i < choicesArr.length; i++) {
      const selectedChoice = choicesArr[i];
      selectedChoice.addEventListener("click", function () {
        if (
          selectedChoice.innerText.toLowerCase() ===
          entireQuestionObjArr()[3].answer.toLowerCase() // index num needs dynamically changing
        ) {
          // increase score
          incrementScore += 1;
          // shows score in both score locations
          scoreHTML.innerText = incrementScore;
          scoreInModal.innerText = incrementScore;

          // change colour if right
          selectedChoice.id = "correct";
          // remove clicking ability except for next btn
          document.getElementById("bodyId").style.pointerEvents = "none";
          document.getElementById("nextBtn").style.pointerEvents = "auto";
        } else {
          // change colour if wrong
          selectedChoice.id = "wrong";
          // remove clicking ability except for next btn
          document.getElementById("bodyId").style.pointerEvents = "none";
          document.getElementById("nextBtn").style.pointerEvents = "auto";
        }
      });
    }
  }
  checkForCorrectAnswer();
});
