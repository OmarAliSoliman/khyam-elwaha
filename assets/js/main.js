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
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2.5,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.4,
          },
        },
      ],
    });
  }

  $(".logo #nav-icon1").click(function () {
    // $(this).addClass("open");
    // $(this).parent().toggleClass("menu_icon-active");
    $(".side-nav").addClass("side-nav-open");
    $("html").addClass("side-active");
    // $(".my_navbar").toggleClass("removeBackground");
    // $("#mySidenav").toggleClass("openBurgerMenu");
    // $(".bg-sidenavOpen").toggleClass("burgerMenubodybg");
    // $(this).closest(".customnavbar").find(".logo").fadeToggle();
  });

  if ($(".side-nav").length) {
    $(".side-nav .close-nav").click(function () {
      $(".side-nav").removeClass("side-nav-open");
      $("html").removeClass("side-active");
    });
  }

  if ($(".bg-side-open").length) {
    $(".bg-side-open").on("click", function () {
      $(".side-nav").removeClass("side-nav-open");
      $("html").removeClass("side-active");
    });
  }

  if ($(".custom-select").length) {
    $(".custom-select").niceSelect();
  
  }

  new WOW().init();

});

if ($(".animation-debth").length) {
  var circles = document.querySelector(".animation-debth");
  var parallaxInstance = new Parallax(circles);
}
if ($(".animation-debth2").length) {
  var circles = document.querySelector(".animation-debth2");
  var parallaxInstance = new Parallax(circles);
}

$(window).on("load", function () {
  $("html").removeClass("splash-active")
  $(".splash").addClass("splashscreen-none");
});
