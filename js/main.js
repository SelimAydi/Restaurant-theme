
var istoggled = false;
function toggleNav() {
    var mobileMenu = $('.mobilenav');
    if (!istoggled) {
        mobileMenu.addClass('mobilenav--toggled');
    } else {
        mobileMenu.removeClass('mobilenav--toggled');
    }
    istoggled = !istoggled;

}

$(document).ready(function () {

    $('#nav-icon3').click(function () {
        $(this).toggleClass('open');
    });

    $('.regular-fade').each(function () {
        $(this).fadeTo(150, 1);
    });

    $('#myModal').on('shown.bs.modal', function () {
        $('#myModal').focus()
      })

    $('.carousel').carousel({
        interval: 4000,
        cycle: true,
        pause: false
    })

    $(window).scroll(function () {
        $('.fade-content').each(function () {
            if (!outOfBounds($(this))) {
                $(this).stop().fadeTo(350, 1);
            }

        });
    });

    function outOfBounds($element) {
        return $element.offset().top - 50  < $(window).scrollTop() || ($element.offset().top + $element.height())-50 > $(window).scrollTop() + $(window).height();
    }

    // $('.transitionEffect').hide().one("load",function(){
    //     $(this).fadeIn(500);
    // }).each(function(){
    //     if(this.complete) $(this).trigger("load");
    // });
    $(document).ready(function () {
        $('div.hidden').fadeIn(1200).removeClass('hidden');
    });
});
