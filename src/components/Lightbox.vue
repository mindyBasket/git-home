
<script>
  module.exports = {
    props: ['rootState'],
    data: function () {
      return {
        greeting: 'Hello',
        // NO!: isActive: store.state.lightboxIsActive,
        // NO!: isActive: rootState.lightboxIsActive,
        // NO!: isActive: state.lightboxIsActive,
      }
    },
    methods: {
      onLightboxClick: function() {
        console.log("Lightbox clicked");
        // The state changed in the store is updated in $root's data.
        // Then, it is passed as a prop to this component, triggering update.
        store.closeModal();  

      },
      onModalClick: (e) => {
        e.stopPropagation();
      }
    }
  }
</script>

<template>
  <div 
    class="lightbox flex_column"
    v-on:click="onLightboxClick"
    v-bind:class = "{
      'active': rootState.lightboxIsActive,
    }"
  >
    <div 
      class="modal"
      v-on:click="onModalClick($event)">

      <div class="modal_unit title">{{ this.rootState.title }}</div>
      <div class="modal_unit content" v-html="this.rootState.content"></div>

    </div>
  </div>
  
</template>
