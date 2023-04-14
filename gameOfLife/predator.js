let LivingCreature = require("./LivingCreature")

module.exports = class Predator extends LivingCreature{
    constructor(x, y) {
       super(x,y)
        this.energy = 40;
        this.directions = [];

    }
  

    chooseCell(character, character1, character2) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);

                }
                if (matrix[y][x] == character1) {
                    found.push(this.directions[i]);
                }
                if (matrix[y][x] == character2) {
                    found.push(this.directions[i]);
                }

            }
        }
        return found;
    }

        mul() {
            let emptyCelss = this.chooseCell(0)
            let newCell = random(emptyCelss)
            if (newCell) {
                let newX = newCell[0]
                let newY = newCell[1]
                matrix[newY][newX] = 3
                let newGr = new Predator(newX, newY)
                PredatorArr.push(newGr)
                this.energy = 50
            }
        }

        move() {
            this.energy--
            let emptyCelss = this.chooseCell(0)
            let newCell = random(emptyCelss)
            if (newCell && this.energy >= 0) {
                let newX = newCell[0]
                let newY = newCell[1]
                matrix[newY][newX] = matrix[this.y][this.x]
                matrix[this.y][this.x] = 0
                this.x = newX
                this.y = newY
            } else {
                this.die()
            }
        }

        eat() {
            let emptyCelss = this.chooseCell(1, 2, 6)
            let newCell = random(emptyCelss)
            if (newCell) {
                this.energy++
                let newX = newCell[0]
                let newY = newCell[1]
                matrix[newY][newX] = matrix[this.y][this.x]
                matrix[this.y][this.x] = 0
                this.x = newX
                this.y = newY
                if (this.energy >= 20) {
                    this.mul()
                }
                for (var i in grassEaterArr) {
                    if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1);
                        break;
                    }
                }
                for (var i in grassArr) {
                    if (newX == grassArr[i].x && newY == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
                for (var i in waterArr) {
                    if (newX == waterArr[i].x && newY == waterArr[i].y) {
                        waterArr.splice(i, 1);
                        break;
                    }
                }

            } else {
                this.move()
            }
        }

        die() {
            matrix[this.y][this.x] = 0
            for (var i in PredatorArr) {
                if (this.x == PredatorArr[i].x && this.y == PredatorArr[i].y) {
                    PredatorArr.splice(i, 1);
                    break;
                }
            }
        }
    }

