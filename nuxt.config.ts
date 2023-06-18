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
    { path: '~/views/inventory', prefix: 'Inventory' },
    { path: '~/@core/components', prefix: false },
  ],
  css: [
    '@/assets/css/main.css'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
};
