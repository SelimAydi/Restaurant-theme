$('.carousel').carousel({
    interval: 4000,
    cycle: true,
    pause: false
})

$('#myModal').on('shown.bs.modal', function () {
    $('#myModal').focus()
  })