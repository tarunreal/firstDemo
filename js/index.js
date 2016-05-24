
$(document).ready(function () {
    makeTemplates();

    $(document).on("scroll", onScroll);
    scrollByMenu();

})

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.nav li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("data-link"));
        console.log(refElement.position().top)
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {

            $('.nav li a').removeClass("activeNew");
            currLink.addClass("activeNew");
        }
        else{
            currLink.removeClass("activeNew");
        }
    });
}

function scrollByMenu(){
  $( '.nav li a').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      $('.navTabContainer').removeClass('showNavOption');
      if($('.navbarHeader').width()>500){
        $('a').each(function () {
            $(this).removeClass('activeNew');
        })
        $(this).addClass('activeNew');
      }


      var target = $(this).attr('data-link'),

      menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
  });
}
