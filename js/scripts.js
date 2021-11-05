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

function Topping(name, value, price) {
  this.name = name;
  this.value = value;
  this.price = price;
}

//helper object to hold the list of all toppings
function ListOfToppings() {
  this.redsauce = new Topping("Classic Marinara", "redsauce", 0);
  this.whitesauce = new Topping("Creamy Parmesan Alfredo", "whitesauce", 0);
  this.garlicoil = new Topping("Aglio e Olio", "garlicoil", 0);
  this.nosauce = new Topping("No Sauce", "nosauce", -1);

  this.cheese = new Topping("Regular Cheese", "cheese", 0);
  this.doublecheese = new Topping("Double Cheese", "doublecheese", 2);
  this.vegancheese = new Topping("Vegan Cheese", "vegancheese", 2);
  this.nocheese = new Topping("No Cheese", "nocheese", -1.5);

  this.pepperoni = new Topping("Pepperoni", "pepperoni", 3);
  this.sausage = new Topping("Italian Sausage", "sausage", 3);
  this.bacon = new Topping("Bacon", "bacon", 3);
  this.chicken = new Topping("Roast Chicken", "chicken", 3);
  this.anchovies = new Topping("Anchovies", "anchovies", 3);
  this.veganpepperoni = new Topping("Vegan Pepperoni", "veganpepperoni", 3);
  this.vegansausage = new Topping("Vegan Sausage", "vegansausage", 3);

  this.artichokes = new Topping("Artichoke Hearts", "artichokes", 2.5);
  this.peppers = new Topping("Bell Peppers", "peppers", 2.5);
  this.hotpeppers = new Topping("Cherry Peppers", "hotpeppers", 2.5);
  this.blackolives = new Topping("Black Olives", "blackolives", 2.5);
  this.mushrooms = new Topping("Mushrooms", "mushrooms", 2.5);
  this.onions = new Topping("Red Onions", "onions", 2.5);
  this.garlicconfit = new Topping("Garlic Confit", "garlicconfit", 2.5);
  this.kale = new Topping("Kale", "kale", 2.5);
  this.potato = new Topping("Red Potato", "potato", 2.5);
}

//helper object to hold list of all ordered pizzas
function ListOfOrderedPizzas() {
  this.pizzas = {};
  this.pizzaId = 1;
}

ListOfOrderedPizzas.prototype.addPizza = function(pizza) {
  if (typeof pizza.id === 'undefined') {  
    pizza.id = this.pizzaId;
    this.pizzaId += 1;
    this.pizzas[pizza.id] = pizza;
  }
}

//UI Logic
function updateOrderedPiesDisplay(orderedPizzas) {
  let htmlString = "";
  for (let p in orderedPizzas.pizzas) { 
    let topList = "";
    pizza = orderedPizzas.pizzas[p];
    for (let t of pizza.toppings) {
      topList += "<li>" + t.name + "</li>";
    }
    htmlString += "<div class='row ordered-pie'><p>Size: " + pizza.size + "</p><p>Toppings:</p><ul>" + topList + "</ul><p>Price: <strong>$" + pizza.price + "</strong></p><button class='btn-dark' value='" + pizza.id + "'>Edit Order</button></div>";
  }
  $("#ordered-pies").html(htmlString);
}

function addEditListeners(orderedPizzas) {
  $("#ordered-pies").on('click', 'button', function() {
    loadPriorPie(orderedPizzas, $(this).val());
    $("#order-picker").slideToggle(250);
    $("#ordered-pies").slideToggle(250);
  });
}

function loadPriorPie(orderedPizzas, pizzaId) {
  currentpizza = orderedPizzas.pizzas[pizzaId];
  //check proper size
  $("#size-row input[value='" + currentpizza.size + "']").prop('checked', true);
  //uncheck all toppings, then check the ones the pizza has
  $("#topping-row input").each(function() {
    $(this).prop('checked', false);
  });
  for (let t of currentpizza.toppings) {
    $("#topping-row input[value='" + t.value + "']").prop('checked', true);
    //delete old toppings since they will be updated when form submits again
    currentpizza.removeTopping(t);
  }
}

function loadNewPie() {

}

$(document).ready(function() {
  const listOfToppings = new ListOfToppings();
  const orderedPizzas = new ListOfOrderedPizzas();
  const currentpizza = new Pizza('large');
  addEditListeners(orderedPizzas);
  
  $("#pizza-maker").submit(function(event) {
    event.preventDefault();
    
    currentpizza.size = $("#size-row input:checked").val();
    $("#topping-row input:checked").each(function(i) {
      currentpizza.addTopping(listOfToppings[$(this).val()]);
    });
    currentpizza.calculatePrice();
    orderedPizzas.addPizza(currentpizza);
    updateOrderedPiesDisplay(orderedPizzas);

    $("#order-picker").slideToggle(250);
    $("#ordered-pies").slideToggle(250);
  });

});