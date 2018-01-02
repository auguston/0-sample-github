const s_public = {
  socialLink() {
    if($('.js-social-share').length > 0) {
      const href = $('[rel="canonical"]').attr('href'),
            title = document.title;
      $('.line').attr('href', `https://line.naver.jp/R/msg/text/?${ title }%0D%0A${ href }`);
      $('.facebook').attr('href', `https://www.facebook.com/share.php?u=${ href }`);
      $('.google').attr('href', `https://plus.google.com/share?url=${ href }`);
      $('.twitter').attr('href', `https://twitter.com/share?text=${ title }&url=${ href }`);
    }
  },
  gaViews() {
    var self = this;
    $.ajax({
      url: 'https://spreadsheets.google.com/feeds/list/1-kREAmeUN53MNmLe2B66mJBx2JtzLNR-jfINlU0jkkw/3/public/values?alt=json',
      dataType: 'json',
      crossDomain: true,
      success: function(data) {
        var d = data.feed.entry[0].gsx$pageviews.$t;
        $('.js-pageviews').text(d);
      }
    });
  }
};

$(function() {
  s_public.socialLink();
  s_public.gaViews();
});