(function() {
  var $tabItems = $('.tab-item');
  var $tabLinks = $('.pill-nav a');
  var $indexLinks = $('.attr-list a');
  var $accessToggles = $('.access-toggles input[type=checkbox]');

  var $indexLinkContainers = $('.attr-list li');
  $accessToggles.on('change', function(e) {
    var $this = $(e.delegateTarget);
    var checked = $this.prop('checked');
    var value = $this.val();
    var className = 'show-' + value;
    $indexLinkContainers.toggleClass(className, checked);
    $tabItems.toggleClass(className, checked);
  });

  function checkHashLocation() {
    var hash = window.location.hash;
    if (!hash) { return; }
    var tab = hash.slice(1).split('_')[0];
    switchToTab(tab);
  }

  checkHashLocation();

  function switchToTab(tabName, methodName) {
    var tabClassName = '.' + tabName + '-tab';
    var $targetTab = $tabItems.filter(tabClassName);
    var $activeLink = $tabLinks.filter('[href="#' + tabName + '"]');
    $tabItems.addClass('hide');
    $targetTab.removeClass('hide');
    $tabLinks.removeClass('active');
    $activeLink.addClass('active');
  }

  $tabLinks.on('click', function(e) {
    e.preventDefault();
    var $link = $(e.delegateTarget);
    var tabName = $link.attr('href').slice(1);
    switchToTab(tabName);
  });

  $indexLinks.on('click', function(e) {
    var $link = $(e.delegateTarget);
    var linkData = $link.attr('href').slice(1).split('_');
    var tabName = linkData[0];
    var methodName = linkData[1];
    switchToTab(tabName, methodName);
  });
})();
