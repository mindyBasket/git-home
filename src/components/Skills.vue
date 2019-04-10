<script>
  // .vue usage note:
  // It doesn't like name like "HeaderGhost" or "LightBox". ONLY ONE CAP ALLOWED.
  // ex. "Headerghost", "Lightbox"
  module.exports = {
    props:{
      // Keep these lowercase
    	skillobj: Object,
      index: Number, // order of project at the moment. This is NOT a key.
  	},
  	data() {
	    return {
          skillTitle: "",
	    }
    },
    computed: {
      skillDisplaySize: function (){
        return "TODO";
      },
    },
    mounted(){
      // Update title, for reference
      // this.projTitle =  this.proj.title.replace(/ /g,'');
    },

  	methods: {
	  	getDisplayName: function(skillNameData){
        // it can be an array
        if(Array.isArray(skillNameData)){
          return skillNameData[0];
        }
        return skillNameData;
      }
	  },
  }
</script>


<template>
  <div class="subskill_group flex_column">
    <div class="subskill_title ">
      {{skillobj.title}}
    </div>
    <ul class="subskill_content">
      <li 
        v-for="(skill, ind) in skillobj.skillList"
        v-bind:skillobj="skill"
        v-bind:index="ind"
        v-bind:key="`${skill.title}_${ind}`"
      >
        {{getDisplayName(skill)}}
      </li>
    </ul>
  </div>
</template>
