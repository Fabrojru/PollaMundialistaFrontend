$(document).ready(function(){
	var user = getUser();
	if(!user)
	{
		window.location.href = "index.html";
	}

	$("#btn_guardar").click(function(){
		var data = {
			"name": $("#validationCustom01").val(),
			"lastName": $("#validationCustom02").val(),
			"birthday": $("#validationCustom07").val(),
			"sex": $("#validationCustom06").val(),
			"adress": $("#validationCustom03").val(),
			"city": $("#validationCustom04").val(),
			"phone": $("#validationCustom05").val(),
			"email": $("#validationCustom08").val(),
			"password": $("#validationCustom09").val(),
			 
		}

		$.ajax({
			method: "POST",
			url: url+"save/user",
			header: {"Authorization": true},
			data: JSON.stringify(data),
			success: function(respuesta){
				if(respuesta.success == true)
				{
					alertify.success("Usuario guardado con exito");
				}
			},
			error: function(xhr){

			}				 
		})
	})
})