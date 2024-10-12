<template>
  <div class="min-h-screen bg-background-500 dark:bg-dark-background font-sans">
    <div class="container mx-auto px-4 sm:px-6 md:px-8 py-8">
      <div class="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        <!-- Left Sidebar -->
        <aside class="w-full lg:w-1/3">
          <!-- Logo and Title -->
          <AppLogo />
          <!-- Navigation -->
          <nav aria-label="Main Navigation" class="bg-background-50 dark:bg-dark-accent rounded-2xl shadow-sm p-6 mb-8 lg:mb-0">
            <ul class="flex flex-wrap lg:flex-col space-x-2 lg:space-x-0 space-y-0 lg:space-y-2 sm:justify-center">
              <li class="w-full sm:w-auto sm:m-2">
                <NuxtLink to="/" class="flex items-center p-2 hover:bg-primary-50 dark:hover:bg-primary-900 rounded-lg transition duration-300">
                  <Icon name="mdi:home" class="mr-3 text-primary-500 dark:text-primary-400" aria-hidden="true" />
                  <span class="text-text-500 dark:text-text-200">Startseite</span>
                </NuxtLink>
              </li>
              <li class="w-full hidden lg:block">
                <hr class="my-4 border-background-200 dark:border-background-700" aria-hidden="true" />
              </li>
              <li v-for="level in 3" :key="level" class="w-full sm:w-auto sm:m-2">
                <NuxtLink :to="`/quiz?level=${level}`" class="flex items-center p-2 hover:bg-primary-50 dark:hover:bg-primary-900 rounded-lg transition duration-300">
                  <Icon :name="getDifficultyIcon(level)" class="mr-3 text-primary-500 dark:text-primary-400" aria-hidden="true" />
                  <span class="text-text-500 dark:text-text-200">{{ getDifficultyText(level) }}</span>
                </NuxtLink>
              </li>
              <li class="w-full hidden lg:block">
                <hr class="my-4 border-background-200 dark:border-background-700" aria-hidden="true" />
              </li>
              <li class="w-full sm:w-auto sm:m-2">
                <a href="https://secaware4school.wildau.biz" target="_blank" rel="noopener noreferrer" class="flex items-center p-2 hover:bg-primary-50 dark:hover:bg-primary-900 rounded-lg transition duration-300">
                  <Icon name="mdi:open-in-new" class="mr-3 text-primary-500 dark:text-primary-400" aria-hidden="true" />
                  <span class="text-text-500 dark:text-text-200">Projekt-Website</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <!-- Main Content -->
        <div class="w-full lg:w-2/3">
          <main id="main-content" class="bg-background-50 dark:bg-dark-accent rounded-2xl shadow-sm p-6 mb-8">
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
const getDifficultyIcon = (level: number): string => {
  const icons = {
    1: 'mdi:star-outline',
    2: 'mdi:star-half',
    3: 'mdi:star'
  };
  return icons[level as keyof typeof icons] || 'mdi:star-outline';
};

const getDifficultyText = (level: number): string => {
  const texts = {
    1: 'Ja oder Nein (leicht)',
    2: 'Eins von vielen (mittel)',
    3: 'Paragraphen-Dschungel (schwer)'
  };
  return texts[level as keyof typeof texts] || 'Unbekannte Schwierigkeit';
};

defineOgImageComponent('NuxtSeo', {
  title: 'Bildrechte Quiz',
  borderColor: 'primary-500',
})
</script>