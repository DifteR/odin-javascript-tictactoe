var gameContainer = document.getElementById("game-container");

function playerFactory(name, playingSymbol) {
    this.name = name;
    this.playingSymbol = playingSymbol;
    return {
        name,
        playingSymbol
    }
}

gameBoard = function () {
    var gameArray = new Array(3);
    for (var i = 0; i < 3; i++) {
        gameArray[i] = new Array(3);
    }

    function play(x,y,playingSymbol) {
        if (!gameArray[x][y]) {
            gameArray[x][y] = playingSymbol;
            console.table(gameArray);
        }
        else(
            console.log("Failed!")
        )
    }
    return{
        play
    }
}()

playerFactory("Tilen", -1);
gameBoard.play(0,0,-1);
gameBoard.play(0,0,-1);