<template>
  <div class="page">
    <app-projects></app-projects>
  </div>
</template>

<script>
// @ is an alias to /src
import Projects from '../components/Projects'

export default {
  name: 'home',
  components: {
    'app-projects': Projects
  }
}
</script>
