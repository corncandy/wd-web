'use strict';

$(function() {
  var rotation = 0;

  setInterval(function() {
    rotation += 10;
    if (rotation > 180) {
      rotation = 0;
    }
    $('.fill').css('transform', 'rotate(' + rotation + 'deg)');
  }, 1000);
});
