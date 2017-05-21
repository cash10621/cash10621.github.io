$(function () {
    $('#setting').click(function () {
        var youname = $('#yourname_text').val();
        var othername = $('#othername_text').val();
        $('#yourname').text(youname);
        $('#othername').text(othername);
    });
});

$(function () {
    $('#send1').click(function () {
        var your_meg = $('#txt_box1').val();
        $('#your_coversection').append('<div class="yourmeg">' +
            your_meg + '</div>');
        $('#other_coversection').append('<div class="pic"><img src="https://unsplash.it/40/40?image=836" alt=""></div><div class="othermeg">' +
            your_meg + '</div>');
        $('#txt_box1').val("");
    });

});

$(function () {
    $('#send2').click(function () {
        var other_meg = $('#txt_box2').val();
        $('#your_coversection').append('<div class="pic"><img src="https://unsplash.it/40/40?image=832" alt=""></div><div class="othermeg">' + other_meg + '</div>');
        $('#other_coversection').append('<div class="yourmeg">' + other_meg + '</div>');
        $('#txt_box2').val("");
    });


});