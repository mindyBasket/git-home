<script>
  // .vue usage note:
  // It doesn't like name like "HeaderGhost" or "LightBox". ONLY ONE CAP ALLOWED.
  // ex. "Headerghost", "Lightbox"

  module.exports = {
    props: {
      rootstate: Object
    },
    data: function () {
      return {
        active: false,
      }
    },
    mounted: function () {
      
      
    },
  }
</script>

<template>
  <div 
    id="portfolio_header"
    class="header flex_row space_between"
    v-bind:class = "{
      'detached': rootstate.headerDetached,
    }"
  >
    <div class="group">
      <a class="logo" href="#intro">Mindy Jang</a>
      <a class="resume">Resume</a>
    </div>
    
    <div class="group flex_row">
      <a href="#aboutme">About</a>
      <span>/</span>
      <a href="#workexp">Work</a>
      <span>/</span>
      <a href="#projects">Projects</a>
      <span>/</span>
      <a href="#activities">Activities</a>
      <span>/</span>
      <a href="#contact">Contact</a>
      
    </div>

  </div>

</template>
