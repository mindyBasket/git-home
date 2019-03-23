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
      <span class="logo">Mindy Jang</span>
    </div>
    
    <div class="group flex_row">
      <span>About</span>
      <span>Work</span>
      <span>Projects</span>
      <span>Ice Breakers</span>
      <span>Contact</span>
      <span>Resume</span>
    </div>

  </div>

</template>
