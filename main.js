var person = {
	firstName   : 'John',
	lastName    : 'Doe',
	getFullName : function() {
		var fullName = this.firstName + ' ' + this.lastName;
		return fullName;
	}
}

var logName = function(lang1, lang2) {
	console.log('Logged: ' + this.getFullName());
	console.log('Arguments: ' + lang1 + ' ' + lang2);
	console.log('-----------------------');
}

// Bind the this value to the person object
var logPersonName = logName.bind(person);
// Bind does not invoke so now invoke new function
logPersonName('en', 'es');

// call and apply both bind the this variable to the person object
// call takes a comma seperated list for the arguments
// apply takes an array
logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);

// function borrowing, example of pratical use for call and apply
var person2 = {
	firstName : 'Jane',
	lastName  : 'Doe'
}

// call the method from person object but bind the this to person2
console.log(person.getFullName.apply(person2));

// function Currying, pratical use for bind
// Currying creates a new function from the original with one or more of the arguments permanently set
function multiply(a, b) {
	return a*b;
}

// bind the a argument to 2
var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));





