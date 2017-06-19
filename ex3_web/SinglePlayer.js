(function ($) {
    $.fn.mazeBoard = function (mazeBoard, startRow, startCol, exitRow, exitCol,
                               playerImage, exitImage, enable, moveFunction) {
        var canvas = document.getElementById("mazeBoard");
        var canvasCnt = canvas.getContext("2d");
        //all the images are in the size (50*50)
        var wallImage = new Image;
        wallImage.src = "images/maze wall.png";
        var walkBlockImg = new Image();
        walkBlockImg.src = "images/walking block.png";
        var startPoint = new Image();
        startPoint.src = "images/start here.png";

        startPoint.onload = function () {
            canvasCnt.drawImage(startPoint, 50, 50);
        };
    }
})(jQuery);

        /*if (enabled) {
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < cols; j++) {
                    if (mazeData[i][j] === 1)
                        canvasCnt.fillRect(cellWidth * j, cellheight * i,
                            cellWidth, cellheight);
                    if (i === startRow && j === startCol)
                        canvasCnt.drawImage(startPoint, i * 50, j * 50);
                    if (i === exitRow && j === exitCol)
                        canvasCnt.drawImage(exitImage, i * 50, j * 50);
                }
            }
            /*document.onkeydown = function (e) {
                moveFunction(e.keyCode, playerRow, playerCol);
            }
    return this;
    }
})(jQuery);*/

/*var moveFunction = function (direction, playerRow, playerCol) {
    document.onkeydown = function (e) {
        switch (e.keyCode) {
            case 37:
                //left
                playerCol++;
                break;
            case 38:
                //up
                playerRow++;
                break;
            case 39:
                //right
                playerCol--;
                break;
            case 40:
                //down
                playerRow--;
                break;
            default:
                break;
        }
    }
}*/
    var moveFunction;
    var mazeData = [[1, 0, 1], [1, 0, 1], [0, 0, 1]];
    var playerImage = Image(document.getElementById("player"));
    var exit = Image(document.getElementById("goal"));
    $("#mazeBoard").mazeBoard(
        mazeData,           // the matrix containing the maze cells
        0, 1,              // initial position of the player
        2, 0,             // the exit position
        playerImage,        // player's icon (of type Image)
        exit,          // exit's icon (of type Image)
        true,             // is the board enabled (i.e., player can move)
        moveFunction);