<template>
    <div class="max-w-4xl mx-auto p-4">
        <h1 class="text-3xl font-bold mb-4">Quiz Summary</h1>
        <div v-for="level in 3" :key="level" class="mb-4">
            <h2 class="text-xl font-bold">Level {{ level }}</h2>
            <p>Score: {{ state[`level${level}`].score }} / {{ state[`level${level}`].questions.length }}</p>
        </div>
        <p class="text-xl font-bold">
            Total Score: {{ totalScore }} / {{ totalQuestions }}
        </p>
        <NuxtLink to="/" class="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Start Over
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useQuiz } from '~/composables/useQuiz'

const { state } = useQuiz()

const totalScore = computed(() => {
    return state.level1.score + state.level2.score + state.level3.score
})

const totalQuestions = computed(() => {
    return state.level1.questions.length + state.level2.questions.length + state.level3.questions.length
})
</script>