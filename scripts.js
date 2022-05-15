document.addEventListener("DOMContentLoaded", () => {
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

  // clears options for next question
  function nextQuestion() {
    nextBtn.addEventListener("click", () => {
      // clears answer colours
      optionA.style.backgroundColor = "#ffffe0";
      optionB.style.backgroundColor = "#ffffe0";
      optionB.style.backgroundColor = "#ffffe0";
      optionC.style.backgroundColor = "#ffffe0";
      optionD.style.backgroundColor = "#ffffe0";

      // brings back clicking ability
      optionA.style.pointerEvents = "auto";
      optionB.style.pointerEvents = "auto";
      optionC.style.pointerEvents = "auto";
      optionD.style.pointerEvents = "auto";
    });
  }
  nextQuestion();

  // options by id
  const optionA = document.getElementById("optionA");
  const optionB = document.getElementById("optionB");
  const optionC = document.getElementById("optionC");
  const optionD = document.getElementById("optionD");

  // stores answers & questions
  const questionObjArr = [
    {
      id: 1,
      question: "What colour added to yellow makes green?",
      answer: "d",
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
      answer: "b",
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
      answer: "d",
      choices: {
        a: 34,
        b: 7,
        c: 65,
        d: 12,
      },
    },
    {
      id: 4,
      question: "What is the square root of 676?",
      answer: "c",
      choices: {
        a: 24,
        b: 22,
        c: 26,
        d: 20,
      },
    },
    {
      id: 5,
      question: "Which is the largest planet in the solar system?",
      answer: "a",
      choices: {
        a: "Jupiter",
        b: "Pluto",
        c: "Earth",
        d: "Mars",
      },
    },
  ];

  function buildQuiz() {
    // stores question
    const theQuestion = [];

    // stores arr of possible answers arr
    const arrOfChoicesArr = [];

    // for each question object
    questionObjArr.forEach((currentQuestionObj) => {
      // add to html
      theQuestion.push(`${currentQuestionObj.question}`);

      // combine output & put on html page
      const questionContainer = document.getElementById("questionContainer");
      questionContainer.innerText = theQuestion[0];

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
      choicesContainer.innerHTML = arrOfChoicesArr[0];

      // console.log(possibleAnswers);
      arrOfChoicesArr.push(possibleAnswers.join(""));
    });
  }
  buildQuiz();

  /*
  // gets selected choice
  function selectedAnswer() {
    // stores arr of options
    const allOptionsArr = document.getElementsByClassName("options");

    // selects 1 option
    for (let i = 0; i < allOptionsArr.length; i++) {
      // single option
      const singleOption = allOptionsArr[i];

      // calls obj function
      allQuestions();
      console.log(allQuestions()[0].answer);
      console.log(singleOption.innerHTML);
      console.log(
        singleOption.innerHTML === allQuestions()[0].answer
      );

      singleOption.addEventListener("click", () => {
        // change option's bg colour
        if (singleOption.innerHTML === allQuestions()[0].answer) {
          // right answer
          singleOption.style.backgroundColor = "#3fff00";
        } else {
          // wrong answer
          singleOption.style.backgroundColor = "#ff0800";
          optionA.style.backgroundColor = "#3fff00";
        }

        // turn off clicking
        optionA.style.pointerEvents = "none";
        optionB.style.pointerEvents = "none";
        optionC.style.pointerEvents = "none";
        optionD.style.pointerEvents = "none";
      });
    }
  }
  selectedAnswer();
  */
});
