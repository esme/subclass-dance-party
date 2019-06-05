var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  
  var oldStep = this.step.bind(this);
  var context = this;

  this.step = function() {
    oldStep();
    doBounce(context.$node, 5, '30px', 500);
  };

  this.$node = $('<span class="dancerfix"><span class="dancer bouncyDancer"></span></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);
};

var doBounce = function (element, times, distance, speed) {
  for (i = 0; i < times; i++) {
    element.animate({marginTop: '-=' + distance}, speed)
      .animate({marginTop: '+=' + distance}, speed);
  }
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;