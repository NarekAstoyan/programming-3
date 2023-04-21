var socket = io()
var side = 30;


function setup() {

    createCanvas(50 * side, 50 * side);
    background("#acacac");

  
    }


function nkarel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var toBot = side - side * 0.3
            textSize(toBot);

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
                text('🥦', x * side, y * side + toBot);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
                text('🐄', x * side, y * side + toBot);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
                text('🐆', x * side, y * side + toBot);
            }
            else if (matrix[y][x] == 4) {
                fill("orange");
                rect(x * side, y * side, side, side);
                text('👨', x * side, y * side + toBot);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
                text('🐍', x * side, y * side + toBot);
            }
            else if (matrix[y][x] == 6) {
                fill("blue");
                rect(x * side, y * side, side, side);
                text('💧', x * side, y * side + toBot);
            }


        }
    }



    for (let i = 0; i < grassArr.length; i++) {
        grassArr[i].mul()
    }
    for (let i = 0; i < waterArr.length; i++) {
        waterArr[i].mul()
    }

    for (let i = 0; i < grassEaterArr.length; i++) {
        grassEaterArr[i].eat()
    }
    for (let i = 0; i < PredatorArr.length; i++) {
        PredatorArr[i].eat()
    }
    for (let i = 0; i < PeopleArr.length; i++) {
        PeopleArr[i].eat()
    }
    for (let i = 0; i < SnakeArr.length; i++) {
        SnakeArr[i].eat()
    }
    for (let i = 0; i < waterArr.length; i++) {
        waterArr[i].eat()
    }


}
