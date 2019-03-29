
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
    computed: {
      // a computed getter
      longSummaryData: function () {
        // `this` points to the vm instance
        if ('contentData' in this.rootstate && 'longSummaryData' in this.rootstate.contentData){
          return this.rootstate.contentData.longSummaryData;
        }
        return {};
      },
      projId: function () {
        if ('contentData' in this.rootstate && 'id' in this.rootstate.contentData){
          return this.rootstate.contentData.id;
        }
        return {};
      },
      imgPathArr: function () {
        const getImagePath = (extMap, ind) => {
          if (extMap == null || extMap[ind] == null) {
            return `dist/img/${this.projId}/img${ind}.png`;
          } else {
            return `dist/img/${this.projId}/img${ind}.${extMap[ind]}`;
          }
        };

        if ('contentData' in this.rootstate && 'imgCount' in this.rootstate.contentData){
          // make array
          const contentData = this.rootstate.contentData;
          const imgCount = this.rootstate.contentData.imgCount;
          const emptyArr = (new Array(imgCount)).fill(null);
          const imgNameArr = emptyArr.map((n, ind)=>{
            return getImagePath('imgExtMap' in contentData ? contentData.imgExtMap : null, ind);
          });
          // console.info(imgNameArr);
          return imgNameArr;
        }
        return {};
      }
    },
    methods: {
      onLightboxClick: function() {
        // The state changed in the store is updated in $root's data.
        // Then, it is passed as a prop to this component, triggering update.
        store.closeModal();  

      },
      closeModal: function() {
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
      <div 
        class="image_header flex_row"
        v-if="this.imgPathArr.length > 0"
      >
        <span 
          class="image_item"
          v-for="(imgPath, ind) in this.imgPathArr"
          v-bind:key="ind"
        >
          <img v-bind:src="imgPath" /> 
        </span>
        <div 
          class="close_btn"
          v-on:click="closeModal()"
        >
        </div>
      </div>
      <div class="modal_unit title">{{ this.rootstate.title }}</div>
      <div class="modal_unit content">
        <!-- Rendering from longSummaryData. Check Store.js -->
        <div>
          <p
            class="description" 
            v-html="this.longSummaryData.projectDescription">
          </p>
        </div>
        <div class="flex_row">
          <div class="box">
            <div
              v-if="this.longSummaryData.roleHighlights"
              class="content_unit"
            >
              <div class="section_title flex_row">
                <span class="title_icon fas fa-cube" />Role Highlights:
              </div>
              <div v-html="this.longSummaryData.roleHighlights"></div>
            </div>

            <div
              v-if="this.longSummaryData.featureHighlights"
              class="content_unit"
            >
              <div class="section_title flex_row">
                <span class="title_icon fas fa-star" />Key Features: 
              </div>
              <div v-html="this.longSummaryData.featureHighlights"></div>
            </div>

            <div
              v-if="this.longSummaryData.notableChallenges" 
              class="content_unit challenges"
            >
              <div class="section_title">
                <span class="title_icon fas fa-puzzle-piece" />Notable Challenges:
              </div>
              <div v-html="this.longSummaryData.notableChallenges"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  
</template>
