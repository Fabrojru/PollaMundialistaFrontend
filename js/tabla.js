$(document).ready(function(){
	var user = getUser();
	if(!user){
		window.location.href = "index.html";
	}
	$.ajax({
		method: "GET",
		url: url+"positions",
		header: {"Authorization": true},
		success: function(respuesta){
			var tbody = $("#tbody");
			var count = 1;
			$.each(respuesta.data, function(key, value){
				var tr = $("<tr></tr>");
				var tdNumero = $("<td></td>").html(count);
				var tdNombre = $("<td></td>").html(value.person.name + " "+ value.person.lastName);
				var tdPuntos = $("<td></td>").html(value.points);
				tr.append(tdNumero).append(tdNombre).append(tdPuntos);
				tbody.append(tr);

				count++;
			})
		},
		error: function(xhr){

		}
	})
})