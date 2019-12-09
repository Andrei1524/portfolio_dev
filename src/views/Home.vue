<template>
  <div
    class="home"
    :style="{ height: 'calc(100vh - ' + (pageHeight - 14) + 'px' + ')' }"
  >
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
    return {
      pageHeight: undefined
    };
  },
  components: {
    "app-projects": Projects,
    "app-project-filter": ProjectFilter
  },
  mounted() {
    console.log(this.$el.clientHeight);
    this.pageHeight = this.$el.clientHeight;
  }
};
</script>

<style lang="scss" scoped>
.home {
}
</style>
