$(function() {
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

  $('a').on('click', function() {
    $('body').css('border', '6px solid rgba(50,50,50,0.3)');
    $('body').css('filter', 'blur(2px)');
    // setTimeout(function() {
      // $('body').css('border', '2px solid rgba(50,50,50,0.3)');
    // }, 500);
  });

  setInterval(function() {
    const choose = chooseSquare(1,13);
    $(`#row${choose}`).css('border-bottom', '0px');
  }, 300);

  setInterval(function() {
    const choose = chooseSquare(1,13);
    $(`#row${choose}`).css('border-bottom', 'solid 2px white');
  }, 300);


  // $('#about').on('click', function() {
  //   if (projects === true) {
  //     $('.project-content').remove();
  //   }
  //   if (about === false) {
  //     $('.content').append('<div class="about-content">hello you</div>');
  //   }
  //   about = true;
  //   projects = false;
  // });
  //
  // $('.projects').on('click', function() {
  //   const id = $(this).attr('id');
  //   if (about === true) {
  //     $('.about-content').remove();
  //   }
  //   if (projects === false) {
  //     // $('.content').append($project + id);
  //     console.log(id);
  //   }
  //   projects = true;
  //   about = false;
  // });

  // var canvas = $('#paper')[0];
  // var c = canvas.getContext('2d');
  //
  // var startX = 50;
  // var startY = 50;
  // var endX = 100;
  // var endY = 100;
  // var amount = 0;
  // setInterval(function() {
  //     amount += 0.05; // change to alter duration
  //     if (amount > 1) amount = 1;
  //     c.clearRect(0, 0, canvas.width, canvas.height);
  //     c.strokeStyle = 'black';
  //     c.moveTo(startX, startY);
  //     // lerp : a  + (b - a) * f
  //     c.lineTo(startX + (endX - startX) * amount, startY + (endY -  startY) * amount);
  //     c.stroke();
  //   }, 30);

  // buildGrid();
  //
  // function buildGrid() {
  //   for(var x = 0; x < 100; x++) {
  //     for(var y = 0; y < 100; y++) {
  //       var unit = $(`<div class='unit' id=${x,y}></div>`);
  //       unit.appendTo('#container');
  //     }
  //   }
    // setInterval(function() {
    //   let colored = chooseSquare(0,100);
    //   $(`#${colored}`).css('background-color', 'red');
    // }, 30);




  function chooseSquare(a, b) {
    min = Math.ceil(a);
    max = Math.floor(b);
    return Math.floor(Math.random() * (max - min)) + min;
  }
});
