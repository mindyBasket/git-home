// "if your app is simple, you will most likely be fine without Vuex. 
// A simple store pattern may be all you need."

// In the future, I decide to build something more medium-to-large-scale SPA,
// I will have to check out Vuex for state management: https://vuex.vuejs.org/

const store = {
  debug: true,
  state: {
    content: '', // string content or template
    contentData: {}, // JSON object to be rendered
    title: '',
    lightboxIsActive: false,
    headerDetached: false,

    depressNow: 0, 
  },
  closeModal() {
    this.state.lightboxIsActive = false;

    // Note: any variable I set with "Now" is a prop used to 
    //       force rerender by incrementing. 
    this.state.depressNow = this.state.depressNow+1;
  },
  openModal(title, contentObj) {
    this.state.lightboxIsActive = true;
    // this.state.content = content; // not using this for nwo
    this.state.contentData = contentObj; // this is longSummaryData
    this.state.title = title;
  },
  detachHeader(doDetach){
    doDetach = (doDetach === null || doDetach === undefined) ? true : doDetach;
    if (doDetach){
      this.state.headerDetached = true;
    } else {
      this.state.headerDetached = false;
    }
  },

  sayHello() {
    console.log("Hello from the store!");
  }
}
