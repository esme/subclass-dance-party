var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = this.step.bind(this);
  var context = this;

  this.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    context.$node.toggle();
  };

  this.$node = $('<span class="dancer"><img class="blinkyDancer" src="./giraffe.png"></img></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);

  var node = this.$node;
  node.on('mouseover', function(event) {
    node.append("<p>Moo</p>");
    setTimeout(function() {
      node.children().last().remove()
    }, 2000)
  });
  var rotate = false;
  node.on('click', function(event) {
    if(!rotate) {
      node.css({
        "transform": "rotate(180deg)",
        "transition" : "transform 150ms ease"
      });
      rotate = true;
    } else {
      node.css({
        "transform": "rotate(-360deg)",
        "transition" : "transform 150ms ease"
      });
      rotate = false;
    }
  })
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;