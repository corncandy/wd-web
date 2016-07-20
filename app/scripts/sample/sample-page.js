'use strict';

$(function() {
  WUI.init();
});

WUI.ready = function() {
  // Init common components for pages.
  WUI.SidePanel.create({
    $el: $('.side-panel')
  });

  WUI.SiteHeader.create({
    $el: $('.site-header')
  });

  loadHistory();
  loadStatistic();
  loadTable();
  loadProfile();
  loadEvents();
};

function loadHistory() {
  $('.earnings-history img').attr('src', '../images/sample/sample-page-earnings-history.png');
}

function loadStatistic() {
  $('.earnings-statistic img').attr('src', '../images/sample/sample-page-statistic.png');
}

function loadTable() {
  $('.earnings-table img').attr('src', '../images/sample/sample-page-table.png');
}

function loadProfile() {
  $('.my-profile img').attr('src', '../images/sample/sample-page-profile.png');
}

function loadEvents() {
  $('.my-events img').attr('src', '../images/sample/sample-page-events.png');
}
