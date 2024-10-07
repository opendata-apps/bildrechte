<template>
    <div class="max-w-4xl mx-auto p-4">
        <h1 class="text-3xl font-bold mb-4">Bildrechte (Image Rights) Quiz</h1>
        <p class="mb-4">Test your knowledge about image rights and copyright laws.</p>
        <button @click="startQuiz" class="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Start Quiz
        </button>
    </div>
</template>

<script setup lang="ts">
const startQuiz = () => {
    navigateTo('/level1')
}
</script>