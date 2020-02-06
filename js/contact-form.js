/* Contact Form Script */

(function() {

	"use strict";

	var contactForm = {

		initialized: false,

		initialize: function() {

			if (this.initialized) return;
			this.initialized = true;

			this.build();
			this.events();

		},

		build: function() {

			this.validations();

		},

		events: function() {



		},

		validations: function() {

			var contactform = $("#contact-form"),
				url = contactform.attr("action");

			contactform.validate({
				submitHandler: function(form) {

					// Loading State
					var submitButton = $(this.submitButton);
					submitButton.button("loading");

					// Ajax Submit
					$.ajax({
						type: "POST",
						url: url,
						data: {
							"name": $("#contact-form #name").val(),
							"email": $("#contact-form #email").val(),
							"subject": $("#contact-form #subject").val(),
							"message": $("#contact-form #message").val()
						},
						dataType: "json",
						success: function (data) {
							if (data.response == "success") {

								$("#contact-alert-success").removeClass("hidden-xs-up");
								$("#contact-alert-error").addClass("hidden-xs-up");

								// Reset Form
								$("#contact-form .form-control")
									.val("")
									.blur()
									.parent()
									.removeClass("has-success")
									.removeClass("has-danger")
									.find("label.form-control-feedback")
									.remove();

								if(($("#contact-alert-success").position().top - 80) < $(window).scrollTop()){
									$("html, body").animate({
										scrollTop: $("#contact-alert-success").offset().top - 80
									}, 300);
								}

							} else {

								$("#contact-alert-error").removeClass("hidden-xs-up");
								$("#contact-alert-success").addClass("hidden-xs-up");

								if(($("#contact-alert-error").position().top - 80) < $(window).scrollTop()){
									$("html, body").animate({
										scrollTop: $("#contact-alert-error").offset().top - 80
									}, 300);
								}

							}
						},
						complete: function () {
							submitButton.button("reset");
						}
					});
				},
				errorClass : "form-control-feedback",
				rules: {
					name: {
						required: true
					},
					email: {
						required: true,
						email: true
					},
					subject: {
						required: true
					},
					message: {
						required: true
					}
				},
				highlight: function (element) {
					$(element)
						.parent()
						.removeClass("has-success")
						.addClass("has-danger")
						.find(".form-control")
						.addClass("form-control-danger");
				},
				success: function (element) {
					$(element)
						.parent()
						.removeClass("has-danger")
						.addClass("has-success")
						.find("label.form-control-feedback")
						.remove();
				}
			});

		}

	};

	contactForm.initialize();

})();