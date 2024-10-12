<template>
  <div class="container mx-auto px-4 py-8 text-text-500 dark:text-text-50">
    <h1 class="text-4xl font-bold mb-8 text-center">Willkommen bei Bildrechte</h1>
    <p class="text-xl mb-12 text-center text-text-400 dark:text-text-100">Lerne über Bildrechte, Urheberrechtsgesetze und ethische Überlegungen in der Fotografie.</p>
    <TransitionGroup 
      tag="div" 
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-8"
      leave-active-class="transition-all duration-500 ease-out"
      leave-to-class="opacity-0 translate-y-8"
    >
      <CategoryCard 
        v-for="category in categories" 
        :key="category.name" 
        :category="category"
      />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
const { categories } = useQuiz()

definePageMeta({
  title: 'Bildrechte Quiz'
})
</script>