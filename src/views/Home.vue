<template>
  <div class="home">
    <app-project-filter></app-project-filter>
    <app-projects></app-projects>
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectFilter from "../components/ProjectFilter";
import Projects from "../components/Projects";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    "app-projects": Projects,
    "app-project-filter": ProjectFilter
  },
  mounted() {
    this.$store.dispatch("setFooterAbsolute", undefined);
  }
};
</script>

<style lang="scss" scoped>
.home {
  margin: 2em 0;
}
</style>
