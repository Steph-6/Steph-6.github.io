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

// *********** game ************

  const canvas = $('#snake');
  const ctx    = snake.getContext('2d');
  let raf      = null;

  console.log(canvas);
  console.log(ctx);

  var ball = {
    x: 50,
    y: 50,
    vx: 5,
    vy: 2,
    radius: 10,
    color: 'black',
    draw: function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  };

  function draw() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ball.draw();
    ball.x += ball.vx;
    ball.y += ball.vy;

    if (ball.y + ball.vy > canvas.height ||
        ball.y + ball.vy < 0) {
      ball.vy = -ball.vy;
    }
    if (ball.x + ball.vx > canvas.width ||
        ball.x + ball.vx < 0) {
      ball.vx = -ball.vx;
    }

    raf = window.requestAnimationFrame(draw);
  }

  canvas.on ('mouseover', function(e) {
    raf = window.requestAnimationFrame(draw);
  });

  canvas.on('mouseout', function(e) {
    window.cancelAnimationFrame(raf);
  });

  ball.draw();
}



// $('a').on('click', function() {
//   $('body').css('border', '6px solid rgba(50,50,50,0.3)');
//   $('body').css('filter', 'blur(2px)');
  // setTimeout(function() {
    // $('body').css('border', '2px solid rgba(50,50,50,0.3)');
  // }, 500);
// });
