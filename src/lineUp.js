var lineUp = function() {
    var dancers = window['dancers'];
    if (dancers === undefined) {
        return;
    }
    
    for (var i = 0; i < dancers.length; i++) {
        console.log(dancers[i].$node, 'node')
        dancers[i].$node.animate({'top': 0}, 100)
    }
}