<template>
  <header class="header">
    <div class="header__container _container">
      <div class="header__wrapper">
        <div class="header__logo">
          <img src="..\assets\images\header\01.svg" alt="logo" />
        </div>
        <nav class="header__nav-items-wrapper">
          <div class="header__nav-item nav-item">
            <div v-if="$route.path == '/'" class="nav-item__line" />
            <router-link to="/" class="nav-item__link">главная</router-link>
            <div v-if="$route.path == '/'" class="nav-item__line" />
          </div>
          <div class="header__nav-item nav-item">
            <div v-if="$route.path == '/gallery'" class="nav-item__line" />
            <router-link to="/gallery" class="nav-item__link"
              >галерея</router-link
            >
            <div v-if="$route.path == '/gallery'" class="nav-item__line" />
          </div>
          <div class="header__nav-item nav-item">
            <div v-if="$route.path == '/projects'" class="nav-item__line" />
            <router-link to="/projects" class="nav-item__link"
              >проекты</router-link
            >
            <div v-if="$route.path == '/projects'" class="nav-item__line" />
          </div>
          <div class="header__nav-item nav-item">
            <div v-if="$route.path == '/sertificates'" class="nav-item__line" />
            <router-link to="/sertificates" class="nav-item__link"
              >сертификаты</router-link
            >
            <div v-if="$route.path == '/sertificates'" class="nav-item__line" />
          </div>
          <div class="header__nav-item nav-item">
            <div v-if="$route.path == '/contacts'" class="nav-item__line" />
            <router-link to="/contacts" class="nav-item__link"
              >контакты</router-link
            >
            <div v-if="$route.path == '/contacts'" class="nav-item__line" />
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "DpHeader",
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
.header {
  &__container {
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 29px 0;
  }

  @media (max-width: 788px) {
    &__wrapper {
      padding: 19px 0;
    }
  }

  &__logo {
    position: relative;
    width: 70px;
    height: 44px;
  }

  &__logo img {
    position: absolute;
  }

  &__nav-items-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 66%;
    margin: -10px -30px;
  }

  @media (max-width: 370px) {
    &__nav-items-wrapper {
      justify-content: center;
    }

    //&__logo {
    //  align-self: center;
    //}
  }

  @media (max-width: 620px) {
    &__nav-items-wrapper {
      width: 80%;
    }
  }

  @media (max-width: 500px) {
    &__nav-items-wrapper {
      width: 90%;
    }
  }

  &__nav-item {
    margin: 10px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
.nav-item {
  &__line {
    width: 100%;
    height: 0.97px;
    background: black;
  }

  &__link {
    padding: 4px 0;

    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
}
</style>