<script setup lang="ts">
import TeamIntro from '@/components/TeamIntro.vue'
import TeamList from '@/components/TeamList.vue'
import TeamOutro from '@/components/TeamOutro.vue'
import NavigationFooter from '@/components/NavigationFooter.vue'
import NavigationBar from '@/components/NavigationBar.vue'
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

<template>
  <div>
    <NavigationBar
      :isMobile="isMobile"
      :showMobileMenu="showMobileMenu"
      @toggleMobileMenu="toggleMobileMenu"
    />

    <div v-if="!isMobile || (isMobile && !showMobileMenu)">
      <TeamIntro />
      <TeamList />
      <TeamOutro />
      <NavigationFooter />
    </div>
  </div>
</template>
