$(function () {
    $('.carousel').carousel({
        interval: 3000,
        wrap: true
    });

    $(".open-modal").click(function(){
        $('#exampleModal').modal({
            backdrop: 'static',
            keyboard: false
        });
    });
});
