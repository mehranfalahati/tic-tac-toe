let turn = true;
let winningArray = ['', '', '', '', '', '', '', '', ''];
let counter = 0;
let counterPlayer1 = 0;
let counterPlayer2 = 0;

 
$('.game').on('click', function(){
    
    if(turn) {
        $('#turn').text('PLAYER 2 STARTS')
        $(this).addClass('yellow');
        $(this).prop('disabled', true)
        winningArray[$('.game').index(this)] = 'o'
        counter ++
    } else {
        $('#turn').text('PLAYER 1 STARTS')
        $(this).addClass('blue');
        $(this).prop('disabled', true)
        winningArray[$('.game').index(this)] = 'x'
        counter ++

    }
    winning();
    turn = !turn
    
})



$('.reset').on('click', function(){
    $('#modalBox').css('visibility', 'hidden')
    $('.game').removeClass('blue yellow');
    $('.game').prop('disabled', false);
    $('#turn').text('PLAYER 1 STARTS')
    for (let i = 0; i < winningArray.length; i++) {
        winningArray[i] = ''
    }
    counter = 0
    turn = true;
})


//$('.reset').on('click', resetBoard);



const winning = function () {
    //console.log(array)
        if (winningArray[0] !== "" &&  winningArray[0] ===  winningArray[1] && winningArray[1] === winningArray[2]) {
            // $('#winner').text('PLAYER 1 WON')
            convertWinner(winningArray[0])
        } else if (winningArray[0] !== "" && winningArray[0] === winningArray[4] && winningArray[4] === winningArray[8]) {
            convertWinner(winningArray[0])
        } else if (winningArray[0] !== "" && winningArray[0] === winningArray[3] && winningArray[3] === winningArray[6]) {
            convertWinner(winningArray[0])
        } else if (winningArray[1] !== "" && winningArray[1] === winningArray[4] && winningArray[4] === winningArray[7]) {
            convertWinner(winningArray[1])
        } else if (winningArray[2] !== "" && winningArray[2] === winningArray[5] && winningArray[5] === winningArray[8]) {
            convertWinner(winningArray[2])
        } else if (winningArray[2] !== "" && winningArray[2] === winningArray[4] && winningArray[4] === winningArray[6]) {
            convertWinner(winningArray[2])
        } else if (winningArray[5] !== "" && winningArray[5] === winningArray[4] && winningArray[4] === winningArray[3]) {
            convertWinner(winningArray[5])
        } else if (winningArray[8] !== "" && winningArray[8] === winningArray[7] && winningArray[7] === winningArray[6]) {
            convertWinner(winningArray[8]) 
        }
        if (counter === 9){
            pop('IT IS TIE')
        }
}

const convertWinner = function (playerName) {
    if (playerName === 'o') {
        counterPlayer1 += 1;
        $('#counter1').text('PLAYER 1: ' + counterPlayer1)
        //return 'PLAYER 1 WINS'
        pop('Player1')
    } else if (playerName === 'x') {
        counterPlayer2 += 1;
        $('#counter2').text('PLAYER 2: ' + counterPlayer2)
        //return 'PLAYER 2 WINS'
        pop('Player2')
    }
}


const pop = function (PLAYERWIN) {
    if (PLAYERWIN.includes('Player')) {
    $('#modalBox').css('visibility', 'visible')
    $('#popup').text(PLAYERWIN + ' WINS')
    } else {
        $('#popup').text('IT IS TIE')
    }
}





// const winning = function () {
//     if ($('#box1').hasClass('blue') && $('#box2').hasClass('blue') && $('#box3').hasClass('blue')) {
//         $('#winner').text('PLAYER 2 WON')
//         return true;

//     } else if ($('#box1').hasClass('blue') && $('#box5').hasClass('blue') && $('#box9').hasClass('blue')) {
//         $('#winner').text('PLAYER 2 WON')
//         return true;

//     } else if ($('#box1').hasClass('blue') && $('#box4').hasClass('blue') && $('#box7').hasClass('blue')) {
//         $('#winner').text('PLAYER 2 WON')
//         return true;

//     } else if ($('#box2').hasClass('blue') && $('#box5').hasClass('blue') && $('#box8').hasClass('blue')) {
//         $('#winner').text('PLAYER 2 WON')
//         return true;

//     } else if ($('#box3').hasClass('blue') && $('#box5').hasClass('blue') && $('#box7').hasClass('blue')) {
//         $('#winner').text('PLAYER 2 WON')
//         return true;

//     } else if ($('#box3').hasClass('blue') && $('#box6').hasClass('blue') && $('#box9').hasClass('blue')) {
//         $('#winner').text('PLAYER 2 WON')
//         return true;

//     } else if ($('#box6').hasClass('blue') && $('#box5').hasClass('blue') && $('#box4').hasClass('blue')) {
//         $('#winner').text('PLAYER 2 WON')
//         return true;

//     } else if ($('#box9').hasClass('blue') && $('#box8').hasClass('blue') && $('#box7').hasClass('blue')) {
//         $('#winner').text('PLAYER 2 WON')
//         return true;

//     } 

//     if ($('#box1').hasClass('yellow') && $('#box2').hasClass('yellow') && $('#box3').hasClass('yellow')) {
//         $('#winner').text('PLAYER 1 WON')
//         return true;

//     } else if ($('#box1').hasClass('yellow') && $('#box5').hasClass('yellow') && $('#box9').hasClass('yellow')) {
//         $('#winner').text('PLAYER 1 WON')
//         return true;

//     } else if ($('#box1').hasClass('yellow') && $('#box4').hasClass('yellow') && $('#box7').hasClass('yellow')) {
//         $('#winner').text('PLAYER 1 WON')
//         return true;

//     } else if ($('#box1').hasClass('yellow') && $('#box5').hasClass('yellow') && $('#box8').hasClass('yellow')) {
//         $('#winner').text('PLAYER 1 WON')
//         return true;

//     } else if ($('#box3').hasClass('yellow') && $('#box5').hasClass('yellow') && $('#box7').hasClass('yellow')) {
//         $('#winner').text('PLAYER 1 WON')
//         return true;

//     } else if ($('#box3').hasClass('yellow') && $('#box6').hasClass('yellow') && $('#box9').hasClass('yellow')) {
//         $('#winner').text('PLAYER 1 WON')
//         return true;

//     } else if ($('#box6').hasClass('yellow') && $('#box5').hasClass('yellow') && $('#box4').hasClass('yellow')) {
//         $('#winner').text('PLAYER 1 WON')
//         return true;

//     } else if ($('#box9').hasClass('yellow') && $('#box8').hasClass('yellow') && $('#box7').hasClass('yellow')) {
//         $('#winner').text('PLAYER 1 WON')
//         return true;
//     } else if (($('#box1').hasClass('blue') || $('#box1').hasClass('yellow')) && 
//         ($('#box2').hasClass('blue') || $('#box2').hasClass('yellow')) && 
//         ($('#box3').hasClass('blue') || $('#box3').hasClass('yellow')) && 
//         ($('#box4').hasClass('blue') || $('#box4').hasClass('yellow')) && 
//         ($('#box5').hasClass('blue') || $('#box5').hasClass('yellow')) && 
//         ($('#box6').hasClass('blue') || $('#box6').hasClass('yellow')) && 
//         ($('#box7').hasClass('blue') || $('#box7').hasClass('yellow')) && 
//         ($('#box8').hasClass('blue') || $('#box8').hasClass('yellow')) && 
//         ($('#box9').hasClass('blue') || $('#box9').hasClass('yellow'))) {
//             $('#winner').text('GAME IS TIE')

//         }
// }