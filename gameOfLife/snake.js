class Snake extends LivingCreature {
    constructor(x, y) {
     super(x,y)
        this.energy = 20;
        this.directions = [];

    }
   

    chooseCell(character, character1, character2, character3) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
              else  if (matrix[y][x] == character1) {
                    found.push(this.directions[i]);
                }
              else  if (matrix[y][x] == character2) {
                    found.push(this.directions[i]);
                }
                else  if (matrix[y][x] == character3) {
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
            matrix[newY][newX] = 5
            let newGr = new Snake(newX, newY)
            SnakeArr.push(newGr)
            this.energy = 15
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
        let emptyCelss = this.chooseCell(2,3,4,6)
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
            for (var i in PredatorArr) {
                if (newX == PredatorArr[i].x && newY == PredatorArr[i].y) {
                    PredatorArr.splice(i, 1);
                    break;
                }
         
            }
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
         
            }
            for (var i in PeopleArr) {
                if (newX == PeopleArr[i].x && newY == PeopleArr[i].y) {
                    PeopleArr.splice(i, 1);
                    break;
                }
         
            }
            for (var i in waterArr) {
                if (newX == waterArr[i].x && newY == waterArr[i].y) {
                    waterArr.splice(i, 1);
                    break;
                }
         
            }

        } else{
            this.move()
        }
    }
   

    die() {
        matrix[this.y][this.x] = 0
        for (var i in SnakeArr) {
            if (this.x == SnakeArr[i].x && this.y == SnakeArr[i].y) {
                SnakeArr.splice(i, 1);
                break;
            }
           
        }
    }
   
}
