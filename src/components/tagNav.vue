<template>
  <div id="tag-nav">
    <ul>
      <li>會前活動</li>
      <li>活動介紹</li>
      <li>專欄採訪</li>
      <li>新聞媒體</li>
      <li>訊息分享</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'tag-nav',
  data() {
    return {
      msg: 'Welcome!',
    }
  }
}
</script>
<style lang="scss" scoped>
#tag-nav {
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
  // @media style
  $mobile: "(max-width: 767px)";
  $tablet: "(min-width: 768px) and (max-width: 1023px)";
  $desktop: "(min-width: 1024px)";
  li {
    @media #{$mobile} {
      font-size: 12px;
      margin: 0px 3px;
    }
  }
}
</style>
