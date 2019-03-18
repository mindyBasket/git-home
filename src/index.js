import Vue from 'vue';

// JSON data
import projectData from './data/data_projects';
import workExperienceData from './data/data_works';

// Components
import * as Projects from './components/Projects';
import * as WorkExperiences from './components/WorkExperiences';
import Lightbox from './components/Lightbox.vue';

// Main app. 
var vm = new Vue({
  el: '#main_body',
  data: {
    projectData: projectData,
    workExperienceData: workExperienceData,
    rootState: store.state,
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
    duplicateProjObj: function (ind) {
      const copyProj = JSON.parse(JSON.stringify(this.projectData.projects[ind]));
      copyProj.title = copyProj.title + this.getRandBase64(10);
      copyProj.isFiller = true;
      return copyProj;
    },
    addFiller: function (ind) {
      // check if card is even
      console.log((ind + 1) % 2);
      const fillerProj = this.duplicateProjObj(ind);
      if ((ind + 1) % 2 == 0) {
        console.log("EVENs");
        this.projectData.projects.splice(ind, 0, fillerProj);

      } else {
        this.projectData.projects.splice(ind + 1, 0, fillerProj);
      }

      // Don't do this. Elements are not rendered yet!
      // return document.querySelectorAll(".project")[ind];

    },
    fitFiller: function (id) {
      // Stage before removing filler. The filler container's width is
      // reduced to fit between existing card. This way, when it is removed,
      // v-transition animates position properly.
      document.querySelectorAll(`#${id}`).forEach((el) => {
        el.style.width = "30%";
      });


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
  render: h => h(Lightbox, { 
    props: { 
      rootState: store.state } 
    })
})