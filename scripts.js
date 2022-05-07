document.addEventListener('DOMContentLoaded', () => {
  // gets selected choice
  const selectedAnswer = () => {
    // options arr
    const allOptionsArr = document.getElementsByClassName('options')

    // selects 1 by 1
    for (let i = 0; i < allOptionsArr.length; i++) {
      // single option
      const singleOption = allOptionsArr[i]

      // answers to questions
      const questionAndAnswer = {
        question: 'What colour added to yellow makes green?',
        answer: 'blue',
      }

      singleOption.addEventListener('click', () => {
        // change option's bg colour
        if (singleOption.innerHTML === questionAndAnswer.answer) {
          singleOption.style.backgroundColor = '#3fff00'
        } else {
          singleOption.style.backgroundColor = '#ff0800'
        }
      })
    }
  }
  selectedAnswer()

  // clears answer for next question
  const nextQuestion = () => {
    const nextBtn = document.getElementById('nextBtn')
    const optionA = document.getElementById('optionA')
    const optionB = document.getElementById('optionB')
    const optionC = document.getElementById('optionC')
    const optionD = document.getElementById('optionD')

    nextBtn.addEventListener('click', () => {
      optionA.style.backgroundColor = '#ffffe0'
      optionB.style.backgroundColor = '#ffffe0'
      optionB.style.backgroundColor = '#ffffe0'
      optionC.style.backgroundColor = '#ffffe0'
      optionD.style.backgroundColor = '#ffffe0'
    })
  }
  nextQuestion()
})
