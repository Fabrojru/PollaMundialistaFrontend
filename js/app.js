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

	/*var acordeon = $("#acordeon");
	var card = $("<div></div>").addClass("card");
	
	//bloque card header
	var cardHeader = $("<div></div>").addClass("card-header").attr("id", "headingOne");
	var h5 = $("<h5></h5>").addClass("mb-0");
	var button = $("<button></button>").addClass("btn btn-link").attr({
		"data-toggle": "collapse",
		"data-target": "#collapseOne",
		"aria-expanded": "true",
		"aria-controls": "collapseOne"
	}).html("Rusia vs Arabia Saudita");
	card.append(cardHeader.append(h5.append(button)));
	
	//bloque div colapse
	var div = $("<div></div>").addClass("collapse show").attr({
		"id": "collapseOne",
		"aria-labelledby": "headingOne",
		"data-parent": "#accordion",
	});	
	var divcardBody = $("<div></div>").addClass("card-body");
	var divrow = $("<div></div>").addClass("row");
	var divcolSm = $("<div></div>").addClass("col-sm");
	var divImg = $("<div></div>");
	var img = $("<img>").addClass("img-flagt1").attr("src", "img/russia.jpg");
	var divnameTeam1 = $("<div></div>").addClass("divname-team1");
	var spannameTeam1 = $("<span></span>").addClass("name-team1").html("Rusia");	
	var divcolSm2 = $("<div></div>").addClass("col-sm");
	var inputcolsm2 = $("<input>").addClass("form-control").attr("type", "text");
	var span = $("<span></span>");
	var divcolSm3 = $("<div></div>").addClass("col-sm");
	var label = $("<label></label>").html("vs");
	var	divcolSm4 = $("<div></div>").addClass("col-sm");
	var divcolSm5 = $("<div></div>").addClass("col-sm");
	var inputcolsm5 = $("<input>").addClass("form-control").attr("type", "text");
	var span = $("<span></span>");
	var divcolSm6 = $("<div></div>").addClass("col-sm");
	var img = $("<img>").addClass("img-flagt1").attr("src", "img/arabia saudita.jpg");
	var divnameTeam1 = $("<div></div>").addClass("divname-team2");
	var spannameTeam1 = $("<span></span>").addClass("name-team2").html("Arabia Saudita");


	acordeon.append(card).append();*/
})
