<template>
  <div id="app">
    <app-header></app-header>
    <span class="line"></span>
    <div class="page">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  data() {
    return {};
  },
  created() {
    // fill THE DEFAULT TECHS TO FILTER BY
    this.$store.dispatch("loadProjects");
    this.$store.dispatch("initTech", this.$store.getters.getTechs);
  },
  components: {
    "app-header": Header
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  border: none;
  background-color: #e8e8e8;
}

#app {
  font-family: "Yanone Kaffeesatz", sans-serif;
}
img,
span {
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

.line {
  display: block;
  height: 4px;
  background: #d8d8d8;
}

/* PAGE */

.page {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
