import Vue from 'vue';

Vue.component('rendered-long-summary', {
  props:{
    templt: String,
  },
  mounted(){
  }
  ,
  template: `<div v-html="templt"></div>`
});

Vue.component('project-card', {

    props:{
      // Keep these lowercase
    	proj: Object,
      index: Number, // order of project at the moment. This is NOT a key.
      depressnow: Number
  	},
  	data() {
	    return {
          projTitle: "",

          isActive: false,
          isOpened: false,

          elShortSummary: null,

          elStyle: null,
          defaultHeight: null,

          toid_showSummary: null,
          to_hideSummary: null,
	    }
	  }
    ,
    mounted(){
      // dom ref
      this.elShortSummary = this.$el.querySelector(".short_summary");

      // add style info
      // Note: getComputedStyle properties come with units like "px"
      this.elStyle = getComputedStyle(this.$el);
      this.defaultHeight = this.elStyle.height;

      // Update title, for reference
      this.projTitle =  this.proj.title.replace(/ /g,'');
    },

    watch: { 
      depressnow: function(newVal, oldVal) { // watch it
        if (newVal > oldVal){
          // "depress" the card button by setting it inactive
          this.isActive = false; 
          setTimeout(() => { console.log("remove Opened"); this.isOpened = false; }, 300);
          
        }
      }
    },

  	methods: {
	  	toggleCard: function(){

        this.isActive = !this.isActive; 
        this.isOpened = true;

        // TODO: uncomment when done
        store.openModal(this.proj.title, this.proj.longSummary);

	  	}
	  },
  	template: `
		<div class="card_project" 
			 v-on:click="toggleCard"
			 v-bind:class = "{
         'active': isActive,
         'opened': isOpened 
        }"
       v-bind:index = "index">
			<div class="thumbnail">
				<img src=""/>
			</div>
			<div class="title">{{proj.title}}</div>

      <div class="tags flex_row wrap">
          <span v-for="tag in proj.tags">{{tag}}</span>
        </div>
			<div class="short_summary">
				<div class="summary">{{proj.shortSummary}}</div>
      </div>
      
		</div>
	`

		
});


