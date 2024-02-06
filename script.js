$(document).ready(function () {
  // ===== Nav Link ==================================================
  $("nav ul li").on("click", function () {
    $("nav ul").find(".active").removeClass("active");
    $(this).addClass("active");
    $("nav ul").css({ top: "-26rem" });
    $("#toggle__close").css({ display: "none" });
  });
  // ===== End Nav Link ==============================================

  //  ======== Toggle Menu  ==========================================
  $("#toggle__menu").click(function () {
    $("nav ul").css({ top: "0" });
    $("#toggle__close").css({ display: "block" });
  });
  $("#toggle__close").click(function () {
    $("nav ul").css({ top: "-26rem" });
    $("#toggle__close").css({ display: "none" });
  });
  //  ========End Toggle Menu  ========================================

  // ======== scroll change background nav ============================
  $(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    if (wScroll > 150) {
      $("nav").css({
        background: "var(--green)",
        "box-shadow": "var(--box-light-under-shadow)",
      });
    } else {
      $("nav").css({
        background: "transparent",
        "box-shadow": "",
      });
    }
  });
  // ======== End scroll change background nav ========================

  // ============================ Theme ===============================
  // change to dark theme
  $("nav #theme .light").click(function () {
    $("nav #popup").text("Light Mode");
    $("nav #theme .light").removeClass("active");
    $("nav #theme .dark").addClass("active");
    $(":root").css({
      "--theme-light": "rgb(48, 69, 8)",
      "--theme-dark": "rgb(190, 234, 106)",
      "--btn-box-shadow": "0px 4px 15px 3px var(--shadow-light)",
    });
    if ($(window).width() < 992) {
      $("nav ul li a").css({ color: "var(--theme-light)" });
    }
    $(window).scroll(function () {
      var wScroll = $(this).scrollTop();
      if (wScroll > 150) {
        if ($(window).width() > 992) {
          $("nav").css({
            background: "var(--dark-green)",
            "box-shadow": "var(--box-dark-under-shadow)",
          });
          $("nav .theme i").css({ color: "var(--green)" });
          $("nav #logo").css({ color: "var(--green)" });
          $("nav #toggle__menu").css({ color: "var(--green)" });
        } else {
          $("nav .theme i").css({ color: "var(--dark-green)" });
        }
      } else {
        $("nav").css({ background: "transparent", "box-shadow": "" });
        $("nav #logo").css({ color: "var(--dark-green)" });
        $("nav #toggle__menu").css({ color: "var(--dark-green)" });
        $("nav #toggle__close").css({ color: "var(--dark-green)" });
      }
    });
  });

  // change to light theme (orgin)
  $("nav #theme .dark").click(function () {
    $("nav #popup").text("Dark Mode");
    $("nav #theme .light").addClass("active");
    $("nav #theme .dark").removeClass("active");
    $(":root").css({
      "--theme-light": "rgb(240, 255, 222)",
      "--theme-dark": "rgb(48, 69, 8)",
      "--btn-box-shadow": "0px 4px 15px 3px var(--shadow-dark)",
    });
    $("nav .theme i").css({ color: "var(--dark-green)" });
    if ($(window).width() < 992) {
      $("nav ul li a").css({ color: "var(--theme-dark)" });
    }
    $(window).scroll(function () {
      var wScroll = $(this).scrollTop();
      if (wScroll > 150) {
        $("nav").css({
          background: "var(--green)",
          "box-shadow": "var(--box-light-under-shadow)",
        });
        $("nav .theme i").css({ color: "var(--dark-green)" });
        $("nav #logo").css({ color: "var(--dark-green)" });
      } else {
        $("nav").css({ background: "transparent", "box-shadow": "" });
      }
    });
  });
  // ========================  End Theme ==============================

  // =========== Popup ==========================
  $("nav #theme").hover(
    function () {
      if ($(window).width() > 992) {
        $("nav #popup").css({ display: "block" });
      }
    },
    function () {
      setTimeout(() => {
        $("nav #popup").css({ display: "none" });
      }, 500);
    }
  );
  // ===========End Popup =====================
});
