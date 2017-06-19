(function() {

  var upButton = document.getElementById('up');
  var downButton = document.getElementById('down');
  var leftButton = document.getElementById('left');
  var rightButton = document.getElementById('right');

  var cuteSingleGuy = document.getElementById('jonathan');

  upButton.addEventListener('click', function(event) {
    var oldTopPosition;

    if(cuteSingleGuy.style.top !== '') {
      var oldPositionAsAString = cuteSingleGuy.style.top.replace('px', '');
      oldTopPosition = parseInt(oldPositionAsAString);
    } else {
      oldTopPosition = 0;
    }

    cuteSingleGuy.style.top = (oldTopPosition + -40) + 'px';
  });


  downButton.addEventListener('click', function(event) {
    var oldTopPosition;

    if(cuteSingleGuy.style.top !== '') {
      var oldPositionAsAString = cuteSingleGuy.style.top.replace('px', '');
      oldTopPosition = parseInt(oldPositionAsAString);
    } else {
      oldTopPosition = 0;
    }

    cuteSingleGuy.style.top = (oldTopPosition + 40) + 'px';
  });

  leftButton.addEventListener('click', function(event) {
    var oldTopPosition;

    if(cuteSingleGuy.style.left !== '') {
      var oldPositionAsAString = cuteSingleGuy.style.left.replace('px', '');
      oldTopPosition = parseInt(oldPositionAsAString);
    } else {
      oldTopPosition = 0;
    }

    cuteSingleGuy.style.left = (oldTopPosition + -40) + 'px';
  });



  rightButton.addEventListener('click', function(event) {
    var oldTopPosition;

    if(cuteSingleGuy.style.left !== '') {
      var oldPositionAsAString = cuteSingleGuy.style.left.replace('px', '');
      oldTopPosition = parseInt(oldPositionAsAString);
    } else {
      oldTopPosition = 0;
    }

    cuteSingleGuy.style.left = (oldTopPosition + 40) + 'px';
  });

})();
