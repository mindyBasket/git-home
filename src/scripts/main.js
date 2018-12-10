console.log("Script loaded");

//var local_data = data;
//console.log(JSON.stringify(local_data));



// Note: components must come first before "new Vue"

Vue.component('long-summary', {

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
      console.log("Created");
      console.log(this.templt);
    }
    ,
    template: `<div v-html="templt"></div>`
});




Vue.component('project-card', {

    props:{
    	proj: Object,
    	index: Number // order of project at the moment. This is NOT a key.
  	},
  	data() {
	    return {
	      	isActive: false,
          isOpened: false,

          elStyle: null,
          defaultHeight: null,

          to_showSummary: null,
	    }
	  }
    ,
    mounted(){
      // add style info
      // Note: getComputedStyle properties come with units like "px"
      this.elStyle = getComputedStyle(this.$el);
      this.defaultHeight = this.elStyle.height;
    }
    ,
  	methods: {
      
      // transition hooks
      longSum_enter: function(el, done){

        //el.style.opacity = 1;

        // Quickly turn card to height:auto to get the full height
        this.$el.style.height = 'auto';
        const expandHeight = getComputedStyle(this.$el).height; 

        this.$el.style.height = this.defaultHeight;
        console.log(`Defaulted to ${this.$el.style.height}`);
        // Trigger the animation: use `setTimeout` to make sure the element finished
        // painting after setting height back to defaultHeight
        setTimeout(() => {
          this.$el.style.height = expandHeight;
          console.log(`Expand to ${expandHeight}`);
        });

        done();
      }
      ,
      longSum_leave: function(el, done){
        this.$el.style.height = this.defaultHeight;
        done();
      }
      ,
	  	openCard: function(){
	  		if (this.isActive){
	  			vm.removeCurrFiller();
          clearTimeout(this.to_showSummary);
          this.isOpened=false;

	  		} else { 
	  			vm.addFiller(this.index);
          //clearTimeout(this.to_showSummary);
          const delay = 680; // $v-tran-dur + $el's duration
          // Note: I wanted the delay to be a bit shorter, but the height
          //       translation something do not occur. When it is exact match, it is okay.
          this.to_showSummary = setTimeout(()=>{ console.log("show summary"); this.isOpened = true; }, delay);
	  		}
	  		this.isActive = !this.isActive;
	  	}
	  },
  	template: `
		<div class="card project" 
			 v-on:click="openCard"
			 v-bind:class = "{'active': isActive, 'filler' : proj.hasOwnProperty('isFiller') ? proj.isFiller : false, 'hidden': proj.hasOwnProperty('isHidden') ? true : false}"
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

      <transition name="toggle-long-summary"
                  v-on:enter="longSum_enter"
                  v-on:leave="longSum_leave">
        <div class="long_summary"
             v-if="isOpened"
             >
          <long-summary v-bind:templt="proj.longSummary">
            {{proj.longSummary}}
          </long-summary>

        </div>
      </transition>
			
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
    getRandBase64: function(length){
        const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let resultCode = '';
        for(let i=0; i<length; i++){
            resultCode+=chars[Math.floor(Math.random() * chars.length)];
        }
      return resultCode
    },
  	filler_afterEnter: function(el){
      /* shrink filler card after being inserted */
  		el.className += " shrink";
  	},
  	duplicateProjObj: function(ind){
  		const copyProj = JSON.parse(JSON.stringify(this.projectData.projects[ind]));
  			    copyProj.title =copyProj.title+this.getRandBase64(10);
  			    copyProj.isFiller=true;
  		return copyProj;
  	},
  	addFiller: function (ind) {
  		//console.log("Add filler");
      this.projectData.projects.splice(ind+1, 0, this.duplicateProjObj(ind) );
    },
    removeCurrFiller: function () {
    	const targetInd = Number(document.querySelector(".project.filler").getAttribute("index"));
    	//console.log(targetInd);
    	if (targetInd != null || targetInd === undefined){
    		//console.log(`Remove filler at ${targetInd}`);
    		this.projectData.projects.splice(targetInd, 1);
    	}
      	
    }
  }

});

