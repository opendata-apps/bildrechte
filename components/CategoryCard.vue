<script setup lang="ts">
const props = defineProps<{
  category: {
    name: string;
    level: number;
    difficulty: string;
    icon?: string;
    description: string;
    questionCount: number;
    estimatedTime: string;
  }
}>()

const difficultyMapping = {
  leicht: {
    icon: 'mdi:star-outline',
    color: 'text-success-500',
    bgColor: 'bg-success-50',
  },
  mittel: {
    icon: 'mdi:star-half',
    color: 'text-accent-500',
    bgColor: 'bg-accent-50',
  },
  schwer: {
    icon: 'mdi:star',
    color: 'text-error-500',
    bgColor: 'bg-error-50',
  },
};

const difficultyProps = computed(() => {
  const defaultProps = {
    icon: 'mdi:star-outline',
    color: 'text-neutral-500',
    bgColor: 'bg-neutral-50',
  };
  return difficultyMapping[props.category.difficulty.toLowerCase()] || defaultProps;
});
</script>

<template>
  <div :class="[difficultyProps.bgColor, 'rounded-lg shadow-md p-6 transition duration-300 h-full flex flex-col']">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-2xl font-bold text-neutral-800 line-clamp-2 flex-grow mr-4">{{ category.name }}</h2>
      <Icon :name="category.icon || 'mdi:book-open-variant'" class="text-3xl text-primary-600 flex-shrink-0" />
    </div>
    <div class="flex items-center mb-4">
      <Icon :name="difficultyProps.icon" :class="[difficultyProps.color, 'mr-2 text-xl']" />
      <span :class="[difficultyProps.color, 'font-semibold']">{{ category.difficulty }}</span>
    </div>
    <p class="text-neutral-600 mb-6 flex-grow line-clamp-3">{{ category.description }}</p>
    <div class="flex justify-between items-center mb-6 text-sm text-neutral-500">
      <span class="flex items-center">
        <Icon name="mdi:help-circle-outline" class="mr-1" />
        {{ category.questionCount }} Fragen
      </span>
      <span class="flex items-center">
        <Icon name="mdi:clock-outline" class="mr-1" />
        {{ category.estimatedTime }}
      </span>
    </div>
    <NuxtLink 
      :to="`/quiz?level=${category.level}`" 
      class="block w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-4 rounded-lg text-center transition duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-opacity-50"
    >
      <div class="flex items-center justify-center">
        <Icon name="mdi:play-circle" class="mr-2 text-xl" />
        <span>Quiz starten</span>
      </div>
    </NuxtLink>
  </div>
</template>