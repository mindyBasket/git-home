import Vue from 'vue';

const sstore = scrollStore.utils;

Vue.component('card-body', {

  props:{
    templt: String,
  },
  data() {
    // component's data MUST BE A FUNCTION
    // (Unlike Vue instance)
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


Vue.component('work-cards', {

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
          scrollingParent: null, // too early to do: document.querySelector('#main_body'),
          wrapper_bg: 'rgba(255, 255, 255, 0)',
          decoration_opacity: '0',
          scrollRange: [],
          boxHeight: 0,
          testOutput: null,
	    }
	  }
    ,
    mounted(){
      // dom ref
      this.elShortSummary = this.$el.querySelector(".short_summary");
      document.querySelector('#main_body').addEventListener('scroll', this.getScrollPos);

      // calc range
      const viewHeight = window.innerHeight || document.documentElement.clientHeight;
      // const boxHeight = this.$el.getBoundingClientRect().bottom - this.$el.getBoundingClientRect().top;
      const boxHeight = this.$el.clientHeight;
      this.boxHeight = boxHeight;
      const minScrollPos = viewHeight + boxHeight; // position box just starts to enter
      const midScrollPos = viewHeight/2 + boxHeight/2; // position box is in the middle of viewPort
      const maxScrollPos = 0; // position box just went out of viewPort
      const padding = 100;
      this.scrollRange = [minScrollPos-padding, midScrollPos+padding, midScrollPos-padding, maxScrollPos+padding];
    }
    ,
  	methods: {
      getScrollPos: function(e){
        const currScrollPos = this.$el.getBoundingClientRect().bottom;
        
        const padding = this.scrollRange[3];
        const min = this.scrollRange[0];
        const midlow = this.scrollRange[1];
        const midhigh = this.scrollRange[2];
        const max = this.scrollRange[3];

        const diff = min - midlow;
        
        this.testOutput = `${currScrollPos} >= ${max}`;
        if (currScrollPos < min && currScrollPos >= midlow){
          // brighten
          const normalized = Math.round(10*((currScrollPos - min)*(-1)/diff))/10;
          this.wrapper_bg = `rgba(255, 255, 255, ${normalized})`;
          this.decoration_opacity = normalized;
          
        } else if (currScrollPos < midhigh && currScrollPos >= max ){
          // darken
          const normalized =  Math.round(10*(currScrollPos/diff))/10;
          this.wrapper_bg = `rgba(255, 255, 255, ${normalized})`;
          this.decoration_opacity = normalized;
        } else {
          // do nothing?
          return;
        }
  
        //sstore.sayHello();
      },
	  },
    template: `
    <div 
      class="work_card_wrapper"
    >
      <div class="work_card flex_row" 
        v-bind:class = "{
          'active': isActive,
          }"
        v-bind:index = "index"
        v-bind:style="{ backgroundColor: wrapper_bg }"
      >
        <div 
          class="content_left"
          v-bind:style="{ opacity: decoration_opacity }"
        ></div>
        <div class="content_right">
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
        

      </div>
    </div>
	`
});


const mainBody = document.querySelector('#main_body');
const workExpContainer = document.querySelector('#workexp');

// Binding event here does not let it fire
mainBody.addEventListener('scroll', (e) => {
  console.log("s");
  if (sstore.isInViewport(workExpContainer)) {
    console.log("s");
  }
  
}, false);
