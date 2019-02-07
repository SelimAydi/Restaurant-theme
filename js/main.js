
$(document).ready(function () {
    $('.regular-fade').each(function () {
        $(this).fadeTo(100, 1);
    });

    $('.carousel').carousel({
        interval: 3000,
        cycle: true,
        pause: false
    })

    $(window).scroll(function () {
        $('.fade-content').each(function () {
            if (!outOfBounds($(this))) {
                $(this).stop().fadeTo(100, 1);
            }

        });
    });

    function outOfBounds($element) {
        return $element.offset().top < $(window).scrollTop() || $element.offset().top + $element.height() > $(window).scrollTop() + $(window).height();
    }

});