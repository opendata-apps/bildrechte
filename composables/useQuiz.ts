interface Answer {
  [key: string]: string;
}

interface Question {
  type: string;
  image: string;
  alt: string;
  source: string;
  last_visited: string;
  author: string;
  questions: string;
  answers: Answer;
  given_answer: string;
  correct_answer: string;
  solution: string;
  help_query?: string;
  help_answer?: string;
}

interface Category {
  name: string;
  level: number;
  difficulty: string;
  icon?: string;
  description: string;
  questionCount: number;
  estimatedTime: string;
}

export function useQuiz() {
  const questions = ref<Question[]>([])
  const currentQuestion = ref(0)
  const userAnswers = ref<string[]>([])
  const showFeedback = ref(false)
  const quizFinished = ref(false)
  const showHelpInfo = ref(false)
  const currentLevel = ref(1)
  const currentCategory = ref('Ja oder Nein')

  const categories: Category[] = [
    { 
      name: 'Ja oder Nein', 
      level: 1, 
      difficulty: 'leicht',
      icon: 'mdi:checkbox-marked-circle-outline',
      description: 'Einfache Fragen zu grundlegenden Bildrechten.',
      questionCount: 12,
      estimatedTime: '5-10 Minuten'
    },
    { 
      name: 'Eins von vielen', 
      level: 2, 
      difficulty: 'mittel',
      icon: 'mdi:format-list-bulleted',
      description: 'Mehrere Antwortmöglichkeiten zu komplexeren Bildrechtsfragen.',
      questionCount: 15,
      estimatedTime: '10-15 Minuten'
    },
    { 
      name: 'Paragraphen-Dschungel', 
      level: 3, 
      difficulty: 'schwer',
      icon: 'mdi:gavel',
      description: 'Anspruchsvolle Fragen zu rechtlichen Aspekten der Bildnutzung.',
      questionCount: 10,
      estimatedTime: '15-20 Minuten'
    }
  ]

  const currentQuestionData = computed(() => questions.value[currentQuestion.value])
  const isLastQuestion = computed(() => currentQuestion.value === questions.value.length - 1)
  const score = computed(() => {
    return userAnswers.value.filter((answer, index) => 
      questions.value[index] && answer === questions.value[index].correct_answer
    ).length
  })

  function shuffleArray(array: any[]) {
    return array.sort(() => Math.random() - 0.5);
  }

  async function loadQuestions(level: number) {
    try {
      const response = await fetch(`/api/questions?level=${level}`)
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      const loadedQuestions = await response.json()
      // Add the level to each question and shuffle
      questions.value = shuffleArray(loadedQuestions.map((q: Question) => ({ ...q, level })))
      // Shuffle answers if applicable
      questions.value.forEach((question) => {
        question.answers = shuffleArray(Object.entries(question.answers)).reduce((obj, [key, value]) => {
          obj[key] = value;
          return obj;
        }, {} as Answer);
      })
      currentCategory.value = categories.find(cat => cat.level === level)?.name || ''
      currentLevel.value = level
      currentQuestion.value = 0
      userAnswers.value = []
      showFeedback.value = false
      quizFinished.value = false
    } catch (error) {
      console.error('Error loading questions:', error)
      // Provide user feedback
      alert('Es gab ein Problem beim Laden der Fragen. Bitte versuchen Sie es später erneut.');
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
      quizFinished.value = true
    } else {
      currentQuestion.value++
    }
  }

  function restartQuiz() {
    loadQuestions(currentLevel.value)
  }

  function toggleHelpInfo() {
    showHelpInfo.value = !showHelpInfo.value
  }

  function endQuiz() {
    quizFinished.value = true
  }

  return {
    questions,
    currentQuestion,
    userAnswers,
    showFeedback,
    quizFinished,
    showHelpInfo,
    currentLevel,
    currentCategory,
    categories,
    currentQuestionData,
    isLastQuestion,
    score,
    loadQuestions,
    answerQuestion,
    nextQuestion,
    restartQuiz,
    toggleHelpInfo,
    endQuiz
  }
}