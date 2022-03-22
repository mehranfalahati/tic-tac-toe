let turn = true;
let winningArray = [];
//console.log(winningArray)
 
$('button').on('click', function(){
    //$(this).attr('id')
    //$(this).attr('id').slice(3)
    
    if(turn) {
        $('#turn').text('PLAYER 2 STARTS')
        $(this).addClass('yellow');
        $(this).prop('disabled', true)
        winningArray[($(this).attr('id').slice(3))] = 'x'
    } else {
        $('#turn').text('PLAYER 1 STARTS')
        $(this).addClass('blue');
        $(this).prop('disabled', true)
        winningArray[($(this).attr('id').slice(3))] = 'o'
    }
    turn = !turn
    //console.log(winningArray)
    winning();
    
})


const winning = function () {
    //console.log(array)
    if (winningArray[0] ===  winningArray[1] && winningArray[1] === winningArray[2]) {
        // $('#winner').text('PLAYER 1 WON')
        console.log('PLAYER 1 WON')
    } else if (winningArray[0] === winningArray[4] && winningArray[4] === winningArray[8]) {
        alert('PLAYER 1 WON')
    } else if (winningArray[0] === winningArray[3] && winningArray[3] === winningArray[6]) {
        alert('PLAYER 1 WON')
    } else if (winningArray[1] === winningArray[4] && winningArray[4] === winningArray[7]) {
        alert('PLAYER 1 WON')
    } else if (winningArray[2] === winningArray[5] && winningArray[5] === winningArray[8]) {
        alert('PLAYER 1 WON')
    } else if (winningArray[2] === winningArray[4] && winningArray[4] === winningArray[6]) {
        alert('PLAYER 1 WON')
    } else if (winningArray[5] === winningArray[4] && winningArray[4] === winningArray[3]) {
        alert('PLAYER 1 WON')
    } else if (winningArray[8] === winningArray[7] && winningArray[7] === winningArray[6]) {
        alert('PLAYER 1 WON')
    } else {
        alert('PLAYER 2 WON')
    }
}




// const winning = function () {
//     if ($('#box1').hasClass('blue') && $('#box2').hasClass('blue') && $('#box3').hasClass('blue')) {
//         $('#winner').text('PLAYER 2 WON')
//         //console.log('PLAYER 2 WON');

//     } else if ($('#box1').hasClass('blue') && $('#box5').hasClass('blue') && $('#box9').hasClass('blue')) {
//         $('#winner').text('PLAYER 2 WON')
//         //console.log('PLAYER 2 WON');

//     } else if ($('#box1').hasClass('blue') && $('#box4').hasClass('blue') && $('#box7').hasClass('blue')) {
//         $('#winner').text('PLAYER 2 WON')
//         //console.log('PLAYER 2 WON');

//     } else if ($('#box2').hasClass('blue') && $('#box5').hasClass('blue') && $('#box8').hasClass('blue')) {
//         $('#winner').text('PLAYER 2 WON')
//         //console.log('PLAYER 2 WON');

//     } else if ($('#box3').hasClass('blue') && $('#box5').hasClass('blue') && $('#box7').hasClass('blue')) {
//         $('#winner').text('PLAYER 2 WON')
//         //console.log('PLAYER 2 WON');

//     } else if ($('#box3').hasClass('blue') && $('#box6').hasClass('blue') && $('#box9').hasClass('blue')) {
//         $('#winner').text('PLAYER 2 WON')
//         //console.log('PLAYER 2 WON');

//     } else if ($('#box6').hasClass('blue') && $('#box5').hasClass('blue') && $('#box4').hasClass('blue')) {
//         $('#winner').text('PLAYER 2 WON')
//         //console.log('PLAYER 2 WON');

//     } else if ($('#box9').hasClass('blue') && $('#box8').hasClass('blue') && $('#box7').hasClass('blue')) {
//         $('#winner').text('PLAYER 2 WON')
//         //console.log('PLAYER 2 WON');

//     } else if (($('#box1').hasClass('blue') || $('#box1').hasClass('yellow')) && 
//     ($('#box2').hasClass('blue') || $('#box2').hasClass('yellow')) && 
//     ($('#box3').hasClass('blue') || $('#box3').hasClass('yellow')) && 
//     ($('#box4').hasClass('blue') || $('#box4').hasClass('yellow')) && 
//     ($('#box5').hasClass('blue') || $('#box5').hasClass('yellow')) && 
//     ($('#box6').hasClass('blue') || $('#box6').hasClass('yellow')) && 
//     ($('#box7').hasClass('blue') || $('#box7').hasClass('yellow')) && 
//     ($('#box8').hasClass('blue') || $('#box8').hasClass('yellow')) && 
//     ($('#box9').hasClass('blue') || $('#box9').hasClass('yellow'))) {
//         $('#winner').text('GAME IS TIE')

//     }
// }
