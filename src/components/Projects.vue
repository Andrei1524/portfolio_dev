<template>
  <div class="projects">
    <app-project
      v-for="project in projects"
      :key="project.id"
      :project="project"
    ></app-project>
  </div>
</template>

<script>
import Project from "./Project";
import _ from 'lodash'

export default {
  components: {
    "app-project": Project
  },


  computed: {
    projects() {
      let projects = this.$store.getters.getProjects;
      let filtered_projects = [];

      let tech = this.$store.getters.getFilteredTech;

      projects.forEach(pj => {
        if (pj.tech.includes(tech)) {
          filtered_projects.push(pj);
        }
      });

      if (Array.isArray(tech)) {
        return projects;
      } else {
        return filtered_projects;
      }
    }
  }
};
</script>

<style lang="scss">
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  justify-items: center;
  row-gap: 25px;
}
</style>
