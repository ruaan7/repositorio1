const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  while($answersContainer.firstChild){
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")

  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}


const questions = [
  {
    question: "p1",
    answers: [
      { text: "a", correct: false },
      { text: "b", correct: false },
      { text: "c", correct: true },
      { text: "d", correct: false }
    ]
  },
  { 
    question: "p2",
    answers: [
      { text: "a", correct: false },
      { text: "b", correct: false },
      { text: "c", correct: true },
      { text: "d", correct: false }
    ]
  },
  {
    question: "p3",
    answers: [
      { text: "a", correct: false },
      { text: "b", correct: false },
      { text: "c", correct: true },
      { text: "d", correct: false }
    ]
  },
  {
    question: "p4",
    answers: [
      { text: "a", correct: false },
      { text: "b", correct: false },
      { text: "c", correct: true },
      { text: "d", correct: false }
    ]
  },
  {
    question: "p4",
    answers: [
      { text: "a", correct: false },
      { text: "b", correct: false },
      { text: "c", correct: true },
      { text: "d", correct: false }
    ]
  },
  {
    question: "p5",
    answers: [
      { text: "a", correct: false },
      { text: "b", correct: false },
      { text: "c", correct: true },
      { text: "d", correct: false }
    ]
  } 
]