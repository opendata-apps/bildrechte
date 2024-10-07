<template>
  <div class="bg-white rounded-2xl p-8 text-center max-w-2xl mx-auto">
    <div class="mb-8">
      <Icon name="mdi:trophy" class="text-6xl text-accent-500 mb-4 animate-bounce" />
      <h2 class="text-4xl font-bold mb-2 text-primary-800">Quiz beendet!</h2>
      <p class="text-xl text-neutral-600">Großartige Leistung!</p>
    </div>
    <div class="bg-primary-50 rounded-xl p-6 mb-8">
      <p class="text-2xl font-semibold text-primary-800">Dein Ergebnis</p>
      <div class="flex items-center justify-center mt-4">
        <span class="text-5xl font-bold text-accent-500">{{ score }}</span>
        <span class="text-2xl text-neutral-600 mx-2">/</span>
        <span class="text-3xl font-semibold text-neutral-700">{{ questions.length }}</span>
      </div>
      <p class="text-neutral-600 mt-2">Fragen richtig beantwortet</p>
      <p class="text-neutral-600 mt-2">Prozentsatz: {{ (score / questions.length * 100).toFixed(2) }}%</p>
    </div>
    <div class="mb-8">
      <h3 class="text-2xl font-semibold text-primary-800 mb-4">Fragen-Übersicht</h3>
      <ul class="space-y-2">
        <li v-for="(question, index) in questions" :key="index" class="flex items-center">
          <Icon :name="userAnswers[index] === question.correct_answer ? 'mdi:check-circle' : 'mdi:close-circle'" 
                :class="userAnswers[index] === question.correct_answer ? 'text-success-500' : 'text-error-500'"
                class="mr-2" />
          <span class="text-neutral-700">Frage {{ index + 1 }}: {{ userAnswers[index] === question.correct_answer ? 'Richtig' : 'Falsch' }}</span>
        </li>
      </ul>
    </div>
    <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
      <button @click="$emit('restart')" class="font-bold py-3 px-6 rounded-full transition duration-300 flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600 transform hover:scale-105">
        <Icon name="mdi:refresh" class="mr-2" />
        Quiz neu starten
      </button>
      <NuxtLink to="/" class="font-bold py-3 px-6 rounded-full transition duration-300 flex items-center justify-center bg-gray-200 text-gray-800 hover:bg-gray-300 transform hover:scale-105">
        <Icon name="mdi:home" class="mr-2" />
        Zurück zur Startseite
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import confetti from 'canvas-confetti';

const props = defineProps<{
  score: number;
  questions: any[];
  userAnswers: string[];
}>();

defineEmits(['restart']);

onMounted(() => {
  fireConfetti();
});

function fireConfetti() {
  var end = Date.now() + (15 * 1000);

  var colors = ['#f97316', '#0ea5e9'];

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}
</script>

<style scoped>
.animate-bounce {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>