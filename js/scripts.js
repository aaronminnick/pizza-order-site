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

function createToppings() {
  return [
  redsauce = new Topping("Classic Marinara", 0),
  whitesauce = new Topping("Creamy Parmesan Alfredo", 0),
  garlicoil = new Topping("Aglio e Olio", 0),
  nosauce = new Topping("No Sauce", -1),

  cheese = new Topping("Regular Cheese", 0),
  doublecheese = new Topping("Double Cheese", 2),
  vegancheese = new Topping("Vegan Cheese", 2),
  nocheese = new Topping("No Cheese", -1.5),

  pepperoni = new Topping("Pepperoni", 3),
  sausage = new Topping("Italian Sausage", 3),
  bacon = new Topping("Bacon", 3),
  chicken = new Topping("Roast Chicken", 3),
  anchovies = new Topping("Anchovies", 3),
  veganpepperoni = new Topping("Vegan Pepperoni", 3),
  vegansausage = new Topping("Vegan Sausage", 3),

  artichokes = new Topping("Artichoke Hearts", 2.5),
  peppers = new Topping("Bell Peppers", 2.5),
  hotpeppers = new Topping("Cherry Peppers", 2.5),
  blackolives = new Topping("Black Olives", 2.5),
  mushrooms = new Topping("Mushrooms", 2.5),
  onions = new Topping("Red Onions", 2.5),
  garlicconfit = new Topping("Garlic Confit", 2.5),
  kale = new Topping("Kale", 2.5),
  potato = new Topping("Red Potato", 2.5),
  ]
}

//UI Logic
$(document).ready(function() {
  const possibleToppings = createToppings();
  console.log(redsauce);
  
});