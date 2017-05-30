const timeout = 10000;
var randomTweet = function() {
  console.log("randomTweet");
  var images = $(".bg_photos img");
  var index = Math.floor(Math.random() * (images.length + 1));
  $("div.profile img").attr('src', images.eq(index).attr('src'));
  $("div.profile_info p").text(images.eq(index).attr('alt'));
  $("div.comment p").text($(".text p").eq(index).text());
  setTimeout(randomTweet, timeout);
}

$(document).ready(function() {
  setTimeout(randomTweet, timeout);
});
