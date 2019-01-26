// Deps 
import Swal from "sweetalert2/dist/sweetalert2.js";
import WPCF7 from "./../../api/wpcf7";
import { validateEmail, validateFields } from "./../../utilities/helpers";

const SwalContact = {
	renderModal: function () {
		const alert = Swal.fire({
			title: "Thanks for your interest in contacting me!",
			html: `<form name="swal-contact" id="wpcf7-6" data-wpcf7-id="6">
			<div class="form-group">
				<div class="row">
					<div class="col-md-6">
						<span class="wpcf7-form-control-wrap your-name">
							<input class="form-control required" name="your-name" type="text" placeholder="Your Name" required/>
						</span>
					</div>
					<div class="col-md-6">
						<span class="wpcf7-form-control-wrap your-email">
							<input class="form-control required" name="your-email" type="email" placeholder="Your Email" required/>
						</span>
					</div>
				</div>
			</div>
			<div class="form-group">
				<div class="row">
					<div class="col">
						<textarea class="form-control required" name="your-message" placeholder="Your Message" required></textarea>
					</div>
				</div>
			</div>
			</form>`,
			footer: `View your privacy policy &nbsp;<a href="/p/privacy-policy">here</a>.`,
			focusConfirm: false,
			customClass: "swal-contact",
			buttonsStyling: false,
			confirmButtonClass: 'btn btn-primary',
			confirmButtonText: "Send Message",
			showLoaderOnConfirm: true,
			showCloseButton: true,
			width: "40rem",
			preConfirm: () => {
				var fields = document.forms["swal-contact"].getElementsByClassName("required");
				var email = fields["your-email"].value;

				if (validateFields(fields) === false)
					return Swal.showValidationMessage(`Please fill all fields.`);

				if (validateEmail(email) === false)
					return Swal.showValidationMessage(`Email address is not valid.`);

				const WPCF = new WPCF7("#wpcf7-6", {
					apiUrl: "//www.iambican.com/dashboard/wp-json/contact-form-7/v1"
				});
				WPCF.sendMail().then(result => {
					console.log(result)
					if (result.status === "mail_sent") {
						Swal.fire({
							title: 'Awesome',
							text: result.message,
							type: "success",
							showConfirmButton: false,
							timer: 2500
						});
					} else {
						Swal.fire({
							title: `Something is wrong`,
							text: result.message,
							type: "error"
						});
					}
				});
			},
			allowOutsideClick: () => !Swal.isLoading()
		}).then(result => {
			if (result.dismiss) return;
			Swal.fire({
				title: `Sending message, please wait...`,
				type: "info",
				showConfirmButton: false,
				allowEscapeKey: false,
				allowOutsideClick: false
			});
		});

		return alert;
	}
};

export default SwalContact;
