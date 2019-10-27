$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();  
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
  });