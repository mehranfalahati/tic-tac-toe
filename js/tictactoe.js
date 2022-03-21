let turn = true;
$('button').on('click', function(){
    if(turn) {
        $('#turn').text('PLAYER 2 STARTS')
        $(this).addClass('yellow');
        $(this).prop('disabled', true)
    } else {
        $('#turn').text('PLAYER 1 STARTS')
        $(this).addClass('blue');
        $(this).prop('disabled', true)
    }
    turn = !turn
})
