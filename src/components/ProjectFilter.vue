<template>
  <div class="filter-menu">
    <span class="tech-filter" @click="setDefaultFilters()">ALL</span>
    <span
      class="tech-filter"
      @click="selectFilter(tech)"
      v-for="tech in techs"
      :key="tech"
    >{{ tech }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      techs: this.$store.getters.getTechs,
      tech_btns: undefined
    };
  },
  mounted() {
    this.tech_btns = document.querySelectorAll(".tech-filter");

    this.tech_btns[0].style.top = "-2px";
    this.tech_btns[0].style.borderBottom = "4px solid #ababab";

    for (let i = 0; i < this.tech_btns.length; i++) {
      this.tech_btns[i].addEventListener("click", () => {
        this.setActive(this.tech_btns[i]);
      });
    }
  },
  methods: {
    selectFilter(tech) {
      this.$store.dispatch("setTech", tech);
    },
    setDefaultFilters() {
      this.$store.dispatch("setDefaultFilters");
    },
    setActive(btn) {
      for (let i = 0; i < this.tech_btns.length; i++) {
        if (this.tech_btns[i].innerText == btn.innerText) {
          this.tech_btns[i].style.top = "-2px";
          this.tech_btns[i].style.borderBottom = "4px solid #ababab";
        } else {
          this.tech_btns[i].style.top = "0";
          this.tech_btns[i].style.borderBottom = "1px solid #ababab";
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.filter-menu {
  display: flex;
  margin: 20px 0;
  height: 50px;
  align-items: center;
}
.tech-filter {
  position: relative;
  padding: 5px 9px;
  padding-top: 9px;
  background: #fdfdfd;
  margin-right: 5px;
  font-weight: 400;
  text-transform: uppercase;
  border: 1px solid #ababab;
  color: #4d4d4d;
  font-size: 19px;
  user-select: none;
  cursor: pointer;
  height: fit-content;
  width: fit-content;
  transition: 0.2s;

  &:hover {
    animation-name: hoverTECH;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
  }

  .active {
    background: red;
  }

  @keyframes hoverTECH {
    from {
      top: 0px;
      border-bottom: 2px solid #ababab;
    }
    to {
      top: -2px;
      border-bottom: 4px solid #ababab;
    }
  }
}
</style>