$(document).ready(function(){
	$("#btnSalir").click(function(){
		localStorage.removeItem("user");
		window.location.href="index.html";
	})
})
var url = "http://192.168.1.187:8000/";
alertify.set('notifier','position', 'top-center');

function getUser()
{
	var user = localStorage.getItem("user");
	user = JSON.parse(user);
	return user;
}