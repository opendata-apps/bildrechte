<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-4 rounded-lg max-w-md">
            <h3 class="text-lg font-bold mb-2">{{ title }}</h3>
            <p v-html="content"></p>
            <button @click="$emit('close')" class="mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-600">
                Close
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string
    content: string
}>()

const emit = defineEmits(['close'])
</script>