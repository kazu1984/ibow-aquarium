jQuery(function ($) {
  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on("click", 'a[href*="#"]', function () {
    let time = 400;
    let header = $("header").innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $("html,body").animate({ scrollTop: targetY }, time, "swing");
    return false;
  });

  // トップメニューの固定化
  const offset = $(".js-top-menu").offset();
  $(window).scroll(function () {
    if ($(window).scrollTop() > offset.top) {
      $(".js-top-menu").addClass("fixed-menu");
    } else {
      $(".js-top-menu").removeClass("fixed-menu");
    }
  });
});
