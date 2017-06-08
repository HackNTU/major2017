<template>
  <div id="logo">
    <tag-nav class="nav-top"></tag-nav>
    <img src="~@/assets/logo/logo-wb.png" alt="">
    <div id="title">
      <h2 class="en"> 2017HackNTU </h2>
      <h2 class="zh"> 臺大黑客松 </h2>
    </div>
    <tag-nav class="nav-bottom"></tag-nav>
  </div>
</template>
<script>
import tagNav from '@/components/tagNav.vue'

export default {
  name: 'logo',
  data() {
    return {
      msg: 'Welcome!',
    }
  },
  components: {
    tagNav,
  },
}
</script>
<style lang="scss" scoped>
#logo {
  img {
    border-radius: 50%;
    width: 180px;
  }
  position: absolute;
  margin-top: 10%;
  width: 100%;
}

#title {
  margin-top: 0px;
  > * {
    font-size: 1.6em;
    font-weight: bold;
    display: block;
    // display: inline-block;
  }
  .en {
    font-family: initial;
  }
  .zh {
    font-family: cursive;
  }
}

// @media style
$mobile: "(max-width: 767px)";
$tablet: "(min-width: 768px) and (max-width: 1023px)";
$desktop: "(min-width: 1024px)";
.nav {
  &-top {
    @media #{$desktop} {
      display: none;
    }
  }
  &-bottom {
    @media #{$tablet},
    #{$mobile} {
      display: none;
    }
  }
}
</style>
