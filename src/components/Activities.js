import Vue from 'vue';

Vue.component('activity-card', {

    props:{
      // Keep these lowercase
    	act: Object,
      index: Number, // order of project at the moment. This is NOT a key.
  
  	},
  	data() {
	    return {
          projTitle: "",
	    }
	  }
    ,
    mounted(){
      // Update title, for reference
      // this.projTitle =  this.proj.title.replace(/ /g,'');
    },

  	methods: {
      test: function() {
      }
	  },
  	template: `
    <div 
      class="card_activity_wrapper flex_row" 
			v-bind:class = "{
        'indent': (index%2) == 1,
      }"
    >
      <div class="card_activity">
        <div class="title">{{ act.title }}</div>
        <div class="summary">
          {{ act.description }}
        </div>
      </div>
			
		</div>
	`
});

