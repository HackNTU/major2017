<template>
  <div id="load" :class="{loaded:loaded}">
    <svg ref="svg"></svg>
  </div>
</template>
<script>
import * as d3 from 'd3'

export default {
  name: 'load',
  mounted() {
    d3_init(this.$el)
  },
  data() {
    return {
      msg: 'Welcome!',
    }
  },
  props: ['loaded'],
}


function d3_init(el) {

  const svg = d3.select(el).select('svg')

  let width, height, centerX, centerY

  resetCenter()

  function ballAttr(b) {
    b.attr('r', 5)
      .attr('cx', centerX)
      .attr('cy', 0)
      .attr('stroke-width', 0)
  }

  let ballp = svg
    .append('circle')
    .attr('fill', '#422372')
    .call(ballAttr)


  let ballg = svg
    .append('circle')
    .attr('fill', '#00c1bf')
    .call(ballAttr)


  function ballTransition(b, d) {
    b.transition()
      .duration(d)
      .ease(d3.easeBounceOut, 1)
      .attr('cy', centerY)
      // .attr('transform', 'scale(1, 0.7)')
      .transition()
      .duration(200)
      .attr('opacity', 0.1)
      // .attr('r', 10)
  }

  ballp
    .call(ballTransition, 700)


  ballg
    .call(ballTransition, 1200)


  function resetCenter() {

    width = window.innerWidth
    height = window.innerHeight
    centerX = width / 2
    centerY = height / 2

  }


  window.addEventListener('resize', function() {
    window.scrollTo(0, 1);
    resetCenter()

  }, true);



}
</script>
<style lang="scss" scoped>
#load {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0px;
  z-index: 100;
  background: white;
  transition: background 0.2s ease-out;
  &.loaded {
    background: rgba(0, 0, 0, 0)
  }
}

svg {
  width: 100%;
  height: 100%;
}
</style>
