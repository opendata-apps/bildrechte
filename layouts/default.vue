<template>
  <div class="min-h-screen bg-background-500 font-sans">
    <div class="container mx-auto px-4 sm:px-6 md:px-8 py-8">
      <div class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        <!-- Left Sidebar -->
        <div class="w-full md:w-1/3">
          <!-- Logo and Title -->
          <AppLogo />
          <!-- Navigation -->
          <nav class="bg-background-50 rounded-2xl shadow-sm p-6">
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/" class="flex items-center p-2 hover:bg-primary-50 rounded-lg transition duration-300">
                  <Icon name="mdi:home" class="mr-3 text-primary-500" />
                  <span class="text-text-500">Startseite</span>
                </NuxtLink>
              </li>
              <li><hr class="my-4 border-background-200" /></li>
              <li v-for="level in 3" :key="level">
                <NuxtLink :to="`/quiz?level=${level}`" class="flex items-center p-2 hover:bg-primary-50 rounded-lg transition duration-300">
                  <Icon :name="getDifficultyIcon(level)" class="mr-3 text-primary-500" />
                  <span class="text-text-500">{{ getDifficultyText(level) }}</span>
                </NuxtLink>
              </li>
              <li><hr class="my-4 border-background-200" /></li>
              <li>
                <a href="https://secaware4school.wildau.biz" target="_blank" class="flex items-center p-2 hover:bg-primary-50 rounded-lg transition duration-300">
                  <Icon name="mdi:open-in-new" class="mr-3 text-primary-500" />
                  <span class="text-text-500">Projekt-Website</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- Main Content -->
        <div class="w-full md:w-2/3">
          <main class="bg-background-50 rounded-2xl shadow-sm p-6 mb-8">
            <slot />
          </main>
          <!-- Footer -->
          <AppFooter />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const getDifficultyIcon = (level: number) => {
  switch (level) {
    case 1: return 'mdi:star-outline'
    case 2: return 'mdi:star-half'
    case 3: return 'mdi:star'
    default: return 'mdi:star-outline'
  }
}

const getDifficultyText = (level: number) => {
  switch (level) {
    case 1: return 'Ja oder Nein (leicht)'
    case 2: return 'Eins von vielen (mittel)'
    case 3: return 'Paragraphen-Dschungel (schwer)'
    default: return 'Unbekannte Schwierigkeit'
  }
}
</script>

<style scoped>
</style>