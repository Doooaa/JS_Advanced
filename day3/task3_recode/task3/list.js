function listConsructor(start, end, step) {
  //  🎯all of the properties should be defined using accessor and/or data
  //descriptor, prevent them from being deleted, iterated or being
  //modified.
  if (isNaN(start) || isNaN(end) || isNaN(step)) {
    throw new Error("start, end, and step must all be numeric values.");
  }
  Object.defineProperty(this, "start", {
    value: start,
    writable: false,
    configurable: false,
    enumerable: false,
  });

  Object.defineProperty(this, "end", {
    value: end,
    writable: false,
    configurable: false,
    enumerable: false,
  });

  Object.defineProperty(this, "step", {
    value: step,
    writable: false,
    configurable: false,
    enumerable: false,
  });

  var _this = this;
  this.data = [];

  var EnterDtatList = function () {
    for (var i = this.start; i <= this.end; i += this.step) {
      this.data.push({ value: i });
    }
  }.bind(this);

  EnterDtatList();
  this.pushValue = function (val) {
    //✔
    if (arguments.length != 1)
      throw new Error("parmeters is empty or has multi parameters");

    if (val == this.data[this.data.length - 1].value + _this.step)
      this.data.push({ value: val });
    else
      throw new Error(
        "enter value should be large than last value step 2 " +
          this.data[data.length - 1].value +
          _this.step
      );
  };

  this.popValue = function () {
    //✔

    if (this.data.length === 0) throw new Error("list is empty");

    //  this.data.findIndex(val)
    this.data.pop();
  };

  this.dequeue = function () //✔
  {
    if (this.data.length === 0) throw new Error("list is empty");
    return this.data.shift();
  };

  this.enqueue = function (val) {
    if (arguments.length !== 1) {
      throw new Error("Parameters are empty or multiple parameters provided.");
    }
    //-4   +2= -2 < 0
    if (val + _this.step <= this.data[0].value) {
      this.data.unshift({ value: val });
    } else {
      throw new Error(
        "The entered value must be smaller than the smallest value in the data."
      );
    }
  };
}
//• 🎯 Override .toString() function to display a message with all of the list

listConsructor.prototype.toString = function () {
  return this.display();
};

listConsructor.prototype.display = function () //✔
{
  this.data.forEach((element) => {
    console.log(element.value);
  });
};

var newl = new listConsructor(0, 10, 2);
var newl2 = new listConsructor(0, 4, 1);
console.log(newl + newl2);

//h+w*2
// obj.pushValue(3);
// obj.enqueue(-1);
// obj.pushValue(4);
// obj.display();

// obj.enqueue(-3);
