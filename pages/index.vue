<template>
  <div class="home">
    <h1>Willkommen bei Bildrechte</h1>
    <p>Lerne über Bildrechte, Urheberrechtsgesetze und ethische Überlegungen in der Fotografie.</p>
    <NuxtLink to="/quiz" class="start-button">Quiz starten</NuxtLink>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.start-button {
  display: inline-block;
  background-color: #3498db;
  color: #fff;
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2rem;
  margin-top: 2rem;
  transition: background-color 0.3s;
}

.start-button:hover {
  background-color: #2980b9;
}
</style>