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
        isActive: false,
      }
    },
    mounted: function () {
    },
    methods: {
      toggleMenu: function () {
        this.isActive = !this.isActive;
      }
    }
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
      <a class="resume visible_normal">Resume</a>
    </div>
    
    <div class="group visible_normal flex_row">
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
    
    <div class="group visible_mobile">
      <a 
        id="open_menu_btn"
        class="fas fa-bars"
        v-on:click="toggleMenu">
      </a>
    </div>

    <div 
      class="lightbox light"
      v-bind:class = "{
        'active': isActive
      }"
      v-on:click = "toggleMenu"
    >
    </div>

    <div 
      id="toggle_menu"
      class="flex_column"
      v-bind:class = "{
         'active': isActive
        }"
    >
      <a v-on:click= "toggleMenu" href="#aboutme" >About</a>
      <a v-on:click= "toggleMenu" href="#workexp">Work</a>
      <a v-on:click= "toggleMenu" href="#projects">Projects</a>
      <a v-on:click= "toggleMenu" href="#activities">Activities</a>
      <a v-on:click= "toggleMenu" href="#contact">Contact</a>
      <a v-on:click= "toggleMenu" class="resume">Resume</a>
    </div>

  </div>

</template>
