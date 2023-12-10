<template>
  <Head>
    <meta property="og:image" content="https://softsplit.org/assets/logo2-SHwmP7UB.png" />
    <meta property="og:image:alt" content="We make stuff in our spare time" />
    <meta property="og:image:width" content="512" />
    <meta property="og:image:height" content="512" />
    <meta property="og:site_name" content="Softsplit Studios" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://softsplit.org" />
    <meta property="og:description" content="We make stuff in our spare time" />

    <meta name="twitter:image:src" content="https://softsplit.org/assets/logo2-SHwmP7UB.png" />
    <meta name="twitter:site" content="@Softsplit" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Softsplit Studios" />
    <meta name="twitter:description" content="We make stuff in our spare time" />
  </Head>
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
import { Head } from '@unhead/vue/components'

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
