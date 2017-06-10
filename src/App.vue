<template>
  <div id="app">
    <load v-if="!finish" :loaded="loaded"></load>
    <tag-nav class="nav nav-top"></tag-nav>
    <logo></logo>
    <tag-nav class="nav nav-bottom"></tag-nav>
    <cover v-if="cover"></cover>
  </div>
</template>
<script>
import Logo from '@/components/logo.vue'
import TagNav from '@/components/tagNav.vue'
import Cover from '@/components/cover.vue'
import Load from '@/components/load.vue'


export default {
  name: 'app',
  created() {
    setTimeout(() => {
      this.cover = true
    }, 700)
    setTimeout(() => {
      this.loaded = true
    }, 900)
    setTimeout(() => {
      this.finish = true
    }, 1100)

  },
  data() {
    return {
      msg: 'Welcome!',
      cover: false,
      loaded: false,
      finish: false,
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
  components: {
    Logo,
    TagNav,
    Cover,
    Load,
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
  // top: 0;
  // bottom: 0;
}

a {
  color: #2c3e50;
}

// @media style
$mobile: "(max-width: 767px)";
$tablet: "(min-width: 768px) and (max-width: 1023px)";
$desktop: "(min-width: 1024px)";
.nav {
  position: relative;
  &-top {
    top: calc(50vh - 200px);
    @media #{$desktop},
    #{$tablet} {
      display: none;
    }
  }
  &-bottom {
    top: calc(50vh + 100px);
    @media #{$mobile} {
      display: none;
    }
  }
}
</style>
