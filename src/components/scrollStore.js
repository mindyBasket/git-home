

export const utils = { 

  elemArr: [],

  sayHello: function() {
    console.log("Hello world!");
  },

  
  isInViewport: function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },

  addToScrollEvent: () => {
    this.elemArr.push['a'];
  }
};