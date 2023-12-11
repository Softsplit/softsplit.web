
export function onRequest(request) {
  const url = new URL(request.url);

  // Define headers for each URL
  const headersMap = {
    'https://softsplit.org/team': {
      'title': 'Team — Softsplit Studios',
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
    },
    'https://softsplit.org/': {
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
  };

  // Check if the requested URL has custom headers
  const customHeaders = headersMap[url.href];

  if (customHeaders) {
    // Inject custom headers
    for (const [header, value] of Object.entries(customHeaders)) {
      request.headers.set(header, value);
    }
  }

  // Continue processing the request
  return fetch(request);
}