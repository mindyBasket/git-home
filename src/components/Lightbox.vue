
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
      <h1>{{ greeting }} World!</h1>

      <h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at tortor vel risus tincidunt tincidunt. Maecenas blandit, felis at vehicula interdum, diam arcu iaculis erat, vel iaculis elit augue nec lacus. Proin eget mi vitae mi interdum ultricies. Donec pulvinar dui a nisl laoreet, et auctor arcu volutpat. Sed vulputate augue eu mauris fermentum, non condimentum urna euismod. Maecenas tortor dui, commodo sit amet pulvinar sit amet, facilisis at sem. Etiam laoreet, quam ut rutrum luctus, nunc odio volutpat nulla, ac fringilla felis orci at elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed et dolor aliquet, euismod justo non, posuere magna. Maecenas justo ante, dapibus at justo vel, commodo congue justo.

Maecenas venenatis quam eleifend purus rutrum, vitae convallis ligula finibus. Vestibulum venenatis dictum quam sit amet euismod. Duis finibus interdum mauris, ut elementum lectus malesuada ac. Nunc pellentesque posuere sapien ut malesuada. Sed fringilla fermentum gravida. Donec dignissim sapien massa, ut molestie tellus hendrerit id. Vestibulum a felis eu sem lacinia eleifend in sit amet augue. Mauris ullamcorper sed libero ac tempor. Cras ex dolor, accumsan at quam vel, fermentum feugiat purus. Phasellus mattis euismod est id dapibus. Integer in erat non elit varius mollis sed at leo. Duis imperdiet congue lacus, quis viverra lorem feugiat hendrerit. Donec et laoreet turpis. Fusce scelerisque accumsan ante, in tempus lorem eleifend vel. Integer dignissim ullamcorper condimentum.
      </h2>
    </div>
    
  </div>
  
</template>
