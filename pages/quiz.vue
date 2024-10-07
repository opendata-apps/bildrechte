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

const isLoading = ref(true)

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
  isLoading.value = true
  const level = parseInt(route.query.level as string) || 1
  await loadQuestions(level)
  isLoading.value = false
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
  <div>
    <h1 class="text-3xl font-bold mb-6 text-center text-neutral-800">{{ currentCategory.toUpperCase() }}</h1>
    <div v-if="!quizFinished && currentQuestionData && !isLoading">
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
    <div v-else class="flex items-center justify-center h-64">
      <Icon name="mdi:loading" class="animate-spin text-primary-500 text-4xl" />
    </div>
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