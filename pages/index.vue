<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8 text-center text-gray-800">Willkommen bei Bildrechte</h1>
    <p class="text-xl mb-12 text-center text-gray-600">Lerne über Bildrechte, Urheberrechtsgesetze und ethische Überlegungen in der Fotografie.</p>
    <TransitionGroup 
      name="category-list" 
      tag="div" 
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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

// Add dynamic meta tags
useHead({
  title: 'Bildrechte Quiz - Lerne über Urheberrecht und Fotografie',
  meta: [
    {
      name: 'description',
      content: 'Verbessere dein Wissen über Bildrechte, Urheberrechtsgesetze und ethische Überlegungen in der Fotografie mit unserem interaktiven Quiz.'
    },
    {
      name: 'keywords',
      content: 'Bildrechte, Quiz, Urheberrecht, Fotografie, Lernen, Ethik'
    }
  ]
})
</script>

<style scoped>
.category-list-enter-active,
.category-list-leave-active {
  transition: all 0.5s ease;
}
.category-list-enter-from,
.category-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>