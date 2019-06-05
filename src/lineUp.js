var lineUp = function() {
  var dancers = window['dancers'];
  if (dancers === undefined) {
    return;
  }

  for (var i = 0; i < dancers.length; i++) {
    dancers[i].$node.animate({'top': '50%'}, 100);
  }
};