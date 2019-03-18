// "if your app is simple, you will most likely be fine without Vuex. 
// A simple store pattern may be all you need."

// In the future, I decide to build something more medium-to-large-scale SPA,
// I will have to check out Vuex for state management: https://vuex.vuejs.org/

const store = {
  debug: true,
  state: {
    message: 'Hello!',
    lightboxIsActive: true,
  },
  setBodyScroll(isVisible) {
    document.querySelector('body').style.overflowY = isVisible ? "scroll" : "hidden";
  },
  closeModal() {
    this.setBodyScroll(true);
    this.state.lightboxIsActive = false;
  },
  openModal() {
    this.setBodyScroll(false);
    this.state.lightboxIsActive = true;
  },
  setMessageAction(newValue) {
    if (this.debug) console.log('setMessageAction triggered with', newValue)
    this.state.message = newValue
  },
  clearMessageAction() {
    if (this.debug) console.log('clearMessageAction triggered')
    this.state.message = ''
  },
  sayHello() {
    console.log("Hello from the store!");
  }
}
