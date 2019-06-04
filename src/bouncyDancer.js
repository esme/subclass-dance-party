var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  
  var instanceThis = this;
  var oldStep = this.step;

  this.step = function() {
    oldStep.call(instanceThis);
    doBounce($(instanceThis.$node), 3, '30px', 500);
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