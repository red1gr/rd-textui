position = ''

function removeClass() {
    $("#main").removeClass();
    $("#wrapper").removeClass();
}
window.addEventListener('message', function(event) {
    if (event.data.action == 'open') {
        position = event.data.position;
        message = event.data.message;
        $('#message').html(message);
        if (position == 'right') {
            $('#ui').css('left', '');
            $('#ui').css('right', '1%');
            $('#ui').removeClass('hideright');
            $('#ui').addClass('showright');
        }
        if (position == 'left') {
            $('#ui').css('right', '');
            $('#ui').css('left', '1%');
            $('#ui').removeClass('hideleft');
            $('#ui').addClass('showleft');
        }
        if (position == 'under') {
            $('#ui').css('top', 'auto');
            $('#ui').css('bottom', '1%');
            $('#ui').removeClass('hideunder');
            $('#ui').addClass('showunder');
        }
        if (event.data.color == 'lightblue') {
            removeClass();
            $('#wrapper').addClass('lightblue lightblue-border');
        } else if (event.data.color == 'darkyellow') {
            removeClass();
            $('#wrapper').addClass('darkyellow darkyellow-border');
        } else if (event.data.color == 'white') {
            removeClass();
            $('#wrapper').addClass('white white-border');
        } else if (event.data.color == 'lightgreen') {
            removeClass();
            $('#wrapper').addClass('lightgreen lightgreen-border');
        }


    } else if (event.data.action == 'close') {
        if (position == 'right') {
            $('#ui').removeClass('hideleft');
            $('#ui').removeClass('showleft');
            $('#ui').removeClass('showright');
            $('#ui').addClass('hideright');
        }
        if (position == 'left') {
            $('#ui').removeClass('hideright');
            $('#ui').removeClass('showright');
            $('#ui').removeClass('showleft');
            $('#ui').addClass('hideleft');
        }
        if (position == 'under') {
            $('#ui').removeClass('showunder');
            $('#ui').addClass('hideunder');
        }
    }
})