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
      },
      skillIsSmall: function(skillNameData){
        if(Array.isArray(skillNameData)){
            return skillNameData[1];
        } else {
          return false;
        }
      },

      /**
       * Some skills are divided into part 1 and 2 due to their length. 
       * They are rendered separately, but styled as if they are one container.
       */
      checkIfPart: function (skillobj, partNum){
        if ('part' in skillobj){
          if(skillobj.part==partNum){
            return true;
          } else {
            return false;
          }
        }
      },
    },
    
  }
</script>


<template>
  <div 
    class="subskill_group flex_column"
    v-bind:class = "{
      'is_part1': checkIfPart(skillobj, 1),
      'is_part2': checkIfPart(skillobj, 2)
    }"
  >
    <div 
      class="subskill_title"
      v-html="skillobj.title"
    />
    <ul class="subskill_content">
      <li 
        v-for="(skill, ind) in skillobj.skillList"
        v-bind:class = "{
          'is_small': skillIsSmall(skill)
        }"
        v-bind:skillobj="skill"
        v-bind:index="ind"
        v-bind:key="`${skill.title}_${ind}`"
      >
        {{getDisplayName(skill)}}
      </li>
    </ul>
  </div>
</template>
