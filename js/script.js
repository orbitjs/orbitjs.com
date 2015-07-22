(function() {
  var $tabItems = $('.tab-item');
  var $tabLinks = $('.pill-nav a');

  $tabLinks.on('click', function(e) {
    e.preventDefault();
    var $link = $(e.delegateTarget);
    var href = $link.attr('href').slice(1);

    var tabClassName = '.' + href + '-tab';
    var $targetTab = $tabItems.filter(tabClassName);
    $tabItems.addClass('hide');
    $targetTab.removeClass('hide');

    $tabLinks.removeClass('active');
    $link.addClass('active');
  });
})();


