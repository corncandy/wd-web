'use script';

WUI.components['sample-component'] = (function() {
  var create = function(options) {
    console.log(options);
  };

  return {
    create: create
  };
})();
