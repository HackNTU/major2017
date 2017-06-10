<template>
  <div id="logo">
    <img src="~@/assets/logo/logo-wb.png" alt="">
    <div id="title">
      <h2 class="en"> 2017HackNTU </h2>
      <h2 class="zh"> 臺大黑客松 </h2>
    </div>
  </div>
</template>
<script>
export default {
  name: 'logo',
  data() {
    return {
      msg: 'Welcome!',
    }
  },
}
</script>
<style lang="scss" scoped>
#logo {
  img {
    border-radius: 50%;
    width: 180px;
    max-width: 100%;
  }
  position: absolute;
  margin-top: calc(50vh - 190px);
  left: 50vw;
  margin-left: -90px;
  // width: 100%;
}

#title {
  height: 100px;
  > * {
    margin: 0px;
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
</style>
