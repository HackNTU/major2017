<template>
  <div id="tag-nav">
    <ul>
      <template v-for="tag in tags">
        <li>
          <a :href="'https://hackntu.tumblr.com/tagged/' + tag.en">{{tag.zh}}</a>
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'tag-nav',
  data() {
    return {
      msg: 'Welcome!',
      tags: [{
        zh: '會前活動',
        en: 'pre-event',
      }, {
        zh: '活動介紹',
        en: 'intro',
      }, {
        zh: '專欄採訪',
        en: 'interview',
      }, {
        zh: '我要報名',
        en: 'sign-up',
      }, {
        zh: '關於我們',
        en: 'about',
      }],
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
      background-color: #555;
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
  a {
    letter-spacing: 0.4px;
    font-weight: 500;
    text-decoration: none;
    color: hsla(210, 30%, 15%, 1);
    display: block;
    opacity: 0.8;
    @media #{$mobile} {
      font-weight: 400;
    }
  }
}
</style>
