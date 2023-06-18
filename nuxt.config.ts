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
    { path: '~/views/main', prefix: 'Main' },
  ],
  css: [
    '@/assets/css/main.css'
  ]
};
