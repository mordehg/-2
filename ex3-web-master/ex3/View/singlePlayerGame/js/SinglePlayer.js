$(document).ready(function () {
    (function ($) {
        $.fn.drawMaze = function (mazeDate, startRow, startCol, exitRow, exitCol,
                                  playerImage, exitImage, ableToMove, makeMove) {

            var myCanvas = document.getElementById("mazeCanvas");
            var context = mazeCanvas.getContext("2d");
            var rows = maze.length;
            var cols = maze[0].length;
            var cellWidth = mazeCanvas.width / cols;
            var cellHeight = mazeCanvas.height / rows;
            var startImg = new Image();
            startImg.src = "/View/images/start here.png";

            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < cols; j++) {
                    if (maze[i][j] == 1) {
                        context.fillRect(cellWidth * j, cellHeight * i,
                       cellWidth, cellHeight);
                    }
                }
            }
            startImg.onload = function () {
                context.drawImage(startImg, cellWidth * startCol, cellHeight * startRow,
                       cellWidth, cellHeight);
            };
            exitImage.onload = function () {
                context.drawImage(exitImage, cellWidth * exitCol, cellHeight * exitRow,
                               cellWidth, cellHeight);
            };
        }
    })(jQuery);

    var maze = [[1, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 1, 0],
                [1, 0, 1, 1, 1, 0],
                [1, 1, 1, 0, 1, 0],
                [0, 0, 0, 0, 1, 0],
                [1, 1, 1, 0, 0, 0]];
    var makeAMove = function(direction, playerRow, playerCol) {
        switch (direction) {
            case '38':
                playrrRow++;
                break;
            case '40':
                playerRow--;
                break;
            case '37':
                playerCol++;
                break;
            case '39':
                playerCol--;
                break;
            default:
                break;
        }
    };
    var playerIcon = new Image();
    playerIcon.src = "/View/images/player icon.png";
    var exit = new Image();
    exit.src = "/View/images/finish line.png";

    $("#mazeCanvas").drawMaze(maze, 1, 2, 5, 3,playerIcon, exit, true, makeAMove);});