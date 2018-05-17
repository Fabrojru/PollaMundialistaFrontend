$(document).ready(function(){
	var user = localStorage.getItem("user");
	if(user)
	{
		window.location.href = "index2.html";
	}
	$("#btnLogin").click(function(){
		var data = {
			"user": $("#inputEmail").val(),
			"password": $("#inputPassword").val()
		}
		$.ajax({
			method: "POST",
			url: url+"login",
			header: {"Authorization": true},
			data: JSON.stringify(data),
			success: function(respuesta){
				if(respuesta.success){
					console.log(respuesta.data);
					localStorage.setItem("user", JSON.stringify(respuesta.data));
					window.location.href = "index2.html";
				}
				else
				{
					alertify.error("Usuario o contraseña incorrectas");
				}
			},
			error: function(xhr){
			}
		})
	})
})
