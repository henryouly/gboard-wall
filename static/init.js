$(document).ready(function() {
  $("div.overlay > div:first").slideDown(1500);
  $("div.profile > img").clone().appendTo('div.bg_photos');

  setInterval(function() {
    $('div.overlay > div:first')
      // .fadeOut(1000)
      .slideUp()
      .next()
      .slideDown(1500)
      .end()
      .appendTo('div.overlay');
  }, 8000);
});
