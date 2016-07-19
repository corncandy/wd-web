'use strict';

$(function() {
  var component = WUI.SampleComponent.create({
    $el: $('.sample-component')
  });

  component.show();

  setTimeout(function() {
    component.hide();
    setTimeout(function() {
      component.show();
    }, 1000);
  }, 1000);
});
