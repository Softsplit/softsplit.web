<template>
  <div class="navfooter">
    <!-- Show only on mobile -->
    <img v-if="isMobile" alt="Softsplit logo" src="@/assets/logo2.png" class="navfooter-brand" />

    <div class="navfooter-wrapper">
      <!-- Show only on non-mobile -->
      <img v-if="!isMobile" alt="Softsplit logo" src="@/assets/logo2.png" class="navfooter-brand" />
      <div class="navfooter-container">
        <div class="navfooter-header">Studio</div>
        <a href="/#aboutus" class="navfooter-item">About Us</a>
        <a href="/#games" class="navfooter-item">Games</a>
        <router-link to="/team" class="navfooter-item">Team</router-link>
      </div>
      <div class="navfooter-container">
        <div class="navfooter-header">Games</div>
        <a href="https://tspsource2.softsplit.org" class="navfooter-item"
          >The Stanley Parable: Source 2</a
        >
      </div>
      <div class="navfooter-container">
        <div class="navfooter-header">Social</div>
        <div class="navfooter-subcontainer">
          <a href="https://youtube.com/@SoftsplitStudios">
            <img alt="Softsplit logo" src="@/assets/youtube.png" class="navfooter-socials" />
          </a>
          <a href="https://discord.gg/GaGFHFttAC">
            <img alt="Softsplit logo" src="@/assets/discord.png" class="navfooter-socials" />
          </a>
          <a href="https://twitter.com/Softsplit">
            <img alt="Softsplit logo" src="@/assets/twitter.png" class="navfooter-socials" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      isMobile: window.innerWidth <= 899 // Adjust the breakpoint as needed
    }
  },
  mounted() {
    // Watch for window resize events to update the isMobile property
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    // Cleanup event listener when component is unmounted
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth <= 899 // Adjust the breakpoint as needed
    }
  }
})
</script>

<style scoped>
@font-face {
  font-family: 'Gadugi Bold';
  src: url('@/assets/fonts/gadugib.ttf');
}

.navfooter {
  width: 100%;
  padding-top: 50px;
  background-color: white;
  padding-bottom: 50px;
  height: fit-content;
}

.navfooter-wrapper {
  display: flex;
  width: 80rem;
  margin: auto;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
}

.navfooter-brand {
  height: 75px;
  background-color: transparent;
}

.navfooter-socials {
  height: 27.5px;
  width: fit-content;
  background-color: transparent;
  transition: 0.25s;
}

.navfooter-socials:hover {
  opacity: 65%;
}

.navfooter-container {
  display: flex;
  flex-direction: column;
}

.navfooter-subcontainer {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.navfooter-header {
  font-family: 'Gadugi Bold';
  color: orange;
  font-size: 25px;
}

.navfooter-item {
  font-family: 'Noto Sans', sans-serif;
  color: black;
  font-size: 20px;
  font-weight: 600;
}

.navfooter-item:hover {
  opacity: 65%;
}

@media (max-width: 1300px) {
  .navfooter-wrapper {
    width: 85%;
  }
}

@media (max-width: 899px) {
  .navfooter-wrapper {
    flex-direction: column;
  }

  .navfooter-brand {
    height: 100px;
    width: 100px;
  }

  .navfooter-brand {
    display: block;
    margin: auto;
  }

  .navfooter-container {
    margin-bottom: 20px;
  }
}
</style>
