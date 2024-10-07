<template>
    <div class="max-w-4xl mx-auto p-4">
        <h2 class="text-xl font-bold mb-2">
            {{ isCorrect ? 'Correct!' : 'Incorrect' }}
        </h2>
        <p class="mb-4">{{ question.solution }}</p>
        <button @click="$emit('next')" class="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Next Question
        </button>
    </div>
</template>

<script setup lang="ts">
import type { QuizQuestion } from '~/types/quiz'

const props = defineProps<{
    question: QuizQuestion
    isCorrect: boolean
}>()

const emit = defineEmits(['next'])
</script>