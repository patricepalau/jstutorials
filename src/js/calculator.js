var PI = 3.14;

function Calculator() {
};

Calculator.prototype.add = function (x, y) {
  return x + y;
};

Calculator.prototype.mutiply = function (x, y) {
  return x * y;
};

Calculator.prototype.calculateCircleArea = function (r) {
  return PI * r * r;
};

