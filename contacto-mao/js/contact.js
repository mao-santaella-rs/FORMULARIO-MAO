/*----- VARIABLES ------*/
var val_mail = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
var div_feedback = $(".form-feedback");


$('form.form-main').on('submit', function(){

	/*PREELIMINARES*/
	div_feedback.empty();

	$("#form_name").parent().removeClass("has-success");
	$("#form_mail").parent().removeClass("has-success");
	$("#form_phone").parent().removeClass("has-success");
	$("#form_message").parent().removeClass("has-success");

	$("#form_name").parent().removeClass("has-error");
	$("#form_mail").parent().removeClass("has-error");
	$("#form_phone").parent().removeClass("has-error");
	$("#form_message").parent().removeClass("has-error");

	$("#form_mail").parent().removeClass("has-warning");
	$("#form_phone").parent().removeClass("has-warning");

	/*PREELIMINARES FIN*/

	var validacion = 0;
	var mensaje = "";

	var nombre = $("#form_name").val();
	var mail = $("#form_mail").val();
	var phone = $("#form_phone").val();
	var message = $("#form_message").val();

	if (nombre == "") {

		mensaje += "<p>El campo NOMBRE es obligatorio</p>";
		$("#form_name").parent().addClass("has-error");

		console.log("no hay nombre");

	}else{

		validacion = validacion +1;
		$("#form_name").parent().addClass("has-success");

		console.log("si hay nombre");
	};


	if (mail == "") {

		mensaje += "<p>El campo EMAIL es obligatorio</p>";
		$("#form_mail").parent().addClass("has-error");

		console.log("no hay mail");

	}else{

		if (mail == "" || !val_mail.test(mail)) {

			mensaje += "<p>Escrive un EMAIL valido</p>";
			$("#form_mail").parent().addClass("has-warning");

			console.log("mail no valido");

		}else{

			validacion = validacion +1;
			$("#form_mail").parent().addClass("has-success");

			console.log("mail valido");

		};
	};


	if (phone == "") {

		mensaje += "<p>El campo TELÉFONO es obligatorio</p>";
		$("#form_phone").parent().addClass("has-error");

		console.log("no hay telefono");

	}else{

		if (isNaN(phone)){

			mensaje += "<p>El campo TELÉFONO solo admite números</p>";
			$("#form_phone").parent().addClass("has-warning");

			console.log("telefono no valido");

		}else{

			validacion = validacion +1;
			$("#form_phone").parent().addClass("has-success");

			console.log("telefono valido");
		};
	};


	if (message == "") {

		mensaje += "<p>El campo MENSAJE es obligatorio</p>";
		$("#form_message").parent().addClass("has-error");

		console.log("no hay mensaje");

	}else{

		validacion = validacion +1;
		$("#form_message").parent().addClass("has-success");

		console.log("si hay mensaje");

	};



	/*VALIDACION FINAL*/
	if (validacion == 4) {

		div_feedback.removeClass("bg-danger");

		/*-----ENVIAR CORREO-----*/
		var that = $(this),
					url= that.attr('action'),
					type= that.attr('method'),
					data= {};

		that.find('[name]').each(function(index, value){
			var that = $(this),
						name = that.attr('name'),
						value = that.val();
			data[name] = value;
		});

		$.ajax({
			url: url,
			type: type,
			data: data,
			success: function(response){
				console.log(response);
				if (response == "confirmado") {

					mensaje = "<p>Mensaje enviado correctamente gracias por contactarte con nosotros</p>"
					div_feedback.append(mensaje);
					div_feedback.addClass("bg-success");
					div_feedback.slideDown("slow");

				}else{

					mensaje = "<p>Hubo un error al enviar el mensaje por favor intentalo más tarde</p>"
					div_feedback.append(mensaje);
					div_feedback.addClass("bg-danger");
					div_feedback.slideDown("slow");
				};

			}
		});
		/*-----ENVIAR CORREO FIN-----*/

	}else{
		console.log(mensaje);

		div_feedback.append(mensaje);
		div_feedback.addClass("bg-danger");
		div_feedback.slideDown("slow");
	};

	return false;
});


// ------------SLIDER-----------
