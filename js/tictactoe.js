let turn = true;
let winningArray = ['', '', '', '', '', '', '', '', ''];
let counter = 0;
let counterPlayer1 = 0;
let counterPlayer2 = 0;
let winNoise = new Audio("./audio/winner.wav");
let tieNoise = new Audio("./audio/tie.wav");
let clickNoise = new Audio("./audio/click.wav");

$('.game').on('click', function(){
    clickNoise.play()
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

const winning = function () {
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
        } else if (counter === 9){
            pop('IT IS TIE')
        }
}

const convertWinner = function (playerName) {
    if (playerName === 'o') {
        counterPlayer1 += 1;
        console.log(counterPlayer1);
        $('#counter1').text('PLAYER 1: ' + counterPlayer1)
        pop('Player1')
    } else if (playerName === 'x') {
        counterPlayer2 += 1;
        console.log(counterPlayer2)
        $('#counter2').text('PLAYER 2: ' + counterPlayer2)
        pop('Player2')
    } 
}

const pop = function (PLAYERWIN) {
    if (PLAYERWIN.includes('Player')) {
    $('#modalBox').css({'visibility': 'visible', 'background': 'url(images/sponge.webp)', 'background-position': 'center', 'background-repeat': 'no-repeat', 'background-size': 'cover'})
    $('#popup').text(PLAYERWIN + ' WINS')
    winNoise.play()
    } else {
        $('#modalBox').css({'visibility': 'visible', 'background': 'url(images/patrik.webp)', 'background-position': 'center', 'background-repeat': 'no-repeat', 'background-size': 'cover'})
        $('#popup').text('IT IS TIE')
        tieNoise.play();
    }
}


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
    clickNoise.play()
})
