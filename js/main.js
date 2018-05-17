$(document).ready(function(){
	var user = localStorage.getItem("user");
	if(!user)
	{
		window.location.href = "index.html";
	}
	user = JSON.parse(user);
	$.ajax({
		method: "POST",
		url: url+"allmatch",
		header: {"Authorization": true},
		data: JSON.stringify(user),
		success: function(respuesta){
			if(respuesta.success){
				alertify.success("peticion exitosa");
			}
			else
			{
				alertify.error("Error en el servidor");
			}
		},
		error: function(xhr){
		}
	})
})