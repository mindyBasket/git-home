import Vue from 'vue';

// JSON data
import projectData from './data/data_projects';
import workExperienceData from './data/data_works';
import activityData from './data/data_activities';
import skillData from './data/data_skills';

// Components
import * as Projects from './components/Projects';
import * as WorkExperiences from './components/WorkExperiences';
import * as Activities from './components/Activities';

// Single file components
import Projectpopup from './components/Projectpopup.vue';
import Titlebox from './components/Titlebox.vue';
import Headermenu from './components/Headermenu.vue';
import Skills from './components/Skills.vue';

const ESCAPE_HEIGHT = 70; //px

// Main app. 
var vm = new Vue({
  el: '#main_body',
  data: {
    projectData: projectData,
    workExperienceData: workExperienceData,
    activityData: activityData,
    skillData: skillData,
    rootState: store.state,
  },
  components: { 
    Titlebox,
    Headermenu,
    "skill-card": Skills,
  },
  mounted: function(){
    const mainBody = document.querySelector('#main_body');
    const header = document.querySelector('#portfolio_header');
    

    if (mainBody && header){
      mainBody.addEventListener('scroll', (e) => {
        if (mainBody.scrollTop >= ESCAPE_HEIGHT){
          // Detach header (style, not actually detached)
          store.detachHeader();
        } else {
          // Attach header
          store.detachHeader(false);
        }
      }, false);
    }
  },
  methods: {
    sayHello: function (el, done) {
      done();
    },
    getRandBase64: function (length) {
      const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let resultCode = '';
      for (let i = 0; i < length; i++) {
        resultCode += chars[Math.floor(Math.random() * chars.length)];
      }
      return resultCode
    },
    filler_afterEnter: function (el) {
      /* previously used to shrink filler card after being inserted 
         but not used by changing strategy. */
    },
    removeCurrFiller: function () {
      const targetInd = Number(document.querySelector(".project.filler").getAttribute("index"));
      //console.log(targetInd);
      if (targetInd != null || targetInd === undefined) {
        //console.log(`Remove filler at ${targetInd}`);
        this.projectData.projects.splice(targetInd, 1);
      }

    }
  }

});

// Lightbox. Render from .vue file, which has a different format
// TODO: This is my first attempt at using .vue file. See if it works well, and 
//       convert other components to .vue
const vm_lb = new Vue({
  el: '#modal_wrapper',
  data: {

  },
  methods: {
    sayHello: function(){
      console.log("Hello from #modal_wrapper!");
    }
  },
  render: h => h(Projectpopup, { 
    props: { 
      rootstate: store.state } 
    })
})
