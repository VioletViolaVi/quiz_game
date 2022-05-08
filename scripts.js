document.addEventListener("DOMContentLoaded", () => {
  // options by id
  const optionA = document.getElementById("optionA");
  const optionB = document.getElementById("optionB");
  const optionC = document.getElementById("optionC");
  const optionD = document.getElementById("optionD");

  // stores answers & questions
  function allQuestionsAndAnswers() {
    const questionAndAnswer = {
      question: "What colour added to yellow makes green?",
      answer: "blue",
    };
    return questionAndAnswer;
  }

  // gets selected choice
  function selectedAnswer() {
    // stores arr of options
    const allOptionsArr = document.getElementsByClassName("options");

    // selects 1 option
    for (let i = 0; i < allOptionsArr.length; i++) {
      // single option
      const singleOption = allOptionsArr[i];

      // calls obj function
      allQuestionsAndAnswers();

      singleOption.addEventListener("click", () => {
        // change option's bg colour
        if (singleOption.innerHTML === allQuestionsAndAnswers().answer) {
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

  function nextQuestion() {
    nextBtn.addEventListener("click", () => {
      // clears answer colours for next question
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
});
