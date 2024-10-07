<script setup lang="ts">
const {
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
} = useQuiz()

onMounted(async () => {
  await loadQuestions(currentLevel.value)
})
</script>

<template>
  <div class="quiz">
    <div v-if="!quizFinished && currentQuestionData" class="question-container">
      <h2>Level {{ currentLevel }} - Frage {{ currentQuestion + 1 }} von {{ questions.length }}</h2>
      <img v-if="currentQuestionData.image" :src="`/images/level${currentLevel}/${currentQuestionData.image}`"
        :alt="currentQuestionData.alt" class="question-image">
      <p class="question-text">{{ currentQuestionData.questions }}</p>
      <div v-if="!showFeedback" class="options">
        <button v-for="(answer, key) in currentQuestionData.answers" :key="key" @click="answerQuestion(answer)"
          class="option-button">
          {{ answer }}
        </button>
      </div>
      <div v-if="currentQuestionData.help_query" class="help-info">
        <button @click="toggleHelpInfo" class="help-button">Hilfe</button>
        <div v-if="showHelpInfo" class="help-text">
          <p><strong>{{ currentQuestionData.help_query }}</strong></p>
          <p v-html="currentQuestionData.help_answer"></p>
        </div>
      </div>
      <div v-if="showFeedback" class="feedback">
        <p
          :class="{ 'correct': userAnswers[currentQuestion] === currentQuestionData.correct_answer, 'incorrect': userAnswers[currentQuestion] !== currentQuestionData.correct_answer }">
          {{ userAnswers[currentQuestion] === currentQuestionData.correct_answer ? 'Richtig!' : 'Falsch!' }}
        </p>
        <p v-html="currentQuestionData.solution"></p>
        <button @click="nextQuestion" class="next-button">
          {{ isLastQuestion ? (currentLevel < 3 ? 'Nächstes Level' : 'Quiz beenden') : 'Nächste Frage' }} </button>
      </div>
    </div>
    <div v-else-if="quizFinished" class="results">
      <h2>Quiz beendet!</h2>
      <p>Dein Ergebnis: {{ score }} von {{ questions.length * 3 }} Fragen richtig beantwortet.</p>
      <button @click="restartQuiz" class="restart-button">Quiz neu starten</button>
    </div>
    <div v-else class="loading">
      <p>Lade Fragen...</p>
    </div>
  </div>
</template>

<style scoped>
.quiz {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.question-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.question-image {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.question-text {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.option-button,
.help-button,
.next-button,
.restart-button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.option-button:hover,
.help-button:hover,
.next-button:hover,
.restart-button:hover {
  background-color: #45a049;
}

.help-info {
  margin-top: 1rem;
  width: 100%;
}

.help-text {
  background-color: #f1f1f1;
  padding: 1rem;
  border-radius: 5px;
  margin-top: 0.5rem;
}

.feedback {
  margin-top: 1rem;
  text-align: center;
}

.correct {
  color: #4CAF50;
  font-weight: bold;
}

.incorrect {
  color: #f44336;
  font-weight: bold;
}

.results {
  text-align: center;
}

@media (max-width: 600px) {
  .quiz {
    padding: 1rem;
  }

  .option-button,
  .help-button,
  .next-button,
  .restart-button {
    padding: 10px 20px;
  }
}
</style>