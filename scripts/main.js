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

    function play(x, y, playingSymbol) {
        if (!gameArray[x][y]) {
            gameArray[x][y] = playingSymbol;
            console.table(gameArray);
        }
        else {
            console.log("failed");
        }
    }
    function drawGame() {
        let gameTable = document.getElementById("game-table");
        console.log(gameTable);
        for (let i = 0; i < gameArray.length; i++) {
            let row = gameTable.insertRow(i);
            for (let j = 0; j < gameArray.length; j++) {
                let cell = row.insertCell(j);
                cell.setAttribute("id", `pos[${i}][${j}]`);
                if (gameArray[i][j] == -1) {
                    cell.innerText = "O";
                }
                else if (gameArray[i][j] == 1) {
                    cell.innerText = "X";
                }
                else{
                    cell.innerText = "\u00A0"; 
                }

            }
        }
    }
    return {
        play,
        drawGame //must remove, just for testing
    }
}()

playerFactory("Tilen", -1);
gameBoard.play(0, 0, -1);
gameBoard.play(2, 1, 1);
gameBoard.drawGame();