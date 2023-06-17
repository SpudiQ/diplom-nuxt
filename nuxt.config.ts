export default {
  nitro: {
    preset: 'vercel-edge',
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/supabase'
  ],
  components: [
    { path: '~/@core/components/loaders', prefix: 'Loaders' },
    { path: '~/views/login', prefix: 'Auth' },
  ],
  css: [
    '@/assets/css/main.css'
  ]
};
