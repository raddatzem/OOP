//Object Literal  - simple way to define an object, not efficent if you have multiple methods inside
const cirlce = {
    radius: 1,
    location: {
        x: 1,
        y:1
    },
    draw: function(){       //this is a method (inside the object)
        console.log('draw')
    }
}
//you can access objects by using the dot(.) method
circle.draw()
//returns: "draw"



//Factory Function
function createCircle(radius){
    return{
        radius, //is actually "radius: radius" simplified
        draw: function(){    //key is "draw:" , value is the function that follows
            console.log('draw')
        }
    }
}
const circle = createCircle(1)



//Constructor Function
 function Circle(radius){
    this.radius = radius   //this references an object(this is setting a property, and what follows is the argument
    this.draw = function(){  //this(property) is calling the function(argument)
        console.log('draw')
    }
 }  
 const another = new Circle(1)  // the new will create an empty object "{}" -to be filled with that follows

 //what happens when you call "new"
 // - new creates an empty object
 // - then it will set this. to point to the object
 // - finally it will return the object from the function above 





 /////////Thomas's example's
/////inheritence////////
 class Auto {
    make: string; 
    color: string; 
    wheels: number;
    doors: number;
    
    constructor(make: string, color: string, wheels: number, doors: number) {
      this.make = make; 
      this.color = color;
      this.wheels = wheels;
      this.doors = doors;
    }
  
    getDoors(){
      return this.doors;
    }
  }
  
  class MotorCycle extends Auto {
      handleBarType: string;
      
      constructor(make: string, color: string, handleBarType: string){
          super(make, color, 2, 0);
          this.handleBarType = handleBarType;
      }
  
      getMpg(tireInflation: number){
          const airPressure: number = 10;
          
          if (tireInflation * airPressure > 20 && this.handleBarType == "Monkey") {
              return 35
          } else {
              return 10
          }
      }
  
      getDoors() {
          return this.doors + 8;
      }
  
  }
  
  let auto = new Auto("Ford", "red", 4, 4);
  let motorCycle = new MotorCycle('Ford', 'black', "Monkey");
  
  console.log(motorCycle.getDoors());



  

  ////polymorphism/ interfaces////////

  interface IAuto {
    wheels: number; 
    color: string;
    doors: number;
    make: string;
    getMpg(): number;
    getDoors(): number;
}

class MotorCycle implements IAuto {
    wheels: number; 
    color: string;
    doors: number;
    make: string;

  constructor(make: string, color: string, wheels: number, doors: number) {
    this.make = make; 
    this.color = color;
    this.wheels = wheels;
    this.doors = doors;
  }

  getMpg(){
    return 5
  }

  getDoors(){
    return this.doors;
  }
}

class Car implements IAuto {
    wheels: number; 
    color: string;
    doors: number;
    make: string;

  constructor(make: string, color: string, wheels: number, doors: number) {
    this.make = make; 
    this.color = color;
    this.wheels = wheels;
    this.doors = doors;
  }

  getMpg(){
    return 5
  }

  getDoors(){
    return this.doors;
  }

}

let car: IAuto = new Car("Ford", "red", 4, 4);
let motorCycle: IAuto = new MotorCycle("Ford", "red", 4, 4);

console.log(car.color);