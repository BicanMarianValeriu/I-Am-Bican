// Deps 
import Swal from "sweetalert2/dist/sweetalert2.js";
import WPCF7 from "../../utilities/wordpress/wpCF7";
import { validateEmail, validateFields } from "../../utilities/helpers";

const Contact = () => {
	return Swal.fire({
		title: "Have an idea? Let's see it!",
		html: `<form name="swal-contact" id="wpcf7-6" data-wpcf7-id="6">
			<div class="form-group">
				<div class="row">
					<div class="col-md-6 mb-3">
						<span class="wpcf7-form-control-wrap your-name">
							<input class="form-control required" name="your-name" type="text" placeholder="Your Name" required/>
						</span>
					</div>
					<div class="col-md-6 mb-3">
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
		footer: `<small><em>View your privacy policy &nbsp;<a href="/p/privacy-policy">here</a>.</em></small>`,
		customClass: {
			popup: 'swal-contact',
			confirmButton: 'btn btn-primary d-flex align-items-center'
		},
		buttonsStyling: false,
		confirmButtonText: '<i class="far fa-paper-plane me-2"></i>Send Message',
		showLoaderOnConfirm: true,
		showCloseButton: true,
		width: '40rem',
		preConfirm: () => {
			const fields = document.forms["swal-contact"].getElementsByClassName("required");
			const email = fields["your-email"].value;

			if (validateFields(fields) === false) {
				return Swal.showValidationMessage(`Please fill all fields.`);
			}

			if (validateEmail(email) === false) {
				return Swal.showValidationMessage(`Email address is not valid.`);
			}

			const WPCF = new WPCF7("#wpcf7-6", {
				apiUrl: "//wecodeart.com/dev/iambican/wp-json/contact-form-7/v1"
			});

			WPCF.sendMail().then(result => {
				if (result.status === 'mail_sent') {
					Swal.fire({
						titleText: 'Awesome',
						text: result.message,
						icon: 'success',
						showConfirmButton: false,
						timer: 3500
					});
				} else {
					Swal.fire({
						titleText: `Something went wrong`,
						text: result.message,
						icon: 'error',
						showConfirmButton: false,
						timer: 3500
					});
				}
			}).catch(err => {
				Swal.fire({
					titleText: `Something went wrong`,
					text: err,
					icon: 'error',
					buttonsStyling: false,
					customClass: {
						confirmButton: 'btn btn-primary'
					},
				});
			});
		},
		allowOutsideClick: () => !Swal.isLoading()
	}).then(result => {
		if (result.dismiss) return;
		Swal.fire({
			title: `Sending message, please wait...`,
			icon: 'info',
			showConfirmButton: false,
			allowEscapeKey: false,
			allowOutsideClick: false
		});
	});
};

export default Contact;
