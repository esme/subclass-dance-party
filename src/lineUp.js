var lineUp = function() {
  var dancers = window['dancers'];
  if (dancers === undefined) {
    return;
  }

  for (var i = 0; i < dancers.length; i++) {
    if(dancers[i].$node.find("img")[0].className === 'blinkyDancer') {
        dancers[i].$node.animate({'top': '40%'}, 100);
    } else {
        dancers[i].$node.animate({'top': '80%'}, 100);
    }
  }
};