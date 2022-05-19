document.addEventListener("DOMContentLoaded", () => {
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
    let timer = 60;
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
      }
    }, 1000);
  }
  countDownTimer();

  // toggles id on modal
  function displayModal() {
    const modal = document.getElementById("modal");
    modal.removeAttribute("id");
  }

  // clears options for next question
  function nextQuestion() {
    const nextBtn = document.getElementById("nextBtn");
    nextBtn.addEventListener("click", () => {
      // removes modal
      displayModal();

      // brings back clicking ability
      document.getElementById("bodyId").style.pointerEvents = "auto";

      // choices arr via classes
      const choicesArr = document.getElementsByClassName("options");

      // clears answer colours
      for (let i = 0; i < choicesArr.length; i++) {
        choicesArr[i].removeAttribute("id");
      }

      // // increments to move to next question
      // let questionCounter = 0;
      // if (questionCounter < entireQuestionObjArr().length) {
      //   questionCounter += 1;
      //   console.log(questionCounter);
      // }
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
    // for increasing scores
    const scoreHTML = document.getElementById("score");
    let incrementScore = 0;

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
          scoreHTML.innerText = incrementScore;
          console.log(incrementScore);
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
