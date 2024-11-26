<template>
  <NavigationBar
    :isMobile="isMobile"
    :showMobileMenu="showMobileMenu"
    @toggleMobileMenu="toggleMobileMenu"
  />

  <div v-if="!isMobile || (isMobile && !showMobileMenu)">
    <HomeIntro v-show="showHomeIntro" />
    <HomeGames v-show="showHomeGames" />
    <HomeAboutUs v-show="showHomeAboutUs" />
    <NavigationFooter v-show="showNavigationFooter" />
  </div>
</template>

<script setup lang="ts">
import NavigationBar from '@/components/NavigationBar.vue'
import NavigationFooter from '@/components/NavigationFooter.vue'
import HomeIntro from '@/components/HomeIntro.vue'
import HomeGames from '@/components/HomeGames.vue'
import HomeAboutUs from '@/components/HomeAboutUs.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMobile = ref(false)
const showMobileMenu = ref(false)
const showHomeIntro = ref(true)
const showHomeGames = ref(true)
const showHomeAboutUs = ref(true)
const showNavigationFooter = ref(true)

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const handleResize = () => {
  isMobile.value = window.innerWidth <= 1024
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
