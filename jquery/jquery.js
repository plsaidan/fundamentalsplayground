jQuery(document).ready(function(){

	//alert("Hey");

	$("#hide").click(function(){
		$("#image").hide();
	});

	$("#show").click(function(){
		$("#image").show();
	});

	$("#fadeIn").click(function(){
		$("#image").fadeIn(10000);
	});

	$("#explode").click(function(){
		$("#image").hide("explode", {pieces: 150}, 5000)
	});

	$



});