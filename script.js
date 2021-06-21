$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
  });

  // slide-up script
  $(".btn-arrow-up").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  // TOGGLE MENU / NAVBAR SCRIPT
  $(".menu-mobile").click(function () {
    $(".nav").toggleClass("active");
    // $(".menu-btn").toggleClass("active");
  });
});
