<template>
  <div id="logo">
    <img src="~@/assets/logo/logo-wb.png" alt="">
    <div id="title">
      <h2 class="en"> 2017HackNTU </h2>
      <h2 class="zh"> 臺大黑客松 </h2>
    </div>
    <div id="nav">
      <ul>
        <li>會前活動</li>
        <li>活動介紹</li>
        <li>專欄採訪</li>
        <li>新聞媒體</li>
        <li>訊息分享</li>
      </ul>
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
  }
}
</script>
<style lang="scss" scoped>
#logo {
  img {
    border-radius: 50%;
    width: 180px;
  }
  position: absolute;
  margin-top: 20%;
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

#nav {
  margin-top: 10px;
  ul {
    padding: 0px;
  }
  li {
    display: inline-block;
    font-size: 16px;
    margin: 0px 6px;
    cursor: pointer;
    &:after {
      content: "";
      // position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #000;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
    }
    &:hover:after {
      visibility: visible;
      transform: scaleX(1);
    }
  }
}
</style>
