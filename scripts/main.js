function playerFactory(name, playingSymbol) {
    this.name = name;
    this.playingSymbol = playingSymbol;
    return {
        name,
        playingSymbol
    }
}

gameBoard = function () {
    let playingSymbol = -1;
    let gameTable = document.getElementById("game-table");
    let gameArray = new Array(3);
    for (var i = 0; i < 3; i++) {
        gameArray[i] = new Array(3);
    }

    function play(x, y) {
        console.log(gameArray[x][y]);
        if (!gameArray[x][y]) {
            gameArray[x][y] = playingSymbol;
            switch (playingSymbol) {
                case -1:
                    playingSymbol = 1;
                    break;
                case 1: 
                    playingSymbol = -1;
                    break;
                default:
                    alert("Something went wrong");
                    break;
            }
        }
        else {
            console.log("failed");
        }
        drawGame();
        checkWinnerHorizontal();
        checkWinnerVertcal();
        checkWinnerDiagonal();
        
    }
    function drawGame() {
        
        gameTable.innerHTML="";
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
    gameTable.addEventListener("click", function (event) {
        if (event.target.tagName === "TD") {
            var cellID = event.target.id;
            console.table(cellID);
            play(cellID.charAt(4), cellID.charAt(7));
            drawGame();
        }
    });
    
    function checkWinnerDiagonal() {
        if (gameArray[1][1] && gameArray[1][1] == gameArray[0][0] && gameArray[1][1] == gameArray[2][2] || gameArray[1][1] &&  gameArray[1][1] == gameArray[2][0] && gameArray[1][1] == gameArray[0][2]) {
            alert("We have a winner");
        }
    }

    function checkWinnerHorizontal() {
        for (let x = 0; x < gameArray.length; x++) {
            if (gameArray[x][0] && gameArray[x][0] === gameArray[x][1] && gameArray[x][1] === gameArray[x][2]) {
                alert("We have a winner");
            }
        }
    }
    function checkWinnerVertcal() {
        for (let y = 0; y < gameArray.length; y++) {
            if (gameArray[0][y] && gameArray[0][y] === gameArray[1][y] && gameArray[1][y] === gameArray[2][y]) {
                alert("We have a winner");
            }
        }
    }

    playerFactory("Tilen", -1)
    return {
        play,
        drawGame //must remove, just for testing
    }
}()

playerFactory("Tilen");
gameBoard.play(0, 0);
gameBoard.play(2, 1);
