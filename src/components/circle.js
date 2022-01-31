// import using require
const Shape = require('./shape');

class Circle extends Shape {
                  super(radius){
                    this.radius= radius;
                  }

                  calculateArea(){
                  console.log('Area');
                  }
  
                }


// declare class

module.exports = Circle ;
// export class using module.exports
