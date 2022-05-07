document.addEventListener("DOMContentLoaded", () => {
  // returns answers to questions
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

      // calls function
      allQuestionsAndAnswers();

      singleOption.addEventListener("click", () => {
        // change option's bg colour
        if (singleOption.innerHTML === allQuestionsAndAnswers().answer) {
          singleOption.style.backgroundColor = "#3fff00";
        } else {
          singleOption.style.backgroundColor = "#ff0800";
          document.getElementById("optionA").style.backgroundColor = "#3fff00";
        }
      });
    }
  }
  selectedAnswer();

  // clears answer for next question
  function nextQuestion() {
    const nextBtn = document.getElementById("nextBtn");
    const optionA = document.getElementById("optionA");
    const optionB = document.getElementById("optionB");
    const optionC = document.getElementById("optionC");
    const optionD = document.getElementById("optionD");

    nextBtn.addEventListener("click", () => {
      optionA.style.backgroundColor = "#ffffe0";
      optionB.style.backgroundColor = "#ffffe0";
      optionB.style.backgroundColor = "#ffffe0";
      optionC.style.backgroundColor = "#ffffe0";
      optionD.style.backgroundColor = "#ffffe0";
    });
  }
  nextQuestion();
});
