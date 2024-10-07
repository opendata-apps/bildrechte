<template>
    <div class="bg-background-50 rounded-2xl p-6">
        <div class="mb-6">
            <div class="h-64 flex items-center justify-center mb-4">
                <NuxtImg v-if="question.image" :src="getImageSrc(question)" :format="'webp'" :alt="question.alt" class="max-w-full max-h-full object-contain rounded-lg shadow-sm" />
            </div>
            <button 
                @click="toggleImageInfo" 
                class="text-primary-500 hover:text-primary-600 font-medium transition duration-200 mb-2"
            >
                {{ showImageInfo ? 'Bildinfo ausblenden' : 'Bildinfo anzeigen' }}
            </button>
            <div v-if="showImageInfo" class="text-sm text-text-400 mb-2">
                <p>Info zum Bild: {{ question.alt }}</p>
                <p>Quelle: <a :href="question.source" target="_blank" rel="noopener noreferrer" class="text-primary-500 hover:underline">{{ question.author || 'Unbekannt' }}</a></p>
                <p>Zuletzt besucht: {{ question.last_visited }}</p>
            </div>
            <p class="text-right text-sm text-text-400 mb-4">Frage {{ currentQuestion + 1 }} von {{ totalQuestions }}</p>
        </div>
        <h2 class="text-xl font-semibold text-text-500 mb-6">{{ question.questions }}</h2>
        <div class="space-y-4">
            <button 
                v-for="(answer, key) in question.answers" 
                :key="key" 
                @click="emit('answer', answer)"
                class="w-full bg-primary-500 hover:bg-primary-600 text-background-50 font-medium py-3 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-opacity-50"
            >
                {{ answer }}
            </button>
        </div>
        <div v-if="question.help_query" class="mt-6">
            <button 
                @click="toggleHelpInfo" 
                class="text-secondary-500 hover:text-secondary-600 font-medium transition duration-200"
            >
                Hilfe
            </button>
            <div v-if="showHelpInfo" class="mt-4 p-4 bg-background-200 rounded-lg">
                <p class="font-semibold text-text-500 mb-2">{{ question.help_query }}</p>
                <p v-html="question.help_answer" class="text-text-400"></p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    question: any;
    currentQuestion: number;
    totalQuestions: number;
    currentLevel: number;
}>()

const emit = defineEmits(['answer', 'toggleHelp'])

const showHelpInfo = ref(false)
const showImageInfo = ref(false)

const toggleHelpInfo = () => {
    showHelpInfo.value = !showHelpInfo.value
    emit('toggleHelp')
}

const toggleImageInfo = () => {
    showImageInfo.value = !showImageInfo.value
}

const getImageSrc = (question: any) => {
    if (!question.image) return ''
    const level = question.level || props.currentLevel
    return `/images/level${level}/${question.image}`
}
</script>