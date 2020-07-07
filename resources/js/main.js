$(document).ready(function(){


	//STICKY MANU

	$(".js-services-section").waypoint(function(direction){
		if(direction == "down"){
			$("nav").addClass("sticky");
		}else{
			$("nav").removeClass("sticky");
		}
	});

	//mixitup(PROTFOLIO SECTION)
	var mixer = mixitup('.container');
});
function openNav(){
	document.getElementById("mynav").style.width="100%";
}
function closeNav(){
	document.getElementById("mynav").style.width="0%";
}