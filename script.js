let pizza = {};

pizza.decorate = function(){
    console.log("Dough & Tomato Sauce");
};

pizza.getDecorator = function(deco){
    pizza[deco].prototype = this;
    return new pizza[deco];
};

pizza.Mozzarella = function(){
    
};