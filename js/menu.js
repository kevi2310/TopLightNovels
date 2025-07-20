$(document).ready(function () {
  // Toggle sidebar menu and body scroll
  $('.icon').click(function () {
    $('nav ul.responsive').toggleClass('active');
    $('body').toggleClass('no-scroll');
  });

  // Close menu when a nav link is clicked
  $('nav ul.responsive li a').click(function () {
    $('nav ul.responsive').removeClass('active');
    $('body').removeClass('no-scroll');
  });

  // Close menu with Escape key
  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      $('nav ul.responsive').removeClass('active');
      $('body').removeClass('no-scroll');
    }
  });
});