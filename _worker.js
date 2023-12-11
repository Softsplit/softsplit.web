export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    // Function to set headers based on the provided URL
    const setHeaders = (headers) => {
      for (const [key, value] of Object.entries(headers)) {
        request.headers.set(key, value)
      }
    }
    
    if (url.pathname.startsWith('/team')) {
      // Headers for https://softsplit.org/team
      const headers = {
        title: 'Team — Softsplit Studios',
        'og:image': 'https://softsplit.org/assets/logo2-SHwmP7UB.png',
        'og:image:alt': 'We make stuff in our spare time',
        'og:image:width': '512',
        'og:image:height': '512',
        'og:site_name': 'Softsplit Studios',
        'og:type': 'website',
        'og:url': 'https://softsplit.org',
        'og:description': 'We make stuff in our spare time',
        'twitter:image:src': 'https://softsplit.org/assets/logo2-SHwmP7UB.png',
        'twitter:site': '@Softsplit',
        'twitter:title': 'Team — Softsplit Studios',
        'twitter:description': 'We make stuff in our spare time',
        'theme-color': '#FFA500'
      }

      setHeaders(headers)
    } else if (url.pathname === '/') {
      // Headers for https://softsplit.org/
      const headers = {
        'og:image': 'https://softsplit.org/assets/logo2-SHwmP7UB.png',
        'og:image:alt': 'We make stuff in our spare time',
        'og:image:width': '512',
        'og:image:height': '512',
        'og:site_name': 'Softsplit Studios',
        'og:type': 'website',
        'og:url': 'https://softsplit.org',
        'og:description': 'We make stuff in our spare time',
        'twitter:image:src': 'https://softsplit.org/assets/logo2-SHwmP7UB.png',
        'twitter:site': '@Softsplit',
        'twitter:title': 'Softsplit Studios',
        'twitter:description': 'We make stuff in our spare time',
        'theme-color': '#FFA500'
      }

      setHeaders(headers)
    }

    // Serve static assets if not /api/*, /team, or /
    return env.ASSETS.fetch(request)
  }
}
