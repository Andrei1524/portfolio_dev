<template>
  <div id="app">
    <div :class="[{ 'burger-open': burger_open }, 'burger-menu-wrapp']">
      <app-burger-menu></app-burger-menu>
    </div>
    <app-header></app-header>
    <span class="line"></span>
    <div class="page">
      <transition name="pagetr">
        <router-view />
      </transition>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import BurgerMenu from "./components/BurgerMenu";

export default {
  data() {
    return {};
  },
  computed: {
    burger_open() {
      return this.$store.getters.getBurgerMenuState;
    }
  },
  created() {
    // fill THE DEFAULT TECHS TO FILTER BY
    this.$store.dispatch("loadProjects");
    this.$store.dispatch("initTech", this.$store.getters.getTechs);
  },
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-burger-menu": BurgerMenu
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  border: none;
  background-color: #e8e8e8;
}

#app {
  font-family: "Yanone Kaffeesatz", sans-serif;
}
img,
span {
  display: block;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.line {
  display: block;
  height: 4px;
  background: #d8d8d8;
}

/* PAGE */

.page {
  max-width: 1100px;
  margin: 0 auto;
}

/* burger-menu */

.burger-menu-wrapp {
  display: none;
  position: fixed;
  right: -152px;
  z-index: 9999;
  height: 100%;
  width: 150px;
  background: #e8e8e8;
  /* border-left: 1px solid #4b4b4b; */
  transition: 0.3s;
}

.burger-open {
  right: 0px;
  box-shadow: -1px 0 4px #00000073;
}

/* PAGE TRANSITION */
$pageTransition: 0.3s;
.pagetr-leave {
  transition: $pageTransition;
  opacity: 1;
  transform: translateX(0);
}

.pagetr-leave-to {
  transition: $pageTransition;
  opacity: 0;
  transform: translateX(-500px);
}

.pagetr-enter {
  transition: $pageTransition;
  opacity: 0;
  transform: translateX(500px);
}

.pagetr-enter-to {
  transition: $pageTransition;
  transition-delay: $pageTransition;
  opacity: 1;
  transform: translateX(0px);
}

@media only screen and (max-width: 450px) {
  .burger-menu-wrapp {
    display: block;
  }
}

@media only screen and (max-width: 1024px) {
  .page {
    padding: 0 20px;
  }
}
</style>
