<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components: {
    'app-header': Header
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  border: none;
  background-color: #E8E8E8;
}

#app {
  font-family: 'Yanone Kaffeesatz', sans-serif;
}
img, span {
  display: block;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

/* PAGE */

.page {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
