
<script>
  module.exports = {
    props: ['rootstate'],
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
      'active': rootstate.lightboxIsActive,
    }"
  >
    <div 
      class="modal"
      v-on:click="onModalClick($event)">
      <div class="image_header flex_row">
        <span class="image_item"><img src="dist/img/proj1/img01.png"/></span>
        <span class="image_item"><img src="dist/img/proj1/img02.png"/></span>
      </div>
      <div class="modal_unit title">{{ this.rootstate.title }}</div>
      <div class="modal_unit content">
        <!-- Rendering from longSummaryData. Check Store.js -->
        <div>
          <p
            class="description" 
            v-html="this.rootstate.contentData.projectDescription">
          </p>
        </div>
        <div class="flex_row">
          <div class="box">
            <div class="content_unit">
              <div class="section_title flex_row">
                <span class="title_icon fas fa-cube" />Role Highlights:
              </div>
              <div v-html="this.rootstate.contentData.roleHighlights"></div>
            </div>
            <div class="content_unit">
              <div class="section_title">
                <span class="title_icon fas fa-puzzle-piece" />Notable Challenges:
              </div>
              <div v-html="this.rootstate.contentData.notableChallenges"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  
</template>
