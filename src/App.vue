<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  /**font-family: 'Avenir', Helvetica, Arial, sans-serif;**/
  font-family: Verdana, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: normal;
    color: #2c3e50;
    &.router-link-exact-active {
      color: rgb(73, 120, 172);

    }
  }
}
</style>
