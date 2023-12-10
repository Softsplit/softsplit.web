<template>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
  />
  <div class="navbar">
    <div class="navbar-wrapper">
      <router-link to="/" class="navbar-brand">
        <img alt="Softsplit logo" src="@/assets/logo1.png" class="navbar-item" />
      </router-link>

      <div v-if="isMobile" class="navbar-mobile-menu" @click="toggleMobileMenu">
        <span class="material-symbols-outlined"> menu </span>
      </div>

      <div v-else class="navbar-menu">
        <a href="/#aboutus" class="navbar-item">About Us</a>
        <a href="/#games" class="navbar-item">Games</a>
        <router-link to="/team" class="navbar-item">Team</router-link>
      </div>
    </div>
  </div>
  <div v-if="isMobile && showMobileMenu" class="navbar-mobile-list">
    <a href="/#aboutus" class="navbar-item">About Us</a>
    <a href="/#games" class="navbar-item">Games</a>
    <router-link to="/team" class="navbar-item">Team</router-link>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    showMobileMenu: Boolean,
    isMobile: Boolean
  },
  methods: {
    toggleMobileMenu() {
      this.$emit('toggleMobileMenu')
    }
  },
  mounted() {
    // Ensure that the components are shown initially if the mobile menu is active
    if (this.isMobile && this.showMobileMenu) {
      this.toggleMobileMenu()
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Gadugi Bold';
  src: url('@/assets/fonts/gadugib.ttf');
}

.navbar {
  z-index: 1;
  width: 100%;
  height: fit-content;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  background-color: transparent;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.navbar-wrapper {
  width: 80vw;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.navbar-menu {
  display: flex;
  flex-direction: row;
  margin-top: 7.5px;
  gap: 50px;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
}

.navbar-item {
  font-family: 'Gadugi Bold';
  font-size: 22.5px;
  color: white;
  width: fit-content;
  height: fit-content;
  transition: 0.25s;
}

.navbar-brand .navbar-item {
  height: 100%;
}

.navbar-item:hover {
  color: orange;
}

.navbar-brand {
  display: flex;
  height: 80px;
  transition: 0.25s;
  align-items: center;
  justify-content: center;
}

.navbar-mobile-menu {
  transition: 0.25s;
  font-size: 35px;
}

.navbar-mobile-menu:hover {
  color: orange;
}

.navbar-mobile-list {
  transition: 0.25s;
  z-index: 1000000;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 300px;
  padding-bottom: 150px;
  width: 100%;
  height: 300px;
  gap: 10px;
  text-align: center;
  align-items: center;
  justify-content: space-between;

  .navbar-item {
    font-family: 'Gadugi Bold';
    font-size: 35px;
    color: white;
    width: fit-content;
    height: fit-content;
    transition: 0.25s;
  }

  .navbar-item:hover {
    color: orange;
  }
}

@media (max-width: 1300px) {
  .navbar {
    width: 85%;
  }

  .navbar-wrapper {
    width: 100%;
  }
}

@media (max-width: 1024px) {
  .navbar-brand {
    height: 40%;
  }
}
</style>
