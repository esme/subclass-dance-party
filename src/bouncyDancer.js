var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  
  var instanceThis = this;
  var oldStep = this.step;

  this.step = function() {
    this.timeBetweenSteps = timeBetweenSteps;
    oldStep.call(instanceThis);
    this.$node = $('<span class="dancerfix"><span class="dancer bouncyDancer"></span></span>');
    doBounce(this.$node, 3, '30px', 500);
  };

  makeDancer.call(this, top, left, timeBetweenSteps);
};
  

function doBounce(element, times, distance, speed) {
  for(i = 0; i < times; i++) {
      element.animate({marginTop: '-='+distance},speed)
          .animate({marginTop: '+='+distance},speed);
  }        
}

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;