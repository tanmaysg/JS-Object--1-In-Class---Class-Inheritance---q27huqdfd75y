// declare class
  class Shape {
   
    constructor(color) {
        this.color = "RED";
    }

    drawShape() {
        console.log(`${this.color} is colored`);

    }
    calculateArea() {
        console.log(`${this.color}  area is to be calculated`)
    }

}
module.exports = Shape
// export class using module.exports
