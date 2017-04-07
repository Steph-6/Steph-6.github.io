window.onload = init;

function init() {
// *********** links ***********
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
}
// *********** game ************



// $('.start').on('click', function() {
//   console.log('clicked');
//   // raf = window.requestAnimationFrame(draw);
//   $('.start').addClass('pause');
//   $('.start').removeClass('start');
// });
//
// $('.pause').on('click', function () {
//   // window.cancelAnimationFrame(raf);
// });

// $('a').on('click', function() {
//   $('body').css('border', '6px solid rgba(50,50,50,0.3)');
//   $('body').css('filter', 'blur(2px)');
  // setTimeout(function() {
    // $('body').css('border', '2px solid rgba(50,50,50,0.3)');
  // }, 500);
// });
