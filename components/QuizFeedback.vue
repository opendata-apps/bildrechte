<template>
    <Transition
        enter-active-class="transition-all duration-500 ease-out"
        enter-from-class="opacity-0 translate-y-5"
        leave-active-class="transition-all duration-500 ease-out"
        leave-to-class="opacity-0 translate-y-5"
    >
        <div class="fixed inset-0 bg-neutral-900/50 dark:bg-dark-background/75 flex items-center justify-center z-50">
            <div class="bg-background-50 dark:bg-dark-accent rounded-lg shadow-lg p-6 max-w-md w-full mx-4">
                <p 
                    :class="[
                        'text-2xl font-semibold mb-4 flex items-center justify-center',
                        isCorrect ? 'text-success-500 dark:text-success-400' : 'text-error-500 dark:text-error-400'
                    ]"
                >
                    <Icon :name="isCorrect ? 'mdi:check-circle' : 'mdi:close-circle'" class="mr-2" size="1.5em" />
                    {{ isCorrect ? 'Richtig!' : 'Falsch!' }}
                </p>
                <div class="mb-6 text-text-500 dark:text-text-50 text-center text-base leading-relaxed" v-html="formattedSolution" />
                <button 
                    @click="emit('next')" 
                    class="w-full bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-background-50 font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-opacity-50"
                >
                    <Icon :name="isLastQuestion ? 'mdi:flag-checkered' : 'mdi:arrow-right'" class="mr-2" />
                    {{ isLastQuestion ? 'Quiz beenden' : 'Nächste Frage' }}
                </button>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
interface Props {
    isCorrect: boolean;
    solution: string;
    isLastQuestion: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
    (e: 'next'): void
}>();

const formattedSolution = computed(() => {
    return props.solution.replace(
        /<a /g,
        '<a class="text-primary-500 hover:text-primary-600 underline transition-colors duration-200" '
    ).replace(
        /<b>/g,
        '<b class="font-semibold text-neutral-800 dark:text-neutral-200">'
    );
});
</script>
