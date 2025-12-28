export default {
  ssr: true,
  head: {
    title: 'Nuxt 2 SSR Demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: 'http://localhost:3500'
  }
}
