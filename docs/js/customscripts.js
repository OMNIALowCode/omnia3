$('#mysidebar').height($('.nav').height());

$(document).ready(function () {
  if (document.baseURI.includes('/omnia3_downloads.html')) {
    httpGetFeedAsync(
      'https://mymiswebdeploy.blob.core.windows.net/omnia3/platform/updateFeed.xml',
      'Download latest platform version',
      'PackageFull',
      'platform'
    );
    httpGetFeedAsync(
      'https://mymiswebdeploy.blob.core.windows.net/omnia3/connector/updateFeed.xml',
      'Download latest connector version',
      'Package',
      'connector'
    );
    httpGetFeedAsync(
      'https://mymiswebdeploy.blob.core.windows.net/omnia3/devEnvironment/updateFeed.xml',
      'Download latest docker version',
      'Package',
      'development-environment'
    );
  }

  //this script says, if the height of the viewport is greater than 800px, then insert affix class, which makes the nav bar float in a fixed
  // position as your scroll. if you have a lot of nav items, this height may not work for you.
  var h = $(window).height();
  //console.log (h);
  if (h > 800) {
    $('#mysidebar').attr('class', 'nav affix');
  }
  // activate tooltips. although this is a bootstrap js function, it must be activated this way in your theme.
  $('[data-toggle="tooltip"]').tooltip({
    placement: 'top',
  });

  /**
   * AnchorJS
   */
  anchors.add('h2,h3,h4,h5');
});

// needed for nav tabs on pages. See Formatting > Nav tabs for more details.
// script from http://stackoverflow.com/questions/10523433/how-do-i-keep-the-current-tab-active-with-twitter-bootstrap-after-a-page-reload
$(function () {
  var json, tabsState;
  $('a[data-toggle="pill"], a[data-toggle="tab"]').on('shown.bs.tab', function (
    e
  ) {
    var href, json, parentId, tabsState;

    tabsState = localStorage.getItem('tabs-state');
    json = JSON.parse(tabsState || '{}');
    parentId = $(e.target)
      .parents('ul.nav.nav-pills, ul.nav.nav-tabs')
      .attr('id');
    href = $(e.target).attr('href');
    json[parentId] = href;

    return localStorage.setItem('tabs-state', JSON.stringify(json));
  });

  tabsState = localStorage.getItem('tabs-state');
  json = JSON.parse(tabsState || '{}');

  $.each(json, function (containerId, href) {
    return $('#' + containerId + ' a[href=' + href + ']').tab('show');
  });

  $('ul.nav.nav-pills, ul.nav.nav-tabs').each(function () {
    var $this = $(this);
    if (!json[$this.attr('id')]) {
      return $this
        .find('a[data-toggle=tab]:first, a[data-toggle=pill]:first')
        .tab('show');
    }
  });
});

function httpGetFeedAsync(feedUrl, elementText, xmlElement, parentElement) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      var xmlDoc = xmlHttp.responseXML;
      var versionElements = xmlDoc.getElementsByTagName('Version');
      if (versionElements && versionElements.length > 0) {
        var tocDiv = document.getElementById(parentElement);
        var versionNumber = $(versionElements).attr('Number');
        var packageURL = $(versionElements).attr(xmlElement);
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode(
          elementText + ' (' + versionNumber + ')'
        );
        linkElement.appendChild(linkText);
        linkElement.title = elementText;
        linkElement.href = packageURL;
        tocDiv.parentNode.insertBefore(linkElement, tocDiv.nextSibling);
      }
    }
  };
  xmlHttp.open('GET', feedUrl, true); // true for asynchronous
  xmlHttp.send(null);
}
