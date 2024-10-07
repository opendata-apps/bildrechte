<template>
    <div class="max-w-4xl mx-auto p-4">
        <img :src="`${question.image}`" :alt="question.alt" class="w-full h-64 object-cover mb-4" />
        <h2 class="text-xl font-bold mb-2">{{ question.questions }}</h2>
        <div v-if="question.type === 'yes-no'" class="space-y-2">
            <button v-for="(answer, key) in question.answers" :key="key" @click="$emit('answer', answer)"
                class="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                {{ answer }}
            </button>
        </div>
        <div v-else-if="question.type === 'radio'" class="space-y-2">
            <button v-for="(answer, key) in question.answers" :key="key" @click="$emit('answer', answer)"
                class="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-left">
                {{ answer }}
            </button>
        </div>
        <div class="mt-4 text-sm text-gray-600">
            <p>Source: {{ question.source }}</p>
            <p>Author: {{ question.author }}</p>
            <p>Last visited: {{ question.last_visited }}</p>
        </div>
        <button v-if="question.help_query" @click="showHelp = true"
            class="mt-4 p-2 bg-green-500 text-white rounded hover:bg-green-600">
            Need help?
        </button>
        <InfoPopup v-if="showHelp && question.help_query && question.help_answer" :title="question.help_query"
            :content="question.help_answer" @close="showHelp = false" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { QuizQuestion } from '~/types/quiz'

const props = defineProps<{
    question: QuizQuestion
}>()

const emit = defineEmits(['answer'])

const showHelp = ref(false)
</script>