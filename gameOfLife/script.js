function matrixGenerate(matLength, gr, grEat, pr, pu, sn,wat) {
    let matrix = []
    for (let i = 0; i < matLength; i++) {
        matrix.push([])
        for (let j = 0; j < matLength; j++) {
            matrix[i].push(0)
        }
    }

    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLength)
        let y = Math.floor(Math.random() * matLength)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLength)
        let y = Math.floor(Math.random() * matLength)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
    }
    for (let i = 0; i < pr; i++) {
        let x = Math.floor(Math.random() * matLength)
        let y = Math.floor(Math.random() * matLength)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }
    }
    for (let i = 0; i < pu; i++) {
        let x = Math.floor(Math.random() * matLength)
        let y = Math.floor(Math.random() * matLength)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
        }
    }
    for (let i = 0; i < sn; i++) {
        let x = Math.floor(Math.random() * matLength)
        let y = Math.floor(Math.random() * matLength)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
        }
    }
    for (let i = 0; i < wat; i++) {
        let x = Math.floor(Math.random() * matLength)
        let y = Math.floor(Math.random() * matLength)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 6
        }
    }
    return matrix
}

let matrix = matrixGenerate(50, 250, 4, 2, 1, 1, 1)

var side = 30;
let grassArr = []
let grassEaterArr = []
let PredatorArr = []
let PeopleArr = []
let SnakeArr = []
let waterArr = []


function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background("#acacac");

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            }
            else if (matrix[y][x] == 3) {
                let pr = new Predator(x, y)
                PredatorArr.push(pr)

            }
            else if (matrix[y][x] == 4) {
                let pe = new People(x, y)
                PeopleArr.push(pe)

            }
            else if (matrix[y][x] == 5) {
                let sn = new Snake(x, y)
                SnakeArr.push(sn)

            }
            else if (matrix[y][x] == 6) {
                let wat = new Water(x, y)
                waterArr.push(wat)

            }


        }

    }
}

function draw() {
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
