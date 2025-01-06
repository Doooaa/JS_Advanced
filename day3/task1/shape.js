var Shape = function (uname) {
  if (new.target === Shape) {
    throw new Error("Shape is an abstract class and cannot be instantiated.");
  }

  Object.defineProperty(this, "uname", {
    value: uname,
    configurable: true,
    writable: true,
    enumerable: true,
  });
};

Shape.prototype.area = function () {
  throw new Error("area() must be implemented by subclasses");
};

Shape.prototype.perimeter = function () {
  throw new Error("perimeter() must be implemented by subclasses");
};

var Rectangle = function (l, w, uname) {
  //  if (Rectangle.count >= 1) throw new Error("cant create Rectangle"); //🎯bouns++
  Rectangle.count++;
  if (!l || !w) throw new Error("Rectangle requires length and width");
  Shape.call(this, uname); //
  Object.defineProperty(this, "l", {
    value: l,
    writable: false,
    configurable: false,
    enumerable: true,
  });
  Object.defineProperty(this, "w", {
    value: w,
    writable: false,
    configurable: false,
    enumerable: true,
  });
};

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function () { //override
  return this.l * this.w;
};

Rectangle.prototype.perimeter = function () {
  return 2 * (this.l + this.w);
};

Rectangle.prototype.toString = function () {
  return `Rectangle[${this.uname} 1-length=>${this.l} width=>${this.w}] area=>${this.area()} perimeter=>${this.perimeter()}`;
};

Rectangle.prototype.valueOf = function () {
  return this.area();
};

Rectangle.count = 0;

var Square = function (side, uname) {
  if (Square.count1 >= 1) throw new Error("cant create Square"); //bouns++
  Square.count1++;
  if (!side) throw new Error("enter side plz");
  Rectangle.call(this, side, side, uname);
};

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.toString = function () {
  return `Square[${this.uname} side=${this.l}] area=${this.area()}, perimeter=${this.perimeter()}`;
};

Square.prototype.valueOf = function () {
  return this.area();
};

Square.count1 = 0;

var rect = new Rectangle(5, 10, "MyRectangle");
console.log(rect.toString());
console.log(rect.valueOf());

var square = new Square(4, "MySquare");
console.log(square.toString());
console.log(square.valueOf());

console.log(Rectangle.count);
