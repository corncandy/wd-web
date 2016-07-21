'use strict';

WUI.SiteHeader = (function() {
  var create = function(options) {
    var $el = options.$el;

    $el.html(WUI.templates['site-header']());
  };

  return {
    create: create
  };
})();
