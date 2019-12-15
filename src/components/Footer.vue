<template>
  <footer :style="{ position: getFooterState }">
    <p>
      Mandrican Andrei |
      <a href="mailto:mandrican.andrei@gmail.com">mandrican.andrei@gmail.com</a>
    </p>
  </footer>
</template>

<script>
export default {
  computed: {
    getFooterState() {
      return this.$store.getters.getFooterState;
    }
  }
};
</script>

<style lang="scss" scoped>
footer {
  bottom: 0;
  width: 100%;
  text-align: center;
  background: #151515;
  padding: 20px 0;
  margin: 0;
  color: #e8e8e8;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
  p {
    margin: 0;
    color: #e8e8e8;
  }
  a {
    color: #e8e8e8;
  }
}
</style>
