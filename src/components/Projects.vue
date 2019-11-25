<template>
    <div class="projects">
        <app-project v-for="project in projects" :key="project.id" :project="project"></app-project>
    </div>
</template>

<script>
import Project from '../components/Project'
export default {
    components: {
        'app-project': Project
    },
    computed: {
        projects() {
            return this.$store.getters.getProjects;
        }
    }
}
</script>

<style lang="scss">
.projects {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
}
</style>