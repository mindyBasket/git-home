// "if your app is simple, you will most likely be fine without Vuex. 
// A simple store pattern may be all you need."

// In the future, I decide to build something more medium-to-large-scale SPA,
// I will have to check out Vuex for state management: https://vuex.vuejs.org/

const store = {
  debug: true,
  state: {
    content: '',
    title: '',
    lightboxIsActive: false,

    depressNow: 0, 
  },
  closeModal() {
    this.state.lightboxIsActive = false;

    // Note: any variable I set with "Now" is a prop used to 
    //       force rerender by incrementing. 
    this.state.depressNow = this.state.depressNow+1;
  },
  openModal(title, content) {
    this.state.lightboxIsActive = true;
    this.state.content = content;
    this.state.title = title;
  },
  sayHello() {
    console.log("Hello from the store!");
  }
}
