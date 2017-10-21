// class - a template for a new object
// instance - single object created from a class
// inheritance - an object can inherit properties from a parent object
// Encapsulation - Enclosing an object's data and functionality inside of it. (like the slideshow)
//------- Excercise 1 ---------------
// function Particle(startX, startY){
// 	this.x = startX
// 	this.y = startY
// 	velocity = {
// 		x:0,
// 		y:0
// 	}
// }

// var particles = []
// for (let i = 0; i < 100; i++) {
// 	particles[i] = new Particle(i, (Math.floor(Math.random()*500)))
// }
// console.log(particles);
// ----------------------------------------------------

//------------Exercise 2 --------------------------
// var time = 0
// var gravity = 0.5

// function Particle(startX, startY){
// 	this.x = startX
// 	this.y = startY
// 	velocity = {x:0, y:0}
// }

// Particle.prototype = {
// 	getVelocity: function() { return time*gravity; },
// 	move: function() {
// 		if (y >= 500) { console.log('botton'); } else {y += getVelocity();}
// 	}
// }

// setInterval(function() {
// 	time += 1;
// 	console.log(particles[i].x);
// 	var yArray = []
// 	if (particles[i].y < 500) { yArray.push(particles[i].y); }
// 	particle.move(yArray);
// 	return yArray;
	

// },100)

// var particles = []
// for (let i = 0; i < 100; i++) {
// 	var arrayFiller = new Particle(i, (Math.floor(Math.random()*500)))
// 	particles[i] = arrayFiller
// }
// console.log(particles);
//----------------------------------------


//------------Exercise 3 -----------------------
function User(name, address, city, state, zipcode, avatar) {
	this.name = name
	this.address = address
	this.city = city
	this.state = state
	this.zipcode = zipcode
	this.avatar = avatar
}

var brandonNiles = new User('Brandon', '2413 Foxtrot Rd.', 'Raleigh', 'NC', 27610, 'me.jpg')

function getProfileUpdate(user) {
	userInput = prompt('What property would you like to update?').toLowerCase();

	switch (userInput) {
		case 'name':
			user.name = prompt(`What value would you like to update the ${userInput} to?`);
			console.log(`The '${userInput}' was updated to '${user.name}'`);
			break;
		case 'address':
			user.address = prompt(`What value would you like to update the ${userInput} to?`);
			console.log(`The '${userInput}' was updated to '${user.address}'`);
			break;
		case 'city':
			user.city = prompt(`What value would you like to update the ${userInput} to?`);
			console.log(`The '${userInput}' was updated to '${user.city}'`);
			break;
		case 'state':
			user.state = prompt(`What value would you like to update the ${userInput} to?`);
			console.log(`The '${userInput}' was updated to '${user.state}'`);
			break;
		case 'zipcode':
			user.zipcode = prompt(`What value would you like to update the ${userInput} to?`);
			console.log(`The '${userInput}' was updated to '${user.zipcode}'`);
			break;
		case 'avatar':
			user.avatar = prompt(`What value would you like to update the ${userInput} to?`);
			console.log(`The '${userInput}' was updated to '${user.avatar}'`);
			break;
	}
	console.log(brandonNiles);

}

newValues1 = {name:"Lebron", address:"Champions Lane", city:"Cleveland", state:"Ohio", zipcode:44101, avatar:'bron.jpg'}

function updateProfile(object, user) {
	user.name = object.name
	user.address = object.address
	user.city = object.city
	user.state = object.state
	user.zipcode = object.zipcode
	user.avatar = object.avatar
	console.log('The profile has been update to:');
	console.log(user);
}