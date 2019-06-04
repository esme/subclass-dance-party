var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  
    var instanceThis = this;
    var oldStep = this.step;
  
    this.step = function() {
        oldStep.call(instanceThis);
        var styleSettings = {
            top: 10,
            left: 20
          };
        instanceThis.$node.animate({
            opacity: 0.25,
            left: "+=50",
            height: "toggle"
          }, 5000);
    };

    makeDancer.call(this, top, left, timeBetweenSteps);
  };
  
  makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
  makeBouncyDancer.prototype.constructor = makeBouncyDancer;