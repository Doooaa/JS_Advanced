// Vehicle Base Class
var vehicle = function (
  speed = 100,
  color = 44,
  startboolean = true,
  priceValue = 446
) {
  var price = priceValue; // private property

  // Define public properties
  Object.defineProperty(this, "price", {
    get: function () {
      return price;
    },
    set: function (p) {
      if (!isNaN(p)) { //check for value type
        price = p;
      } else {
        throw new Error("Price must be numeric");
      }
    },
  });

  Object.defineProperty(this, "speed", {
    get: function () {
      return speed;
    },
    set: function (s) {
      if (!isNaN(s)) {
        speed = s;
      } else {
        throw new Error("Speed must be numeric");
      }
    },
  });

  Object.defineProperty(this, "color", {
    get: function () {
      return color;
    },
    set: function (c) {
      if (!isNaN(c)) {
        color = c;
      } else {
        throw new Error("Color must be numeric");
      }
    },
  });

  this.turnLeft = function () {
    console.log("Turning left");
  };

  Object.defineProperties(this, {
    turnRight: {
      value: function () {
        console.log("Turning right");
      },
    },
    start: {
      get: function () {
        return startboolean;
      },
    },
    goback: {
      value: function (speed, turn) {
        if (turn) {
          console.log("Goback");  //for undefined
        } else { 
          console.log("Car is not started");
        }
      },
    },
    goforward: {
      value: function (speed, start) {
        if (start) {
          console.log("Going forward");
        } else {
          console.log("Car is not started");
        }
      },
    },
  });
};

vehicle.prototype.toString = function () {
  return `Vehicle: Speed=${this.speed}, Color=${this.color}`;
};

vehicle.prototype.valueOf = function () {
  return this.price;
};

// Bicycle Class
var Bicycle = function (type = "train") {
  var BicycleType = type; // private property

  vehicle.call(this);

  Object.defineProperty(this, "type", {
    get: function () {
      return BicycleType;
    },
  });

  Object.defineProperty(this, "ringBell", {
    value: function (speed, start) {
      if (start) {
        console.log("Ringing bell while moving forward");
      } else {
        console.log("Car is not started");
      }
    },
  });
};

Bicycle.prototype = Object.create(vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

Bicycle.prototype.toString = function () {
  return `Bicycle: Type=${this.type}, Color=${this.color}`;
};

Bicycle.prototype.valueOf = function () {
  return this.speed;
};

// MotorVehicle Class
var MotorVehicle = function (sizeOfEngine, licencePlate, motorCodeValue) {
  vehicle.call(this);

  if (typeof licencePlate !== "string") {
    throw new Error("Licence plate must be a string");
  }
  if (typeof sizeOfEngine !== "number") {
    throw new Error("Size of engine must be a number");
  }

  var motorCode = motorCodeValue; // private property

  Object.defineProperty(this, "sizeOfEngine", {
    value: sizeOfEngine,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(this, "licencePlate", {
    value: licencePlate,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  this.getMotorCode = function () {
    return motorCode;
  };
};

MotorVehicle.prototype = Object.create(vehicle.prototype);
MotorVehicle.prototype.constructor = MotorVehicle;

MotorVehicle.prototype.toString = function () {
  return `MotorVehicle: Engine=${this.sizeOfEngine}, Licence=${this.licencePlate}`;
};

MotorVehicle.prototype.valueOf = function () {
  return this.sizeOfEngine;
};

// Car Class
var Car = function (numOfdoors, numWheels, weight, yearOfProductionvalue = 1999) {
  MotorVehicle.call(this, weight, "Car-License", "Car-MotorCode");

  if (
    typeof numOfdoors !== "number" ||
    typeof numWheels !== "number" ||
    typeof weight !== "number"
  ) {
    throw new Error("Number of doors, wheels, and weight must be a number");
  }

  var yearOfProduction = yearOfProductionvalue; // private property

  Object.defineProperty(this, "numOfdoors", {
    value: numOfdoors,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(this, "numWheels", {
    value: numWheels,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(this, "Weight", {
    value: weight,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  this.getYearOfProduction = function () {
    return yearOfProduction;
  };

  Object.defineProperty(this, "swichonAircon", {
    value: function () {
      console.log("Aircon is on");
    },
    writable: false,
    enumerable: false,
    configurable: false,
  });
};

Car.prototype = Object.create(MotorVehicle.prototype);
Car.prototype.constructor = Car;
 //🎯  Override both .toString() and valueOf()
Car.prototype.toString = function () {
  return `Car: Doors=${this.numOfdoors}, Wheels=${this.numWheels}, Weight=${this.Weight}`;
};

Car.prototype.valueOf = function () {
  return this.Weight;
};

// DumpTruck Class
var DumpTruck = function (loadCapacity, numWheels, weight) {
  MotorVehicle.call(this, weight, "Truck-License", "Truck-MotorCode");

  if (
    typeof loadCapacity !== "number" ||
    typeof numWheels !== "number" ||
    typeof weight !== "number"
  ) {
    throw new Error("Load capacity, wheels, and weight must be a number");
  }

  Object.defineProperty(this, "loadCapacity", {
    value: loadCapacity,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(this, "numWheels", {
    value: numWheels,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(this, "weight", {
    value: weight,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(this, "lowerload", {
    value: function () {
      console.log("Lower the load");
    },
    writable: false,
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(this, "raiseload", {
    value: function () {
      console.log("Raise the load");
    },
    writable: false,
    enumerable: false,
    configurable: false,
  });
};

DumpTruck.prototype = Object.create(MotorVehicle.prototype);
DumpTruck.prototype.constructor = DumpTruck;
 //🎯  Override both .toString() and valueOf()
DumpTruck.prototype.toString = function () {
  return `DumpTruck: LoadCapacity=${this.loadCapacity}, Wheels=${this.numWheels}, Weight=${this.weight}`;
};

DumpTruck.prototype.valueOf = function () {
  return this.weight;
};

// Testing
var vehicleobj = new vehicle(200, 77);
var vehicleobj1 = new vehicle(300, 77);
var totalPrice = vehicleobj + vehicleobj1;
console.log("Vehicle1 + Vehicle2: " + totalPrice);

var bicycle1 = new Bicycle("mountain");
console.log(bicycle1.toString());

var myMotorVehicle = new MotorVehicle(1.5, "ABC-123", "MV123");
var myMotorVehicle1 = new MotorVehicle(1.5, "ABC-123", "MV123");
var total2=myMotorVehicle+myMotorVehicle1;
console.log("MotorVehicle1 + MotorVehicle2: "+ total2);
console.log(myMotorVehicle.toString());


var myCar = new Car(4, 4, 2000);
console.log(myCar.toString());

var myDumpTruck = new DumpTruck(1000, 6, 5000);
console.log(myDumpTruck.toString());
