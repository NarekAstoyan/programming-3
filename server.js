var express = require('express')
var app = express();
var server = require('http').Server(app)
var io = require('socket.io')(server)
var fs = require("fs");


app.use(express.static("."))

app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000, function () {
    console.log("server is run");
});


function matrixGenerate(matLength, gr, grEat, pr, pu, sn, wat) {
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

matrix = matrixGenerate(50, 250, 4, 2, 1, 1, 1)
io.sockets.emit('send matrix', matrix)

grassArr = []
grassEaterArr = []
PredatorArr = []
PeopleArr = []
SnakeArr = []
waterArr = []

Grass = require("./grass")
GrassEater = require("./grassEater")
Predator = require("./predator")
People = require("./people")
Snake = require("./snake")
Water = require("./water")








function createObject() {
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
    io.sockets.emit('send matrix', matrix)
}
