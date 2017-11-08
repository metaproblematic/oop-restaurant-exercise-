
// Part I


var FoodItem = function(name, calories, vegan, glutenFree) {
	this.name = name
	this.calories = calories
	this.vegan = vegan
	this.glutenFree = glutenFree
}



FoodItem.prototype.stringify = function() {
	if (this.vegan === true) {
		this.vegan = 'vegan'
	}
	else {
		this.vegan = 'not vegan'
	}
	if (this.glutenFree === true) {
		this.glutenFree = 'gluten free'
	}
	else {
		this.glutenFree = 'not gluten free'

	}
	return (`${this.name} which has ${this.calories} calories, is ${this.vegan}, and is ${this.glutenFree}`)
}

var chocolate = new FoodItem('chocolate', 200, true, true).stringify()

var bacon = new FoodItem('bacon', 150, false, true).stringify()

var milkshake = new FoodItem('milkshake', 300, false, true).stringify()

var strawberries = new FoodItem('strawberries', 50, true, true).stringify()

// console.log(chocolate)
// console.log(bacon.stringify())
// console.log(milkshake.stringify())


// Part II

var Plate = function(name, description, price, ingredients) {
	this.name = name
	this.description = description
	this.price = price
	this.ingredients = ingredients	

}

Plate.prototype.stringify = function() {
	
	return (`${this.name} which is ${this.description} and costs ${this.price} dollars, and includes ${this.ingredients}`)
}

var meal = new Plate('meal', 'yummers', 25, [bacon, milkshake] ).stringify()

var dessert = new Plate('dessert', 'the bomb', 20, [chocolate, strawberries]).stringify()


var Menu = function(name, plates) {
	this.name = name
	this.plates = plates

}


Menu.prototype.stringify = function() {
	
	return (`${this.name} that includes ${this.plates}`)
}

var lunchMenu = new Menu('lunch menu', [meal, dessert]).stringify()


var Restaurant = function(name, description, menu) {
	this.name = name
	this.description = description
	this.menu = menu
}


Restaurant.prototype.stringify = function() {
	
	return (`${this.name} is ${this.description} and has a ${this.menu}`)
}
var lunchPlace = new Restaurant('The Lunch Place', 'A Nifty, Spendthrifty Place to Eat', lunchMenu).stringify()

console.log(lunchPlace)

// Part III

Plate.prototype.isVegan = function() {
	return (`${this.ingredients.vegan ? '' : 'not'}`)  
}

Plate.prototype.isGlutenFree = function() {
	return (`${this.ingredients.glutenFree ? '' : 'not'}`)

}











