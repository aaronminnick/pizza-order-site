## PIZZA WEBSITE
#### _by Aaron Minnick_
### Technologies Used:
* HTML
* CSS (including Bootstrap)
* Javascript (including jQuery)

This is the week 4 independent project at [Epicodus](https://www.epicodus.com). The goal of the project is to create a website for a pizza company where a user can choose one or more individual toppings and a pizza size to place a pizza order and see the final cost.

We were required to use test driven development. To see a list of my TDD specs, please scroll to the end of the readme.

To check out the project, click [HERE](WIP). Or, follow the setup instructions below to launch the page from a local copy on your machine.

### Setup Instructions:
_(Please note, the below instructions are using gitbash on a Windows 10 computer. Commands may vary if you are using a different OS or terminal program.)_
* Initialize a local repository in your desired location using the terminal:
```
$ git init
```
* Clone this repository to your local repository (the link may be easily got using the green "Code" button on the github page):
```
$ git clone https://github.com/aaronminnick/roboger
```
* Open index.html with your default browser:
```
$ start index.html
```
**Or** you may use the green "Code" button to download the files to your computer. Then simply extract the package, and open index.html with your browser of choice.

### Known Bugs/Issues:
n/a

_Thanks for reading! Please feel free to contact me with feedback!_
***
#### [License: CC-BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode)
![](https://licensebuttons.net/l/by-nc-sa/3.0/88x31.png)
#### Copyright (c) 2021 Aaron Minnick

***
### TDD Specs

#### _**Describe: Pizza()**_
Test: "It will return an object with two properties: an (empty) array of toppings, and a string representing pizza size."  
Code: ```const pizza = new Pizza('large');```  
Expected Output: ```Pizza { toppings: [], size: 'large }```  

##### **Describe: Pizza.prototype.addTopping()**
Test: "It will add a topping object to the toppings array in the pizza object."  
Code: ```pizza.addTopping(mushrooms);```  
Expected Output: ```Pizza { toppings: [ Topping { name: 'mushrooms', price: 2.5 } ], size: 'large' }```  

Test: "It will not add the same topping if a topping of the same name already exists in the toppings array."  
Code: 
```
pizza.addTopping(mushrooms);
pizza.addTopping(mushrooms);
```
Expected Output: ```Pizza { toppings: [ Topping { name: 'mushrooms', price: 2.5 } ], size: 'large' }```

Test: "If given multiple toppings, it will add them all to the pizza toppings array."  
Code: ```pizza.addTopping(mushrooms, pepperoni, blackolives);```  
Expected Output: 
```
Pizza { toppings: [ Topping { name: 'mushrooms', price: 2.5 }, Topping { name: 'pepperoni', price: 3 }, Topping { name: 'black olives', price: 2.5 } ], size: 'large' }
```

##### **Describe: Pizza.prototype.calculatePrice()**
Test: "It will calculate a number representing price based on size and toppings, set that price to a new property internally, and also return it."  
Code: 
```
const pizza = new Pizza('large');
pizza.addTopping(mushrooms);
pizza.calculatePrice();
```
Expected Output: ```17.5```

#### _**Describe: Topping()**_
Test: "It will return an object with two properties: a string for the topping name, and a number for its price."  
Code: ```const mushrooms = new Topping('mushrooms', 2.5);```  
Expected Output: ```Topping { name: 'mushrooms', price: 2.5 }```  