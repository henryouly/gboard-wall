$(document).ready(function() {
  $("div.overlay > div:gt(0)").hide();
  $("div.profile > img").clone().appendTo('div.bg_photos');

  setInterval(function() {
    $('div.overlay > div:first')
      // .fadeOut(1000)
      .hide()
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('div.overlay');
  }, 3000);
});
