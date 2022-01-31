// import using require
const Shape = require('./shape');

module.exports = class Circle extends Shape {
                  super(radius){
                    this.radius= radius;
                  }

                  calculateArea(){
                  console.log('Area');
                  }
  
                }


// declare class


// export class using module.exports
