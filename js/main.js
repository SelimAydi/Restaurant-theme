<<<<<<< HEAD
$('.carousel').carousel({
    interval: 4000,
    cycle: true,
    pause: false
})

$('#myModal').on('shown.bs.modal', function () {
    $('#myModal').focus()
  })
=======

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
>>>>>>> ea6a664c9d2a4b22bb47060afa9873e2740f20da
