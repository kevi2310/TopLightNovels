$(document).ready(function () {
  $('.icon').on('click keydown', function (e) {
    if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const isActive = $('nav ul.responsive').toggleClass('active').hasClass('active');
      $('body').toggleClass('no-scroll', isActive);
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

  // Dropdown toggle for mobile & when menu is active
  $('.dropdown > a').on('click', function (e) {
    if ($('nav ul.responsive').hasClass('active') || window.innerWidth <= 768) {
      e.preventDefault();
      $(this).siblings('.dropdown-content').slideToggle(200);
      $(this).toggleClass('active'); // Toggle arrow rotation
      // Update aria-expanded for accessibility
      let expanded = $(this).attr('aria-expanded') === 'true';
      $(this).attr('aria-expanded', !expanded);
    }
  });
});
