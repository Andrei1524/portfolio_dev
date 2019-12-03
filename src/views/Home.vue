<template>
  <div>
    <app-project-filter></app-project-filter>
    <app-projects></app-projects>
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectFilter from '../components/ProjectFilter'
import Projects from '../components/Projects'

export default {
  name: 'home',
  components: {
    'app-projects': Projects,
    'app-project-filter': ProjectFilter
  }
}
</script>
