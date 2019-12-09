<template>
  <div>
    <div class="project-header">
      <h1>{{ project.title }}</h1>
      <p>{{ project.about }}</p>
    </div>
    <span class="line"></span>
    <div class="project-image">
      <img
        v-if="imgWidth"
        :style="{ width: this.imgWidth }"
        :src="require('@/assets/project_pictures/' + project.image)"
        alt=""
      />
    </div>

    <div class="project-about">
      <h2>About</h2>
      <p>{{ project.about }}</p>
    </div>
    <div class="project-tech">
      <h2>Technologies</h2>
      <ul>
        <li v-for="tech in project.tech" :key="tech">
          {{ tech.toUpperCase() }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgWidth: undefined
    };
  },
  computed: {
    project() {
      let projectTitle = this.$route.params.title;

      return this.$store.getters.getProject(projectTitle);
    }
  },
  mounted() {
    let image = new Image();

    image.src = require("../assets/project_pictures/" + this.project.image);

    if (image.height > 1500) {
      this.imgWidth = "30%";
    } else {
      this.imgWidth = "75%";
    }
    // document.body.appendChild(image);
  }
};
</script>

<style lang="scss" scoped>
.project-header {
  color: #4d4d4d;
  margin: 20px 0;
  margin-top: 40px;
  h1 {
    text-transform: uppercase;
  }

  h1,
  p {
    margin: 0;
  }
}

.line {
  display: block;
  height: 1px;
  background: #c8c8c8;
}

.project-image img {
  width: 75%;
  margin: 30px auto;
}
.project-about,
.project-tech {
  color: #4d4d4d;
  margin: 20px 0;
  margin-top: 40px;
  h2,
  p {
    margin: 0px;
  }
}
</style>
