var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  
  var oldStep = this.step.bind(this);
  var context = this;

  this.step = function() {
    oldStep();
    doBounce(context.$node, 1, '50px', 200);
  };

  this.$node = $('<span class="dancerfix dancer"><img class="bouncyDancer" src="./penguin.png"></img></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);

  var node = this.$node;
  node.on('mouseover', function(event) {
    node.append("<p>Quack</p>");
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

var doBounce = function (element, times, distance, speed) {
  // for (i = 0; i < times; i++) {
    element.animate({marginTop: '-=' + distance}, speed)
      .animate({marginTop: '+=' + distance}, speed);
  // }
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;