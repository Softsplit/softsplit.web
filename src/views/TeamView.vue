<script setup lang="ts">
import TeamIntro from '@/components/TeamIntro.vue'
import TeamList from '@/components/TeamList.vue'
import TeamOutro from '@/components/TeamOutro.vue'
import NavigationFooter from '@/components/NavigationFooter.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useHead } from '@unhead/vue'

const pageTitle = 'Team — Softsplit Studios';
const siteUrl = 'https://softsplit.org';
const siteDescription = 'We make stuff in our spare time';
const imageUrl = 'https://softsplit.org/assets/logo2-SHwmP7UB.png';

useHead({
  title: pageTitle,
  meta: [
    { property: 'og:image', content: imageUrl },
    { property: 'og:image:alt', content: 'We make stuff in our spare time' },
    { property: 'og:image:width', content: '512' },
    { property: 'og:image:height', content: '512' },
    { property: 'og:site_name', content: 'Softsplit Studios' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: siteUrl },
    { property: 'og:description', content: siteDescription },
    { name: 'twitter:image:src', content: imageUrl },
    { name: 'twitter:site', content: '@Softsplit' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Softsplit Studios' },
    { name: 'twitter:description', content: siteDescription },
  ],
});

const isMobile = ref(false)
const showMobileMenu = ref(false)

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
