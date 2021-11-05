//Business Logic
function Pizza(size) {
  this.toppings = [];
  this.size = size;
}

Pizza.prototype.addTopping = function(...topping) {
  for (let t of topping) {
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

//helper object to hold the list of all toppings
function ListOfToppings() {
  this.redsauce = new Topping("Classic Marinara", 0);
  this.whitesauce = new Topping("Creamy Parmesan Alfredo", 0);
  this.garlicoil = new Topping("Aglio e Olio", 0);
  this.nosauce = new Topping("No Sauce", -1);

  this.cheese = new Topping("Regular Cheese", 0);
  this.doublecheese = new Topping("Double Cheese", 2);
  this.vegancheese = new Topping("Vegan Cheese", 2);
  this.nocheese = new Topping("No Cheese", -1.5);

  this.pepperoni = new Topping("Pepperoni", 3);
  this.sausage = new Topping("Italian Sausage", 3);
  this.bacon = new Topping("Bacon", 3);
  this.chicken = new Topping("Roast Chicken", 3);
  this.anchovies = new Topping("Anchovies", 3);
  this.veganpepperoni = new Topping("Vegan Pepperoni", 3);
  this.vegansausage = new Topping("Vegan Sausage", 3);

  this.artichokes = new Topping("Artichoke Hearts", 2.5);
  this.peppers = new Topping("Bell Peppers", 2.5);
  this.hotpeppers = new Topping("Cherry Peppers", 2.5);
  this.blackolives = new Topping("Black Olives", 2.5);
  this.mushrooms = new Topping("Mushrooms", 2.5);
  this.onions = new Topping("Red Onions", 2.5);
  this.garlicconfit = new Topping("Garlic Confit", 2.5);
  this.kale = new Topping("Kale", 2.5);
  this.potato = new Topping("Red Potato", 2.5);
}

//UI Logic
function addOrderedPizza(pizza) {
  let topList = "";
  for (let t of pizza.toppings) {
    topList += "<li>" + t.name + "</li>";
  }
  $("#ordered-pies").append("<div class='row'><p>Size: " + pizza.size + "</p><p>Toppings:</p><ul>" + topList + "</ul><p>Price: <strong>$" + pizza.price + "</strong></p></div>");
}


$(document).ready(function() {
  const listOfToppings = new ListOfToppings();
  const currentpizza = new Pizza('large');
  
  $("#pizza-maker").submit(function(event) {
    event.preventDefault();
    $("#order-picker").slideToggle(250);
    $("#topping-row input:checked").each(function(i) {
      console.log(i +": "+ $(this).val());
      currentpizza.addTopping(listOfToppings[$(this).val()]);
    });
    currentpizza.calculatePrice();
    addOrderedPizza(currentpizza);
  });

});