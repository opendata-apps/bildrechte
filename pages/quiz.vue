<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const {
  questions,
  currentQuestion,
  userAnswers,
  showFeedback,
  quizFinished,
  currentLevel,
  currentCategory,
  currentQuestionData,
  isLastQuestion,
  score,
  loadQuestions,
  answerQuestion,
  nextQuestion,
  restartQuiz,
  toggleHelpInfo,
  endQuiz
} = useQuiz()

// Add dynamic meta tags
useHead(() => ({
  title: `${currentCategory.value.toUpperCase()} - Bildrechte Quiz`,
  meta: [
    {
      name: 'description',
      content: `Teste dein Wissen im Bereich ${currentCategory.value} mit unserem interaktiven Quiz. Lerne mehr über Bildrechte und Urheberrecht.`
    },
    {
      name: 'keywords',
      content: `Bildrechte, Quiz, ${currentCategory.value}, Urheberrecht, Fotografie, Lernen`
    }
  ]
}))

const loadQuizQuestions = async () => {
  const level = parseInt(route.query.level as string) || 1
  await loadQuestions(level)
}

onMounted(loadQuizQuestions)

watch(() => route.query.level, loadQuizQuestions)

function handleNextQuestion() {
  if (isLastQuestion.value) {
    endQuiz()
  } else {
    nextQuestion()
  }
}

function handleRestartQuiz() {
  restartQuiz()
  router.push({ path: '/' })
}
</script>

<template>
  <div class=" text-text-500 dark:text-text-50">
    <h1 class="text-3xl font-bold mb-6 text-center text-text-500 dark:text-text-50">{{ currentCategory.toUpperCase() }}</h1>
    <div v-if="!quizFinished && currentQuestionData">
      <QuizQuestion 
        :question="currentQuestionData" 
        :currentQuestion="currentQuestion" 
        :totalQuestions="questions.length"
        :currentLevel="currentLevel"
        @answer="answerQuestion"
        @toggleHelp="toggleHelpInfo"
      />
      <Transition name="fade">
        <QuizFeedback 
          v-if="showFeedback"
          :isCorrect="userAnswers[currentQuestion] === currentQuestionData.correct_answer"
          :solution="currentQuestionData.solution"
          :isLastQuestion="isLastQuestion"
          @next="handleNextQuestion"
        />
      </Transition>
    </div>
    <QuizResult
      v-else-if="quizFinished"
      :score="score"
      :questions="questions"
      :userAnswers="userAnswers"
      @restart="handleRestartQuiz"
    />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>