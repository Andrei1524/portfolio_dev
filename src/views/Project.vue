<template>
  <div>{{ project.title }}</div>
</template>

<script>
export default {
  computed: {
    project() {
      let projectTitle = this.$route.params.title;

      return this.$store.getters.getProject(projectTitle);
    }
  },
  created() {}
};
</script>

<style lang="scss"></style>
