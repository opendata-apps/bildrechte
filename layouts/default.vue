<template>
  <div class="layout">
    <header>
      <h1>Bildrechte (Image Rights)</h1>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <p>&copy; 2024 Bildrechte Educational App</p>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

header {
  background-color: #3498db;
  color: #fff;
  text-align: center;
  padding: 1rem;
  border-radius: 5px 5px 0 0;
}

main {
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 0 0 5px 5px;
}

footer {
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
  background-color: #34495e;
  color: #fff;
  border-radius: 5px;
}
</style>