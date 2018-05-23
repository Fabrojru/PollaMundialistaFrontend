$(document).ready(function(){
	var user = getUser();
	if(!user){
		window.location.href = "index.html";
	}
})