$(document).ready(function () {
  $('.icon').on('click keydown', function (e) {
    if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const isActive = $('nav ul.responsive').toggleClass('active').hasClass('active');
      $('body').toggleClass('no-scroll');
      $(this).attr('aria-expanded', isActive);
    }
  });

  $('nav ul.responsive li a').click(function () {
    $('nav ul.responsive').removeClass('active');
    $('body').removeClass('no-scroll');
    $('.icon').attr('aria-expanded', false);
  });

  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      $('nav ul.responsive').removeClass('active');
      $('body').removeClass('no-scroll');
      $('.icon').attr('aria-expanded', false);
    }
  });

  $(document).click(function(e) {
    if (!$(e.target).closest('nav').length && $('nav ul.responsive').hasClass('active')) {
      $('nav ul.responsive').removeClass('active');
      $('body').removeClass('no-scroll');
      $('.icon').attr('aria-expanded', false);
    }
  });
});
