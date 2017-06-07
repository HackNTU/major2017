<template>
  <div id="app">
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome!'
    }
  },
  head: {
    meta: [
      // Facebook / Open Graph
      {
        property: 'og:title',
        content: 'Content Title'
      }, {
        property: 'og:url',
        content: 'http://major.hackntu.taipei'
      }, {
        property: 'og:type',
        content: 'website'
      }, {
        property: 'og:title',
        content: '臺大黑客松 HackNTU'
      }, {
        property: 'og:description',
        content: '7/21-23 (花博公園爭艷館)，三天Hacking不間斷！'
      }, {
        property: 'og:image',
        content: './src/assets/logo/banner.jpg'
      },
    ],
    link: [
      // Favicon
      {
        rel: 'shortcut icon',
        href: require('@/assets/logo/favicon.png'),
        sizes: '16x16',
        type: 'image/png'
      }, {
        rel: 'icon',
        href: require('@/assets/logo/favicon.png'),
        sizes: '16x16',
        type: 'image/png'
      },
    ],
  },
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  color: #42b983;
}
</style>
