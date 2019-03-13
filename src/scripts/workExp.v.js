console.log("Vue script for work experience section loaded");

// Note: components must come first before "new Vue"


Vue.component('card-body', {

  props:{
    templt: String,
  },
  data() {
    return {
        isActive: false,
    }
  }
  ,
  mounted(){

  }
  ,
  template: `<div v-html="templt"></div>`
});


Vue.component('timeline-cards', {

    props:{
      // HTML names are case IN-sensitive. Keep them lowercase
    	workobj: Object,
    	index: Number // order of project at the moment. This is NOT a key.
  	},
  	data() {
      // component's data MUST BE A FUNCTION
      // (Unlike Vue instance)
	    return {
          label: "",
          isActive: false,
          elShortSummary: '',
	    }
	  }
    ,
    mounted(){
      // dom ref
      this.elShortSummary = this.$el.querySelector(".short_summary");
    }
    ,
  	methods: {
    
      // transition hooks
      longSum_enter: function(el, done){
        done();
      }
      ,
      longSum_leave: function(el, done){
        this.$el.style.height = this.defaultHeight;
        this.elShortSummary.style.height = "auto";
        done();
      },
      
	  	clickTest: function(){

	  		vm.addFiller(this.index);
	  		this.isActive = !this.isActive;
	  	}
	  },
  	template: `
		<div class="work_card" 
			 v-on:click="clickTest"
			 v-bind:class = "{
         'active': isActive,
         }"
       v-bind:index = "index">

      <div class="card_head flex_row">
        <div class="role">
          <div class="role_name">
            {{workobj.role}}
          </div>
          <div class="role_company">
            {{workobj.company}}
          </div>
        </div>
        <div class="year">
          <span>{{workobj.year[0]}}</span>
          <span>-</span>
          <span>{{workobj.year[1]}}</span>
        </div>
      </div> <!-- end: header -->
        
      <card-body v-bind:templt="workobj.description">
        {{workobj.description}}
      </card-body>
      
      <div class="tags flex_row wrap">
        <span v-for="tag in workobj.tags">{{tag}}</span>
      </div>

		</div>
	`

		
});


var vm = new Vue({
  el: '#workexp',
  data: {
  	workExperienceData: workExperienceData,
  	isActive: false
  },

  methods: {
    sayHello: function(el, done){
      done();
    }
  },

});

