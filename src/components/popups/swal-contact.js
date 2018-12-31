// Deps
import swal from "sweetalert2/dist/sweetalert2.js";
import WPCF7 from "./../../functions/wpcf7";
import { validateEmail, validateFields } from "./../../functions/helpers";

const SwalContact = {
	renderModal: function () {
		const alert = swal({
			title: "Thanks for your interest in contacting me!",
			html: `<form name="swal-contact" id="wpcf7-6" data-wpcf7-form="6">
            <div class="row">
                <div class="col-md-6">
                    <span class="wpcf7-form-control-wrap your-name">
                        <input id="swal-input1" class="swal2-input required" name="your-name" type="text" placeholder="Your Name" required/>
                    </span>
                </div>
                <div class="col-md-6">
                    <span class="wpcf7-form-control-wrap your-email">
                        <input id="swal-input2" class="swal2-input required" name="your-email" type="email" placeholder="Your Email" required/>
                    </span>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <textarea id="swal-input3" class="swal2-textarea required" name="your-message" placeholder="Your Message" required></textarea>
                </div>
            </div></form>`,
			footer: `View your privacy policy &nbsp;<a href="/p/privacy-policy">here</a>.`,
			focusConfirm: false,
			customClass: "swal-contact",
			confirmButtonText: "Send Message",
			showLoaderOnConfirm: true,
			showCloseButton: true,
			onClose: () => (window.location.hash = ""),
			width: "45rem",
			preConfirm: () => {
				var fields = document.forms["swal-contact"].getElementsByClassName(
					"required"
				);
				var email = fields["your-email"].value;

				if (validateFields(fields) === false)
					return swal.showValidationMessage(`Please fill all fields.`);

				if (validateEmail(email) === false)
					return swal.showValidationMessage(`Email address is not valid.`);

				const WPCF = new WPCF7("#wpcf7-6", {
					apiUrl: "http://www.iambican.com/dashboard/wp-json/contact-form-7/v1"
				});
				WPCF.sendMail().then(result => {
					if (result.status === "mail_sent") {
						swal({
							title: `Awesome`,
							text: result.message,
							type: "success"
						});
					} else {
						swal({
							title: `Something is wrong`,
							text: result.message,
							type: "error"
						});
					}
				});
			},
			allowOutsideClick: () => !swal.isLoading()
		}).then(result => {
			if (result.dismiss) return;
			swal({
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
