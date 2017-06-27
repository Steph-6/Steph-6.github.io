window.onload = init;

function init() {

  // $('.about-line').hover(
  //   function() {
  //     console.log('hello');
  //     $('.about-line').css('width', '400px');
  //   }, function() {
  //     console.log('bye');
  //     $('.about-line').css('width', '350px');
  //   });
  // $('.man').hover(expand(),shrink());


  $('.man').click(function(){
    $('.man').hide();
    setTimeout(function() {
      $('.man').show();
    }, 900);
    $('.jumping').show();
    setTimeout(function() {
      $('.jumping').hide();
    }, 900);
  });

  //  {
  //   console.log('clicked');
  //   // $('.man').css('display', 'none');
  //   $('.man').hide('100', function() {
  //
  //   });
  // });

  // function hide() {
  //   $('.man').style.visibility = 'hidden';
  //   setTimeout('show()', 2000);
  // }
  //
  // function show() {
  //   $('.man').style.visibility = 'visible';
  //   setTimeout('hide()', 2000);
  // }

  // $('#email').css('display', 'none');
  // $('.email-link').on('mouseenter', function() {
  //   $('#email').fadeIn(5000);
  //   $('#email-icon').addClass('rotate');
  // });
  // $('.email-link').on('mouseleave', function() {
  //   $('#email-icon').removeClass('rotate');
  // });
  //
  // $('.git').on('mouseenter', function() {
  //   $('.mark').addClass('rotate');
  // });
  // $('.git').on('mouseleave', function() {
  //   $('.mark').removeClass('rotate');
  // });
  //
  // $('.linkedin').on('mouseenter', function() {
  //   $('.in').addClass('rotate');
  // });
  // $('.linkedin').on('mouseleave', function() {
  //   $('.in').removeClass('rotate');
  // });

  // only on change of window between title and portfolio animate the logo and name
}

function expand() {
  console.log('expanding');
}

function shrink() {
  console.log('shrinking');
}

function chooseSquare(a, b) {
  min = Math.ceil(a);
  max = Math.floor(b);
  return Math.floor(Math.random() * (max - min)) + min;
}
