var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var instanceThis = this;
  var oldStep = this.step;
  // var oldStep = this.step.bind(this);

  this.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    // console.log(this.$node, '4 makeBlinky step');

    // oldStep();
    oldStep.call(instanceThis);

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    instanceThis.$node.toggle(500);
  };
  // console.log(this, '5 makeBlinkyDancer');
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// console.log(new makeBlinkyDancer());