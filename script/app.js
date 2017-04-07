window.onload = init;

function init() {
  $('#email').css('display', 'none');
  $('.email-link').on('mouseenter', function() {
    $('#email').fadeIn(5000);
    $('#email-icon').addClass('rotate');
  });
  $('.email-link').on('mouseleave', function() {
    $('#email-icon').removeClass('rotate');
  });

  $('.git').on('mouseenter', function() {
    $('.mark').addClass('rotate');
  });
  $('.git').on('mouseleave', function() {
    $('.mark').removeClass('rotate');
  });

  $('.linkedin').on('mouseenter', function() {
    $('.in').addClass('rotate');
  });
  $('.linkedin').on('mouseleave', function() {
    $('.in').removeClass('rotate');
  });

  // only on change of window between title and portfolio animate the logo and name 
}
