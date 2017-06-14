<template>
  <div id="cover">
    <svg ref="svg"></svg>
  </div>
</template>
<script>
import * as d3 from 'd3'
import _ from 'lodash'

export default {
  name: 'cover',
  mounted() {
    d3_init(this.$el)
  },
  data() {
    return {
      msg: 'Welcome!',
    }
  }
}


/*============================
=            Data            =
============================*/


let data = _.shuffle([{
  zh: '資訊安全',
  en: '（Information Security）'
}, {
  zh: '公民參與',
  en: '（Citizen Participation）'
}, {
  zh: '開放資料',
  en: '（Open Data）'
}, {
  zh: '機器學習',
  en: '（Machine Learning）'
}, {
  zh: '社群',
  en: '（Community）'
}, {
  zh: '社會服務',
  en: '（Social Services）'
}, {
  zh: '物聯網',
  en: '（Internet of Things）'
}, {
  zh: '資料分析',
  en: '（Data Analysis）'
}, {
  zh: '消費者',
  en: '（Consumer）'
}, {
  zh: '資料視覺化',
  en: '（Data Visualization）'
}, {
  zh: '數位人文',
  en: '（Digital Humanities）'
}, {
  zh: '人工智慧',
  en: '（Artificial Intelligence）'
}, {
  zh: '虛擬實境',
  en: '（Virtual Reality）'
}, {
  zh: '教育',
  en: '（Education）'
}, {
  zh: '金融',
  en: '（Finance）'
}, ])

data.unshift({
  zh: '中心',
  en: '（Center）'
})

// console.log('data', data)

/*=====  End of Data  ======*/


function d3_init(el) {

  const svg = d3.select(el).select('svg')

  const color = d3.scaleOrdinal(d3.schemeCategory10)

  let width, height, centerX, centerY

  resetCenter()

  let center = svg
    .selectAll('g')
    .data(data)
    .enter()
    .filter((d, i) => i === 0)
    .append('g')
    .append('circle')
    .attr('r', 200)
    .attr('cx', centerX)
    .attr('cy', centerY)
    .attr('fill', 'white')
    // .attr('stroke', 'red')


  //draw circles for the nodes
  let nodes = svg
    .selectAll('g')
    .data(data)
    .enter()
    .append('g')
    .filter((d, i) => i !== 0)


  let nodeEvents = nodes
    .on('mouseover', function(d, i) {

      d3.select(this)
        .selectAll('circle')
        .transition()
        // .duration(300)
        // .ease(d3.easeBackIn, 4)
        .attr('r', 100)
        .attr('stroke-dasharray', 18, 2)
        .style('opacity', 0.03)


      d3.select(this)
        .selectAll('text')
        .transition()
        // .duration(500)
        .style('opacity', 0.4)

    })

  let circles = nodes
    .append('circle')
    .attr('r', 20)
    .attr('cx', centerX)
    .attr('cy', centerY)
    // .attr('fill', 'white')
    .attr('fill', (d, i) => color(i))
    .style('opacity', 0.08)
    .attr('stroke', 'gray')
    .attr('stroke-opacity', 0)
    // .attr('stroke-width', 2)


  function textAttr(t) {
    t.attr('fill', (d, i) => color(i))
      .attr('text-anchor', 'middle')
      .attr('font-size', 14)
      .style('opacity', 0)
  }

  let textsZh = nodes
    .append('text')
    .text((d) => d.zh)
    .call(textAttr)

  let textsEn = nodes
    .append('text')
    .text((d) => d.en)
    .call(textAttr)



  let force = d3
    .forceSimulation()
    .nodes(data)
    .force('charge', d3.forceManyBody()
      .strength((d, i) => i === 0 ? (-5 * height) : (width * -2))
      // .strength((d, i) => i === 0 ? (-3000) : (width * -2))
      // .strength(height * -1.5)
      // .strength(-2000)
      // .distanceMax(1000)
    )
    .force('center', d3.forceCenter(centerX, centerY))
    .force('x', d3.forceX())
    .force('y', d3.forceY())
    // .alphaTarget(1)
    // .alphaTarget(0.2)
    .alphaTarget(0.4)
    .on('tick', ticked)
    // .stop()

  function ticked() {

    resetCenter()

    // center
    //   .attr('x', centerX)
    //   .attr('y', centerY)

    circles
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)

    textsZh
      .attr('dx', (d) => d.x)
      .attr('dy', (d) => d.y - 10)

    textsEn
      .attr('dx', (d) => d.x)
      .attr('dy', (d) => d.y + 10)

  }

  function resetCenter() {

    width = window.innerWidth
    height = window.innerHeight
    centerX = width / 2
    centerY = height / 2
      // centerY = height / 2 - 90


  }


  // setInterval(() => {

  //   force.restart()
  //   console.log('interval')

  // }, 1000)


  window.addEventListener('resize', function() {
    window.scrollTo(0, 1);
    resetCenter()
    force.force('center', d3.forceCenter(centerX, centerY))

  }, true);



}
</script>
<style lang="scss" scoped>
#cover {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0px;
  z-index: -1;
}

svg {
  width: 100%;
  height: 100%;
}

// @media style
$mobile: "(max-width: 767px)";
$tablet: "(min-width: 768px) and (max-width: 1023px)";
$desktop: "(min-width: 1024px)";
</style>
