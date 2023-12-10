<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <meta property="og:image" content="https://softsplit.org/assets/logo2-SHwmP7UB.png" />
  <meta property="og:image:alt" content="We make stuff in our spare time" />
  <meta property="og:image:width" content="512" />
  <meta property="og:image:height" content="512" />
  <meta property="og:site_name" content="Softsplit Studios" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Softsplit Studios" />
  <meta property="og:url" content="https://softsplit.org" />
  <meta property="og:description" content="We make stuff in our spare time" />

  <meta name="twitter:image:src" content="https://softsplit.org/assets/logo2-SHwmP7UB.png" />
  <meta name="twitter:site" content="@Softsplit" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Softsplit Studios" />
  <meta name="twitter:description" content="We make stuff in our spare time" />
  <RouterView />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans');
</style>
