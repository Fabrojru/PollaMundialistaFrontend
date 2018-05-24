$(document).ready(function(){
	var user = getUser();
	if(!user)
	{
		window.location.href = "index.html";
	}
	$.ajax({
		method: "POST",
		url: url+"allmatch",
		header: {"Authorization": true},
		data: JSON.stringify(user),
		success: function(respuesta){
			if(respuesta.success){
				var acordeon = $("#acordeon");
				var fechaSistema = new Date();
				console.log(fechaSistema);
				$.each(respuesta.data, function(key,value){
					var fechaPartido = new Date(value.date);
					console.log(fechaPartido);
					console.log(value.squad1.name);
					var card = $("<div></div>").addClass("card");
					
					//bloque card header
					var cardHeader = $("<div></div>").addClass("card-header").attr("id", "heading"+value.id);
					var h5 = $("<h5></h5>").addClass("mb-0");
					var button = $("<button></button>").addClass("btn btn-link").attr({
						"data-toggle": "collapse",
						"data-target": "#collapse"+value.id,
						"aria-expanded": "true",
						"aria-controls": "collapse"+value.id
					}).html(value.squad1.name + " vs " + value.squad2.name);
					cardHeader.append(h5.append(button));
					
					//bloque div colapse
					var divMain = $("<div></div>").addClass("collapse").attr({
						"id": "collapse"+value.id,
						"aria-labelledby": "heading"+value.id,
						"data-parent": "#accordion",
					});	
					var divcardBody = $("<div></div>").addClass("card-body");
					var divrow = $("<div></div>").addClass("row");
					
					var divcolSm1 = $("<div></div>").addClass("col-sm");
					var divImgSm1 = $("<div></div>");
					var imgSm1 = $("<img>").addClass("img-flagt1").attr("src", "img/"+value.squad1.flag);
					var divnameTeam1 = $("<div></div>").addClass("divname-team1");
					var spannameTeam1 = $("<span></span>").addClass("name-team1").html(value.squad1.name);
					divcolSm1.append(divImgSm1.append(imgSm1)).append(divnameTeam1.append(spannameTeam1));
					
					var divcolSm2 = $("<div></div>").addClass("col-sm");
					var inputcolsm2 = $("<input>").addClass("form-control").attr({
						"type": "text",
						"id": "inputSquad1"+value.id
					});
					if(value.score1)
					{
						inputcolsm2.val(value.score1);
					}
					var spanColSm2 = $("<span></span>").html(value.score1);
					divcolSm2.append(inputcolsm2);

					var divcolSm3 = $("<div></div>").addClass("col-sm");
					var labelVs = $("<label></label>").html("vs");
					divcolSm3.append(labelVs);

					var divcolSm4 = $("<div></div>").addClass("col-sm");
					var inputcolsm4 = $("<input>").addClass("form-control").attr({
						"type": "text",
						"id": "inputSquad2"+value.id
					});
					if(value.score2)
					{
						inputcolsm4.val(value.score2);
					}
					var spanColSm4 = $("<span></span>").html(value.score2);
					divcolSm4.append(inputcolsm4);

					var divcolSm5 = $("<div></div>").addClass("col-sm");
					var divImgSm5 = $("<div></div>");
					var imgSm5 = $("<img>").addClass("img-flagt1").attr("src", "img/"+value.squad2.flag);
					var divnameTeam2 = $("<div></div>").addClass("divname-team2");
					var spannameTeam2 = $("<span></span>").addClass("name-team2").html(value.squad2.name);
					divcolSm5.append(divImgSm5.append(imgSm5)).append(divnameTeam2.append(spannameTeam2));

					var divColSm6 = $("<div></div>").addClass("col-sm");
					var buttonSm6 = $("<button></button>").addClass("btn btn-default").attr({
						"type": "button",
						"id": "btnSave"+ value.id,
						"onclick": "guardarResultado("+value.id+", '"+value.squad1.name+"', '"+value.squad2.name+"')"
					});
					var spanSm6 = $("<span></span>").addClass("oi oi-check").attr({
						"title": "check",
						"aria-hidden": "true"

					})


					divColSm6.append(buttonSm6.append(spanSm6));

					divrow.append(divcolSm1).append(divcolSm2).append(divcolSm3).append(divcolSm4).append(divcolSm5).append(divColSm6);

					divcardBody.append(divrow);
					divMain.append(divcardBody);
					card.append(cardHeader).append(divMain);
					acordeon.append(card);
				})
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

function guardarResultado(idMatch, squad1Name, squad2Name){
	var user = getUser();
	alertify.confirm('Guardar Resultado', 
		'¿Esta seguro desea guardar el Resultado del partido '+ squad1Name + ' vs '+ squad2Name,
		function(){ 
			var data = {
				"idUser": user.id,
				"idMatch": idMatch,
				"score1": $("#inputSquad1"+idMatch).val(),
				"score2": $("#inputSquad2"+idMatch).val()
			}
			console.log(data);
			$.ajax({
				method: "POST",
				url: url+"insert/forecast",
				header: {"Authorization": true},
				data: JSON.stringify(data),
				success: function(respuesta){
					if(respuesta.success == true)
					{
						alertify.success("Resultado guardado con exito");
					}
					else
					{
						alertify.error("El partido ya comenzo no se puede actualizar");
					}
				},
				error: function(xhr){

				}				 
			})
		}, 
		function(){ 
		}
	);
}