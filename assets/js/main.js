$(document).ready(function () {
  var currentDir = $("a").css("direction");
  console.log(currentDir);

  AOS.init();

  if ($(".bg-sidenavOpen").length) {
    $(".bg-sidenavOpen").on("click", function () {
      $("#mySidenav").css("right", "-400px");
      $(this).css("display", "none");
      document.body.classList.remove("openMenuActive");
    });
  }

  if ($(".header-slider").length) {
    $(".header-slider").slick({
      // rtl: currentDir == "rtl" ? true : false,
      arrow: true,
      fade: true,
      dots: false,
    });
  }

  if ($(".services-slider").length) {
    $(".services-slider").slick({
      slidesToShow: 3.4,
      rtl: currentDir == "rtl" ? true : false,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  $("#nav-icon1").click(function () {
    $(this).toggleClass("open");
    $(".side_nav").toggleClass("side_nav_open");
    $("html").toggleClass("side_active");
    // $(".my_navbar").toggleClass("removeBackground");
    // $("#mySidenav").toggleClass("openBurgerMenu");
    // $(".bg-sidenavOpen").toggleClass("burgerMenubodybg");
    // $(this).closest(".customnavbar").find(".logo").fadeToggle();
  });

  if ($(".bg_side_open").length) {
    $(".bg_side_open").on("click", function () {
      $("#nav-icon1").removeClass("open");
      $(".side_nav").removeClass("side_nav_open");
      $("html").removeClass("side_active");
    });
  }

  if ($(".custom_select").length) {
    $(".custom_select").niceSelect();
  }
});

$(window).on("load", function () {
  $(".splashscreen").addClass("splashscreen_none");
});
