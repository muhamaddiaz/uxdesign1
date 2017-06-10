$('.box').hide();
$(function() {
  $('.btn-toggle').click(function() {
    $('.side-menu').toggleClass('active');
    if($('.side-menu').hasClass('active')) {
      setTimeout(function() {
        $('.side-menu-layer, .profil').addClass('active');
      }, 600)
      $('.box').each(function(d) {
        setTimeout(function() {
          $('.box').eq(d).addClass('active');
        }, 400 * d);
      })
    } else {
      $('.side-menu-layer, .profil').removeClass('active');
      $('.box').each(function(d) {
        $('.box').eq(d).removeClass('active');
      })
    }
  });
});
