//Business Logic
function Pizza(size) {
  this.toppings = [];
  this.size = size;
}

Pizza.prototype.addTopping = function(...topping) {
  for (t of topping) {
    if (this.toppings.indexOf(t) === -1) {
    this.toppings.push(t);
    }
  }
};

Pizza.prototype.removeTopping = function(topping) {
  let index = this.toppings.indexOf(topping);
  if (index !== -1) {
    this.toppings.splice(index, 1);
  }
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

//UI Logic