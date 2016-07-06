//JS File
console.log("Hello World");
function add(x,y){
	console.log(x + y);
}

var classmates = ["Matt", "Tara", "Danielle", "Evan"];

for(var i in classmates){
	console.log(classmates[i]);
}

var types0fSoda = new Array();
types0fSoda[0] = "Lemon Lime Soda";
types0fSoda[1] = "Sprite";

console.log(classmates);
console.log(types0fSoda);

var mixedTypeArray = ["Elephant", 100, (5>2)];
var sameType = ["Elephant", "Giraffe", "Duck"];

//SILVER: Create an array of about 10 random numbers. Find a way to check to see if a duplicate of that random 
//number is in that array. (For example, are there two 57s)
//var randomNumberArray = [57, 58, 92, 10, 11, 83, 20, 28];

 var randomNumberArray = new Array()



 /***********DO NOT GO ABOVE THIS LINE RIGHT NOW****************************/
 /***********THERE IS TO MUCH "FUN" ABOVE***********************************/

 //OBEJECT LITERAL
 var friend = {

 	//
 	fullName		: "",
 	age				: 0,
 	married			: true,
 	vocation		:"",

 	//Method
 	printVocation	: function(){
 		return this.vocation;
 	}

 }

 var rielySizemore = Object.create(friend);
 rielySizemore.fullName = "Riely Sizemore";
 rielySizemore.age = 16;
 rielySizemore.married = false;
 rielySizemore,vocation = "unemployed"

 var thomasReichert = Object.create(friend);
 thomasReichert.fullname = "Thomas Reichert"
 thomasReichert.age = 16;
 thomasReichert.married = false;
 thomasReichert.vocation = "unemployed"

 var dakotaMatney = Object.create(friend)
 dakotaMatney.fullname = "Dakota Matney";
 dakotaMatney.age = 16;
 dakotaMatney.married = false;
 thomasReichert.vocation = "unemployed"
