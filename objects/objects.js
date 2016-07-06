function sayHello(){
	alert("its working");
}

var friend = {
	firstName	: "Aidan",
	lastName	: "Vandiver",
	age			: 16
};

document.getElementById("demo").innerHTML = friend.firstName + " " + friend.lastName + friend.age;
document.getElementById("name").innerHTML = friend.firstName;

var theOffice = {
	showname   : "The Office",
	episode    : 1,
	description : "Meet the Workers of Dunder Miflin Paper Company as we begin our long journey through the everydays lives of just some everyday people"
}
document.getElementById("show-name").innerHTML = theOffice.showname;
document.getElementById("episode").innerHTML = theOffice.episode;
document.getElementById("desc").innerHTML = theOffice.description;


var netflixShow = {
	showName : "",
	epNumber : 1,
	epDesc   : ""
}

var breakingBad = Object.create(netflixShow);
breakingBad.showName = "Breaking Bad";
breakingBad.epNumber = 1;
breakingBad.epDesc = "A chemistry teacher descides to take a new path in careers"

document.getElementById("show").innerHTML = breakingBad.showName;
document.getElementById("epnum").innerHTML = breakingBad.epNumber
document.getElementById("description").innerHTML = breakingBad.epDesc;

var amazonPrimeShow = {
	showID 		: 1,
	name 		: "Lil Boat"
	description : "Lil Yachty travels the world and saves everyone with is music"
	SeasonInfo
		seasonNumber: 1,

	printDetails : function(){
		document.write(description)
	},

	episodes	: [
		{episodeNumber: 1, episodeName: "Just Keep Swimming"}
		{episodeNumber: 2, episodeName: "Wanna be us"}
		{episodeNumber: 3, episodeName: "Minnesota"}
	]
}
