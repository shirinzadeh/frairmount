// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/content', //   [
  //   'nuxt-mail',
  //   {
  //     message: {
  //       to: process.env.MAIL_TO,
  //     },
  //     smtp: {
  //       host: process.env.SMTP_HOST,
  //       port: parseInt(process.env.SMTP_PORT || '587'),
  //       auth: {
  //         user: process.env.SMTP_USER,
  //         pass: process.env.SMTP_PASS,
  //       },
  //     },
  //   },
  // ],
  '@vee-validate/nuxt'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  css: [
    '~/assets/css/main.css'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  tailwindcss: {
    config: {
      darkMode: 'class',
      content: [
        'content/**/**.md'
      ]
    }
  },
  image: {
    quality: 80,
    format: ['webp']
  },
  content: {
    // Content module configuration
    highlight: {
      theme: 'dracula'
    }
  },
  veeValidate: {
    // Add desired configurations here
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
  
})