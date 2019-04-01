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
      <a class="logo">Mindy Jang</a>
    </div>
    
    <div class="group flex_row">
      <a>About</a>
      <a>Work</a>
      <a>Projects</a>
      <a>Ice Breakers</a>
      <a>Contact</a>
      <a>Resume</a>
    </div>

  </div>

</template>
