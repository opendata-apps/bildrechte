<template>
    <Transition name="fade">
        <div class="fixed inset-0 bg-neutral-900 bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4">
                <p 
                    :class="{ 'text-success-500': isCorrect, 'text-error-500': !isCorrect }"
                    class="text-2xl font-semibold mb-4 flex items-center justify-center"
                >
                    <Icon :name="isCorrect ? 'mdi:check-circle' : 'mdi:close-circle'" class="mr-2" size="1.5em" />
                    {{ isCorrect ? 'Richtig!' : 'Falsch!' }}
                </p>
                <div class="mb-6 text-neutral-700 text-center solution-content" v-html="formattedSolution"></div>
                <button 
                    @click="emit('next')" 
                    class="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-opacity-50"
                >
                    <Icon :name="isLastQuestion ? 'mdi:flag-checkered' : 'mdi:arrow-right'" class="mr-2" />
                    {{ isLastQuestion ? 'Quiz beenden' : 'Nächste Frage' }}
                </button>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
const props = defineProps<{
    isCorrect: boolean;
    solution: string;
    isLastQuestion: boolean;
}>();

const emit = defineEmits(['next']);

const formattedSolution = computed(() => {
    return props.solution.replace(/<a /g, '<a class="text-primary-500 hover:text-primary-600 underline" ');
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease-out;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

.solution-content {
    font-size: 1rem;
    line-height: 1.625;
}

.solution-content :deep(a) {
    transition-property: color;
    transition-duration: 200ms;
}

.solution-content :deep(b) {
    font-weight: 600;
    color: #262626;
}
</style>