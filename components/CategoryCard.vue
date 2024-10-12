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
    color: 'text-success-500 dark:text-success-400',
    bgColor: 'bg-success-50 dark:bg-success-800',
  },
  mittel: {
    icon: 'mdi:star-half',
    color: 'text-accent-500 dark:text-accent-400',
    bgColor: 'bg-accent-50 dark:bg-accent-800',
  },
  schwer: {
    icon: 'mdi:star',
    color: 'text-error-500 dark:text-error-400',
    bgColor: 'bg-error-50 dark:bg-error-800',
  },
};

const difficultyProps = computed(() => {
  const defaultProps = {
    icon: 'mdi:star-outline',
    color: 'text-text-500 dark:text-text-300',
    bgColor: 'bg-background-200 dark:bg-dark-accent',
  };
  return difficultyMapping[props.category.difficulty.toLowerCase() as keyof typeof difficultyMapping] || defaultProps;
});
</script>

<template>
  <div :class="[difficultyProps.bgColor, 'rounded-lg shadow-md p-6 transition duration-300 h-full flex flex-col dark:shadow-none']">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-2xl font-bold text-text-800 dark:text-text-50 line-clamp-2 flex-grow mr-4">{{ category.name }}</h2>
      <Icon :name="category.icon || 'mdi:book-open-variant'" class="text-3xl text-primary-600 dark:text-primary-400 flex-shrink-0" />
    </div>
    <div class="flex items-center mb-4">
      <Icon :name="difficultyProps.icon" :class="[difficultyProps.color, 'mr-2 text-xl']" />
      <span :class="[difficultyProps.color, 'font-semibold']">{{ category.difficulty }}</span>
    </div>
    <p class="text-text-600 dark:text-text-100 mb-6 flex-grow line-clamp-3">{{ category.description }}</p>
    <div class="flex justify-between items-center mb-6 text-sm text-text-500 dark:text-text-100">
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
      class="block w-full bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-background-50 dark:text-background-50 font-bold py-3 px-4 rounded-lg text-center transition duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-opacity-50"
    >
      <div class="flex items-center justify-center">
        <Icon name="mdi:play-circle" class="mr-2 text-xl" />
        <span>Quiz starten</span>
      </div>
    </NuxtLink>
  </div>
</template>