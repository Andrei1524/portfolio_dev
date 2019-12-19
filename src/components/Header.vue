<template>
  <div class="header">
    <div class="left">
      <div class="brand">
        <div class="brand-text-wrapper">
          <div class="brand-text">
            <h1>Mandrican Andrei</h1>
            <p>front-end & a bit on back-end</p>
          </div>
        </div>

        <div class="social">
          <a href="https://www.instagram.com/mandrican.andrei/" target="_blank"
            ><i class="fab fa-instagram"></i
          ></a>
          <a
            href="https://www.linkedin.com/in/mandrican-andrei-450676120/"
            target="_blank"
            ><i class="fab fa-linkedin"></i
          ></a>
          <a href="https://codepen.io/AndreiKnight/" target="_blank"
            ><i class="fab fa-codepen"></i
          ></a>

          <a href="https://github.com/AndreiKnight" target="_blank"
            ><i class="fab fa-github-square"></i
          ></a>
        </div>
      </div>
    </div>

    <div class="right">
      <nav>
        <router-link to="/">PROJECTS</router-link>
        <router-link to="/contact">CONTACT</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "../styles/general_colors.scss";
$brand_dashes_margin: 10px;

.header {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 48px 0;

  .left {
    display: flex;
    align-items: center;
  }
}

.brand {
  display: flex;

  flex-direction: column;
  h1 {
    color: $font-color-w;
    font-weight: 400;
    font-size: 42px;
    margin: 0;
  }

  p {
    margin: 0;
    color: $font-color-w;
    position: relative;
    top: -6px;
    font-weight: 300;
  }
  .social {
    display: flex;
    a {
      display: block;
      margin-right: 6px;
      padding: 4px 7px;
      background: #d8d8d8;
      transition: 0.8s;
      &:hover {
        opacity: 0.6;
      }
    }

    i {
      font-size: 1.5em;
      color: #2f2f2f;
    }
  }
}

.brand-text {
  position: relative;
  &::before {
    content: "";
    display: block;
    height: 27px;
    width: 28px;
    background: url("../assets/left-arrow.png");
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    left: -38px;
    top: 10px;
  }

  &:after {
    content: "";
    display: block;
    height: 27px;
    width: 28px;
    background: url("../assets/right-arrow.png");
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    right: -30px;
    top: 10px;
  }
}

.brand-text-wrapper {
  display: flex;
  align-items: center;
  img {
    height: fit-content;
    &:first-child {
      margin-right: $brand_dashes_margin;
    }

    &:last-child {
      padding: 4.5px 7px;
      margin-left: $brand_dashes_margin;
    }
  }
}

nav a {
  position: relative;
  text-decoration: none;
  background: #ffffff;
  color: #676767;
  padding: 8px 19px;
  font-size: 18px;
  margin: 0 5px;
  border-radius: 3px;
  border: 1px solid #d8d8d8;
  border-bottom: 4px solid #d8d8d8;

  &:hover {
    top: 2px;
    border-bottom: 2px solid #d8d8d8;
    color: #000;
  }
}

@media only screen and (max-width: 1024px) {
  .header {
    padding: 48px 70px;
  }
}

@media only screen and (max-width: 450px) {
  .header {
    display: block;
    padding: 18px 0;
  }

  .brand {
    width: 100%;
    align-items: center;
  }

  .right {
    display: none;
  }
}
</style>
