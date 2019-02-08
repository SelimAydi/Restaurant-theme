
$('body').css('display', 'none');
$('body').fadeIn(2100);
$(document).ready(function () {

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

});
