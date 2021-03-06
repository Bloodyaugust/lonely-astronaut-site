$(function () {
  var $scary = $('.scary-text');

  window.setInterval(function () {
    var randomSignum = Math.random() >= 0.5 ? -1 : 1;
    var offset = Math.sin((new Date) / 128) * 5 + (Math.random() * 2 * randomSignum);

    if (Math.abs(offset) > 4) {
      if (offset < 0) {
        $scary.css('text-shadow', 'purple ' + offset + 'px 2px');
      } else {
        $scary.css('text-shadow', 'teal ' + offset + 'px 2px');
      }
    } else {
      $scary.css('text-shadow', 'purple 0px 2px');
    }
  }, 16);
});
