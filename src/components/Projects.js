import Vue from 'vue';

Vue.component('project-card', {

    props:{
    	proj: Object,
    	index: Number // order of project at the moment. This is NOT a key.
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
    }
    ,
  	methods: {
      
      // transition hooks
      longSum_enter: function(el, done){

        // hide short summary. 
        // Its opacity is set to 0 upon click of the card
        this.elShortSummary.style.height = "0px";

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
        this.elShortSummary.style.height = "auto";
        done();
      }
      ,
	  	toggleCard: function(){
        this.isActive = !this.isActive; 

        // clearTimeout(this.to_showSummary);
        // this.isOpened=false;

        // vm.fitFiller(this.projTitle); // fit into a card's position
        // this.to_hideSummary = setTimeout(()=>{ 
        //   console.log("DELETE");
        //   vm.removeCurrFiller();
        // }, 100);

	  		// 	vm.addFiller(this.index);
        //   const delay = 500; // > $el's duration + $width-expand-dur
        //   // Note: I wanted the delay to be a bit shorter, but the height
        //   //       translation something do not occur. When it is exact match, it is okay.
        //   this.to_showSummary = setTimeout(()=>{ 
        //     this.isOpened = true; // show long summary
        //     const fillerElem = document.querySelector(`.project[index="${this.index+1}"]`);
        //           fillerElem.setAttribute("id", this.projTitle);
        //   }, delay);
	  		// }
	  
	  	}
	  },
  	template: `
		<div class="card_project" 
			 v-on:click="toggleCard"
			 v-bind:class = "{
         'active': isActive, 
         'hidden': proj.hasOwnProperty('isHidden') ? true : false}"
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


