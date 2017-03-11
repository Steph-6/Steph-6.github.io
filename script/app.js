$(function() {
  let about = false;
  let projects = false;
  $('#email').css('display', 'none');
  $('.email-link').on('mouseover', function() {
    $('#email').delay(3000).css('display', 'inline-block');
    $('#email-icon').addClass('slide');
  });

  $('#about').on('click', function() {
    if (projects === true) {
      $('.project-content').remove();
    }
    if (about === false) {
      $('.content').append('<div class="about-content">hello you</div>');
    }
    about = true;
    projects = false;
  });

  $('.projects').on('click', function() {
    const id = $(this).attr('id');
    if (about === true) {
      $('.about-content').remove();
    }
    if (projects === false) {
      // $('.content').append($project + id);
      console.log(id);
    }
    projects = true;
    about = false;
  });

  setInterval(function() {
    console.log('moving');
  }, 800);

  function chooseSquare(a, b) {
    min = Math.ceil(a);
    max = Math.floor(b);
    return Math.floor(Math.random() * (max - min)) + min;
  }
});
