module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Our Design',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Prototyped project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Roboto'},
      { rel: 'stylesheet', href:'//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css'}
    ]
  },
  css: [
    // SCSS file in the project
    { src: '~/assets/css/main.scss', lang: 'scss' }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
/*
  ** Load Bueify
  */
  modules: [
    // Simple usage
    ['nuxt-buefy', { css: true, materialDesignIcons: true }],
],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
