
var istoggled = false;
function toggleNav() {
    var mobileMenu = $('.mobilenav');
    var logo = $('#logo');
    var button = $('#nav-icon3');
    if (!istoggled) {
        mobileMenu.addClass('mobilenav--toggled');
        logo.addClass('fixed fixed--logo');
        button.addClass('fixed fixed--button');
    } else {
        mobileMenu.removeClass('mobilenav--toggled');
        logo.removeClass('fixed fixed--logo');
        button.removeClass('fixed fixed--button');
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


    setTimeout(
        function()
        {
            $(document).ready(function () {
                $('div.hidden').fadeIn(1200).removeClass('hidden');
            });

        },50);
});
