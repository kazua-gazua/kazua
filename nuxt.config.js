module.exports = {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  head: {
    title: 'nuxt-typescript-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  css: [
        'tachyons/css/tachyons.min.css', 
        '~assets/css/sb-admin-2.css',
        '~assets/bootstrap/css/bootstrap.min.css',
        '~assets/metisMenu/metisMenu.min.css',
        '~assets/morrisjs/morris.css',
        '~assets/font-awesome/css/font-awesome.min.css',
        '~assets/bootstrap/css/bootstrap.min.css'
      ],
  build: {
    vendor: [
              'axios', 
              'gsap', 
              'vuex-class', 
              'nuxt-class-component',
              '~assets/jquery/jquery.min.js',
              '~assets/js/sb-admin-2.js',
              '~assets/bootstrap/js/bootstrap.min.js',
              '~assets/metisMenu/metisMenu.min.js',
              '~assets/morrisjs/morris.min.js'
            ]
  },
  modules: ['~modules/typescript.ts']
}
