this["WUI"] = this["WUI"] || {};
this["WUI"]["templates"] = this["WUI"]["templates"] || {};
this["WUI"]["templates"]["sample-template"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>Sample Template</h1>\n";
},"useData":true});;
this["WUI"] = this["WUI"] || {};
this["WUI"]["templates"] = this["WUI"]["templates"] || {};
this["WUI"]["templates"]["side-panel"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "      <li class=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"2":function(depth0,helpers,partials,data) {
    return "active";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"profile-list\">\n</ul>\n<div class=\"menu-panel\">\n  <section class=\"main-menu\">\n    <h4>MENU</h4>\n    <ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.menus : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n  </section>\n  <section class=\"search-bar\">\n    <input placeholder=\"Search\" />\n  </section>\n  <section class=\"friend-list\">\n    <h4>FRIENDS</h4>\n    <ul>\n      <li>\n        Caroline\n      </li>\n      <li>\n        Claire\n      </li>\n      <li>\n        Lina\n      </li>\n      <li>\n        Jason\n      </li>\n      <li>\n        Dash\n      </li>\n      <li>\n        Jessica\n      </li>\n    </ul>\n  </section>\n</div>\n";
},"useData":true});;
this["WUI"] = this["WUI"] || {};
this["WUI"]["templates"] = this["WUI"]["templates"] || {};
this["WUI"]["templates"]["site-header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "Your Profit\n<img src=\"../images/sample/sample-page-top-avatar.png\" class=\"top-avatar\" />\n";
},"useData":true});;