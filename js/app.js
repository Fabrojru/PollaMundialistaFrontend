	$(document).ready(function(){
		//
		$.ajax({
			method: "GET",
			url: "url",
			success: function(){

			},
			error: function(){
				var acordeon = $("#acordeon");
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
				var divcard-body = $("<div></div>").addClass("card-body");
				var divrow = $("<div></div>").addClass("row");
				var divcol-sm = $("<div></div>").addClass("col-sm");
				var divImg = $("<div></div>");
				var img = $("<img>").addClass("img-flagt1").attr("src", "img/russia.jpg");
				var divname-team1 = $("<div></div>").addClass("divname-team1");
				var spanname-team1 = $("<span></span>").addClass("name-team1").html("Rusia");	
				var divcol-sm2 = $("<div></div>").addClass("col-sm");
				var inputcolsm2 = $("<input>").addClass("form-control").attr("type", "text");
				var span = $("<span></span>");
				var divcol-sm3 = $("<div></div>").addClass("col-sm");
				var label = $("<label></label>").html("vs");
				var	divcol-sm4 = $("<div></div>").addClass("col-sm");
				var divcol-sm5 = $("<div></div>").addClass("col-sm");
				var inputcolsm5 = $("<input>").addClass("form-control").attr("type", "text");
				var span = $("<span></span>");
				var divcol-sm6 = $("<div></div>").addClass("col-sm");
				var img = $("<img>").addClass("img-flagt1").attr("src", "img/arabia saudita.jpg");
				var divname-team1 = $("<div></div>").addClass("divname-team2");
				var spanname-team1 = $("<span></span>").addClass("name-team2").html("Arabia Saudita");


					


				acordeon.append(card).append();
			}
		})
	})
