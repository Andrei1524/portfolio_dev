<template>
  <div class="burger-menu">
    <span class="burger" @click="openMenu"><i class="fas fa-bars"></i></span>
    <nav @click="openMenu">
      <router-link to="/">PROJECTS</router-link>
      <router-link to="/contact">CONTACT</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    openMenu() {
      this.$store.dispatch("openBurgerMenu");
    }
  }
};
</script>

<style lang="scss" scoped>
.burger-menu {
  nav {
    padding: 5px 0;
  }
  nav a {
    display: block;
    margin-bottom: 5px;
    background: #d8d8d8;
    color: #4d4d4d;
    position: relative;
  }

  .burger {
    position: absolute;
    left: -50px;
    top: 10px;
    font-size: 2em;
    background: #fdfdfd;
    padding: 3px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #848484;
    border-radius: 4px;
    color: #676767;
    cursor: pointer;
  }
}
</style>
