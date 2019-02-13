//  ########################################################## 1)Promises #############################################################
// https://www.youtube.com/watch?v=swdWUWtGxR4

//  ###################### Without Promises #####################
function http (url, method, successCallback, errorHandler) {
   setTimeout(function() {
      var data;
	  if(data) {
	     successCallback(data);
	  } else {
	  errorHandler('No data');
	  }
   }, 1000)
}

http('http://google.com', 'GET', function(data) {
   console.log(data);
}, function(err) {
	console.log(err);
});
//  ###################### Without Promises End ##################

//  ###################### Without Promises Arrow Function #####################
function http(url, method, successHandlre, errorHandler) {
    setTimeout(() => {
	var data;
	if(data) {
	   successHandlre(data);
	} else {
	   errorHandler('No Data');
	}
	}, 1000);
}

http('http://google.com/', 'GET', 
   function(data) {
      console.log(data);
	  },
	function (err) {
	  console.log(err)
	  });
	  
//  ###################### Without Promises Arrow Function #####################


//  ###################### With Promises ##################

function http(url, method) {
	var promise = new Promise(function(resolve, reject){
		setTimeout(() => {
		var data;
		if(data) {
		   resolve(data);
		} else {
		   reject('No Data');
		}
		}, 1000);
	});
	
	return promise;
}

http('http://google.com/', 'GET') 
    .then(function(data) {
      console.log(data);
	  })
	.catch(function (err) {
	  console.log(err)
	  });
//  ###################### With Promises End ##################


//  ###################### Generators Function ##################
// https://youtu.be/8n8ASL1pPt0

function *createGenerator(){
	yield 1;
	console.log("After 1st yield");
	yield 2;
}

let myGen = createGenerator();

console.log(myGen.next()); // outPut [1]

// outPut[1]
// object {value:1, done: false}

console.log(myGen.next()); // outPut [2]

// outPut[2]
// After 1st yield
// object {value:2, done: false}

console.log(myGen.next()); // outPut [3]

// outPut[3]
// object {value:undefined, done: true}

//  ###################### Generators Function End ##################



//  ###################### De-structuring Array  ##################
https://youtu.be/ol5sgcMvONU

// Example 1

let employee = ["Kumar", "Shan", "Male"];

let [fName, lName, Gender] = employee;

console.log(fName);   //outPut: Kumar
console.log(lName);	  //outPut: Shan
console.log(Gender);  //outPut: Male


// Example 2
let employee = ["Kumar", "Shan"];

let [fName, lName, Gender] = employee;

console.log(fName);   //outPut: Kumar
console.log(lName);	  //outPut: Shan
console.log(Gender);  //outPut: undefined


// Example 3
let employee = ["Kumar", "Shan", "Male"];

let [, , Gender] = employee; // this is the way we can access necessary value 

// console.log(fName);   //Only i need Gender show i removed var
// console.log(lName);	  //Only i need Gender show i removed var
console.log(Gender);  //outPut: Male


// Example 4
let employee = ["Kumar", "Shan", "Male"];

let [fName, ...elements] = employee;

console.log(fName);   //outPut: Kumar
console.log(elements);	  //outPut: ["Shan", "Male"]


// Example 5 [De-structuring with default value] 
let employee = ["Kumar", "Shan"];

let [fName, lName, Gender="Male"] = employee;

console.log(fName);   //outPut: Kumar
console.log(lName);	  //outPut: Shan
console.log(Gender);  //outPut: Male

// Example 5.1 [De-structuring with default value] 

let employee = ["Kumar", "Shan", "Female"];

let [fName, lName, Gender="Male"] = employee;

console.log(fName);   //outPut: Kumar
console.log(lName);	  //outPut: Shan
console.log(Gender);  //outPut: Female

//  ###################### De-structuring Array End  ##################



//  ###################### De-structuring Objects ##################
https://youtu.be/kgMglU8gZAo

// Example 1 

let employee = {
	fname: "Kumar",
	lName: "Shan",
	Gender: "Male"
}

let {fName, lName, Gender} = employee;

console.log(fName);   //outPut: Kumar
console.log(lName);	  //outPut: Shan
console.log(Gender);  //outPut: Male


// Example 2 

let employee = {
	fname: "Kumar",
	lName: "Shan",
	Gender: "Male"
}

let {fName: f, lName: l, Gender: g} = employee;

console.log(f);   //outPut: Kumar
console.log(l);	  //outPut: Shan
console.log(g);  //outPut: Male


//  ###################### De-structuring Objects End ##################




//  ###################### JavaScript class Inheritance ##################
https://youtu.be/DTis5P-1m4c

// Example 1

class Person{
	  constructor() {
		   console.log("Person constructor");
	  }
}

class Employee extends Person{
	// even  though derived class there is no constructor outPut is  
}

let e = new Employee();  //Output: Person constructor



// Example 2

class Person{
	  constructor(name) {
		   console.log(name + "Person constructor");
	  }
}

class Employee extends Person{
	// even  though derived class there is no constructor outPut is  
}

let e = new Employee("Kumar");  //Output: Kumar Person constructor



// Example 3

class Person{
	  constructor(name) {
		   console.log(name + "Person constructor");
	  }
}

class Employee extends Person{
	 constructor(name) {
		 super(name);   // Bcoz parent class needs to be called b4 sub class constructor
		 // Super key call constructor from the parent class
		   console.log(name + "Employee constructor");
	  }
}

let e = new Employee("Kumar");  //Output: Kumar Person constructor
								//Output: Kumar Employee constructor
								

								
// Example 4

class Person{
	  constructor(name) {
		   console.log(name + "Person constructor");
	  }
	  getID() {
		  return 10;
	  }
	  
}

class Employee extends Person{
	 constructor(name) {
		 super(name);   // Bcoz parent class needs to be called b4 sub class constructor
		 // Super key call constructor from the parent class
		   console.log(name + "Employee constructor");
	  }
}

let e = new Employee("Kumar");
console.log(e,getID());

//Output: Kumar Person constructor
//Output: Kumar Employee constructor
//Output: 10 


// Example 5

class Person{
	  constructor(name) {
		   console.log(name + "Person constructor");
	  }
	  getID() {
		  return 10;
	  }
	  
}

class Employee extends Person{
	 constructor(name) {
		 super(name);   // Bcoz parent class needs to be called b4 sub class constructor
		 // Super key call constructor from the parent class
		   console.log(name + "Employee constructor");
	  }
	  
	  getID() {
		  return 50;
	  }
}

let e = new Employee("Kumar");
console.log(e,getID());

//Output: Kumar Person constructor
//Output: Kumar Employee constructor
//Output: 50


// Example 6

class Person{
	  constructor(name) {
		   console.log(name + "Person constructor");
	  }
	  getID() {
		  return 10;
	  }
	  
}

class Employee extends Person{
	 constructor(name) {
		 super(name);   // Bcoz parent class needs to be called b4 sub class constructor
		 // Super key call constructor from the parent class
		   console.log(name + "Employee constructor");
	  }
	  
	  getID() {
		  return super.getID();  // this super(keyword) now can access parent class getID method
	  }
}

let e = new Employee("Kumar");
console.log(e,getID());

//Output: Kumar Person constructor
//Output: Kumar Employee constructor
//Output: 10

//  ###################### JavaScript class Inheritance End ##################