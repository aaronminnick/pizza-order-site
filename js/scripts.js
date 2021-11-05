function Pizza(size) {
  this.toppings = [];
  this.size = size;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
};

Pizza.prototype.calculatePrice = function() {
  let total = 0;
  switch (this.size) {
    case ('medium'):
      total += 12;
      break;
    case ('large'):
      total += 15;
      break;
    case ('extralarge'):
      total += 20;
  }
  for (let t of this.toppings) {
    total += t.price;
  }
  this.price = total;
  return total;
};

function Topping(name, price) {
  this.name = name;
  this.price = price;
}

