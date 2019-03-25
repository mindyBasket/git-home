import Vue from 'vue';

// Vue.component('rendered-long-summary', {
//   props:{
//     templt: String,
//     longSummaryData: Object,
//   },
//   mounted(){
//   }
//   ,
//   template: `<div v-html="templt"></div>`
// });

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
    },
    computed: {
      imgPath: function (){
        return `dist/img/${this.proj.id}_thumb.jpg`;
      },
    },
    mounted(){
      // Update title, for reference
      // this.projTitle =  this.proj.title.replace(/ /g,'');
    },

    watch: { 
      depressnow: function(newVal, oldVal) { // watch it
        if (newVal > oldVal){
          // "depress" the card button by setting it inactive
          this.isActive = false; 
          setTimeout(() => { this.isOpened = false; }, 300);
          
        }
      }
    },

  	methods: {
	  	toggleCard: function(){

        this.isActive = !this.isActive; 
        this.isOpened = true;

        if ("longSummaryData" in this.proj) {
          // content data sent here is stored in Store.contentData
          store.openModal(this.proj.title, this.proj);
        } else {
          //store.openModal(this.proj.title, this.proj.longSummary);
          console.warn("longSummaryData not found in the project object!");
        }
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
        <img v-bind:src="imgPath" /> 
      </div>
      <div class="card_content">
        <div class="title">{{proj.title}}</div>
        <div class="short_summary">
          <div class="summary">{{proj.shortSummary}}</div>
        </div>
        <div class="tags flex_row wrap">
          <span v-for="tag in proj.tags">{{tag}}</span>
        </div>
      </div>
		</div>
	`

		
});

