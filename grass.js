let LivingCreature = require("./LivingCreature")

module.exports = class Grass extends LivingCreature {
    constructor(x, y) {
       super(x,y)
       this.energy = 20;
        this.directions = [];

    }
 
  
    mul() {
        let emptyCelss = this.chooseCell(0)
        let newCell = emptyCelss[Math.floor(Math.random() * emptyCelss.length)]
        this.energy++
        if (newCell && this.energy >=28) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[newY][newX] = 1
            let newGr = new Grass(newX, newY)
            grassArr.push(newGr)
            this.energy = 20
        }
    }

}
