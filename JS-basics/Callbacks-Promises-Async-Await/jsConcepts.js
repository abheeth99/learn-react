// 1. JavaScript Prototype
function Bike(model,color){
    this.model = model,
    this.color = color
}
  
Bike.prototype.getDetails = function(){
return this.model+" bike is "+this.color;
}

var bikeObj1 = new Bike('BMW','Black');
 console.log(bikeObj1.getDetails());

//  2. JavaScript(ES6) Class

class Plane{
    constructor(color, model) {
      this.color= color;
      this.model= model;
    }
  }

let plane = new Plane('red', 'AirBus');

// 3. IIFE - (Immediately Invoked Function Expression)

(function () 
    {
        console.log(plane.color, plane.model); 
    })
();

// 4.understanding Scope

// Global scope
var greeting='Welcome to Global';
(function(){
  console.log(greeting); //Output: Welcome to blog
})();

// Local Scope
(function(){
    var greetings = 'Welcome to Local';
      console.log(greetings); //Output: Welcome to blog
})();

// console.log(greetings); //Output:Reference-Error greeting not defined

// 5. JavaScript Closures

// Sample 1
function User(name){
    var displayName = function(greeting){
     console.log(greeting+' '+name);
    }
  return displayName;
}
  
var myFunc = User('Abheeth');
  
myFunc('Welcome');
myFunc('Hello');

// Sample 2
function makeAdder(x) {
    console.log('x', x);
    return function(y) {
        console.log('y', y);
        return x + y;
    };
  }
  
  var add5 = makeAdder(5);
  var add10 = makeAdder(10);
  
  console.log("sum",add5(2));
  console.log(add10(2));

// add5 and add10 are both closures. 
// They share the same function body definition, but store different lexical environments. 
// In add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10.

// 6. The Module Pattern
//Todo:

// 7. Hoisting- function declaration vs Function expression

console.log(doSomething)
doSomething();

// Hoisted
function doSomething(){
    console.log('function declaration');
}

// console.log(something)
// something();

// Variable is hoisted no the function
var something = function(){
    console.log('Function expression');
}

// 8. Currying

var add =   function (a){
    return function(b){
          return function(c){
                 return a+b+c;
                 }        
           }
     }
console.log('Currying',add(2)(3)(4));
console.log('Currying',add(3)(4)(5));

// 9. The apply, call, and bind methods

var obj={
    num : 2
 }
 var add = function(num2,num3,num4){
    return this.num + num2 + num3 + num4;
 }
 var arr=[3,4,5];
 //Call method 
 console.log(add.call(obj,3,4,5));
 //Apply method
 console.log(add.apply(obj,arr));
 //bind Method
 var bound = add.bind(obj);
 console.log(bound(3,4,5));