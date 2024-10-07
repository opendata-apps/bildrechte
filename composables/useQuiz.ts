import { ref, computed } from 'vue'

export function useQuiz() {
  const questions = ref([])
  const currentQuestion = ref(0)
  const userAnswers = ref([])
  const showFeedback = ref(false)
  const quizFinished = ref(false)
  const showHelpInfo = ref(false)
  const currentLevel = ref(1)

  const currentQuestionData = computed(() => questions.value[currentQuestion.value])
  const isLastQuestion = computed(() => currentQuestion.value === questions.value.length - 1)
  const score = computed(() => {
    return userAnswers.value.filter((answer, index) => 
      answer === questions.value[index].correct_answer
    ).length
  })

  async function loadQuestions(level: number) {
    try {
      const response = await fetch(`/api/questions?level=${level}`)
      questions.value = await response.json()
    } catch (error) {
      console.error('Error loading questions:', error)
    }
  }

  function answerQuestion(answer: string) {
    userAnswers.value.push(answer)
    showFeedback.value = true
  }

  function nextQuestion() {
    showFeedback.value = false
    showHelpInfo.value = false
    if (isLastQuestion.value) {
      if (currentLevel.value < 3) {
        currentLevel.value++
        loadQuestions(currentLevel.value)
        currentQuestion.value = 0
        userAnswers.value = []
      } else {
        quizFinished.value = true
      }
    } else {
      currentQuestion.value++
    }
  }

  function restartQuiz() {
    currentLevel.value = 1
    loadQuestions(currentLevel.value)
    currentQuestion.value = 0
    userAnswers.value = []
    showFeedback.value = false
    showHelpInfo.value = false
    quizFinished.value = false
  }

  function toggleHelpInfo() {
    showHelpInfo.value = !showHelpInfo.value
  }

  return {
    questions,
    currentQuestion,
    userAnswers,
    showFeedback,
    quizFinished,
    showHelpInfo,
    currentLevel,
    currentQuestionData,
    isLastQuestion,
    score,
    loadQuestions,
    answerQuestion,
    nextQuestion,
    restartQuiz,
    toggleHelpInfo
  }
}