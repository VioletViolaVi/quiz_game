document.addEventListener('DOMContentLoaded', () => {

  // gets selected choice
  const selectedAnswer = () => {
    // options arr
    const allOptionsArr = document.getElementsByClassName('options')

    // selects 1 by 1
    for (let i = 0; i < allOptionsArr.length; i++) {
      const singleOption = allOptionsArr[i]

      singleOption.addEventListener('click', () => {
        console.log(singleOption.innerHTML)
      })
    }
  }
  selectedAnswer();


















  // questions & answers obj
  /*const questionAndAnswer = {
    question: 'What colour added to yellow makes green?',
    answer: 'blue',
  }*/

  /*// gets 1st choice
  const optionA = document.getElementById('optionA')
  optionA.addEventListener('click', () => {
    console.log(optionA.innerText)
  })

  // gets 2nd choice
  const optionB = document.getElementById('optionB')
  optionB.addEventListener('click', () => {
    console.log(optionB.innerText)
  })

  // gets 3rd choice
  const optionC = document.getElementById('optionC')
  optionC.addEventListener('click', () => {
    console.log(optionC.innerText)
  })

  // gets 4th choice
  const optionD = document.getElementById('optionD')
  optionD.addEventListener('click', () => {
    console.log(optionD.innerText)
  }) */
})
