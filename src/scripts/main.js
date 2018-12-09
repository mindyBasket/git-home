console.log("Script loaded");

//var local_data = data;
//console.log(JSON.stringify(local_data));

var vm = new Vue({
  el: '#projects1',
  data: {
  	projects: projects,
  	isActive: false
  },

  methods: {
  	openCard: function(){
  		this.isActive = !this.isActive;
  	}
  }

})