// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  experimental: {
    defaults: {
      nuxtLink: {
        // default values
        componentName: 'NuxtLink',
        externalRelAttribute: 'noopener noreferrer',
        activeClass: 'router-link-active',
        exactActiveClass: 'router-link-exact-active',
        prefetchedClass: undefined, // can be any valid string class name
        trailingSlash: undefined // can be 'append' or 'remove'
      }
    }
  },
  app: {
    head: {        
      title: "Xây Dựng Quyên Dũng",
      meta: [
        { name: 'description', content: 'Xây dựng nhà phần thô và nhân công hoàn thiện 2024 Uy tín. Chi phí thiết kế và giấy phép xây dựng. Đặc biệt miễn phí tư vấn....' },
        { name: "keywords", content: 'Xây nhà giá rẻ, Xây nhà chất lượng, sửa nhà, công ty xây dựng uy tính' }
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/png', href: '/logoCT.png' }]
    }
  },  
  devtools: { enabled: true },
  build: {   
    transpile: ['vuetify'],
    
  },  
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true}))
        
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },    
    
  },
  
})
