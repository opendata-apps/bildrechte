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

definePageMeta({
  title: 'Bildrechte Quiz'
})
</script>

<template>
  <div class="text-text-500 dark:text-text-50">
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
      <Transition
        enter-active-class="transition-opacity duration-500 ease-out"
        enter-from-class="opacity-0"
        leave-active-class="transition-opacity duration-500 ease-out"
        leave-to-class="opacity-0"
      >
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