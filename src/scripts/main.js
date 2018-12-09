console.log("Script loaded");

//var local_data = data;
//console.log(JSON.stringify(local_data));



// Note: components must come first before "new Vue"


Vue.component('project-card', {

    props:{
    	proj: Object
  	},
  	data() {
	    return {
	      	isActive: false
	    }
	},
  	methods: {
	  	openCard: function(){
	  		this.isActive = !this.isActive;
	  	}
	},
  	template: `
		<div class="card project" 
			 v-on:click="openCard"
			 v-bind:class="{ 'active': isActive }">

			<div class="thumbnail">
				<img src=""/>
			</div>
			<div class="title">{{proj.title}}</div>

			<div class="short_summary">
				<div class="summary">{{proj.shortSummary}}</div>
				<div class="tags flex_row wrap">
					<span v-for="tag in proj.tags">{{tag}}</span>
				</div>
			</div>
			<div class="long_summary">{{proj.longSummary}}</div>
		</div>
	`

		
});


var vm = new Vue({
  el: '#projects1',
  data: {
  	projectData: projectData,
  	isActive: false
  },

  methods: {
  	openCard: function(){
  		this.isActive = !this.isActive;
  	}
  }

});