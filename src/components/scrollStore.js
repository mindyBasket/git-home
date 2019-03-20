

export const utils = { 

  elemArr: [],

  sayHello: function() {
    console.log("Hello world!");
  },

  
  isInViewport: function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  },

  addToScrollEvent: () => {
    this.elemArr.push['a'];
  }
};