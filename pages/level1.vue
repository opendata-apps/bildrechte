<template>
    <div>
        <h1 class="text-2xl font-bold mb-4">Level 1: Basic Questions</h1>
        <ProgressBar :current="state.level1.currentQuestionIndex" :total="state.level1.questions.length" />
        <template v-if="currentQuestion">
            <QuizQuestion v-if="!showFeedback" :question="currentQuestion" @answer="handleAnswer" />
            <QuizFeedback v-else :question="currentQuestion"
                :is-correct="currentQuestion.given_answer === currentQuestion.correct_answer" @next="nextQuestion" />
        </template>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useQuiz } from '~/composables/useQuiz'

const { state, loadQuestions, answerQuestion } = useQuiz()
const showFeedback = ref(false)

const currentQuestion = computed(() => {
    return state.level1.questions[state.level1.currentQuestionIndex]
})

const handleAnswer = (answer: string) => {
    answerQuestion(answer)
    showFeedback.value = true
}

const nextQuestion = () => {
    showFeedback.value = false
    if (state.level1.currentQuestionIndex >= state.level1.questions.length) {
        navigateTo('/level2')
    }
}

onMounted(async () => {
    await loadQuestions(1)
})
</script>