import Swal from "sweetalert2/dist/sweetalert2.js";
import { validateFields } from "../../utilities/helpers";

window.Swal = Swal;

/**
 * Toast Mixin
 */
const SwalToast = Swal.mixin({
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timer: 3000
});

/**
 * Checking Credentials
 */
const SwalCheckCredentials = () => {
	return Swal.fire({
		title: `Checking details, please wait...`,
		type: 'question',
		showConfirmButton: false,
		allowEscapeKey: false,
		allowOutsideClick: false,
	})
}

/**
 * Render Invalid Credentials Modal
 * @param 	{ object } 	props - Contains the functions passed from the login component
 * @todo	Error Message From API
 * @return 	SWAL
 */
const SwalInvalidCredentials = ({ afterValidation }) => {
	return Swal.fire({
		title: `Something went wrong.`,
		html: `Invalid login credentials.`,
		type: "error",
		buttonsStyling: false,
		showConfirmButton: false,
		showCloseButton: true,
		showCancelButton: true,
		focusCancel: true,
		customClass: {
			cancelButton: 'btn btn-primary'
		},
		cancelButtonText: "Try Again"
	}).then(result => {
		// Passing Props Back to Login if Try Again is Clicked
		if (result.dismiss === Swal.DismissReason.cancel) {
			return SwalAuth({ afterValidation });
		}
	});
}

const SwalAuth = ({ afterValidation }) => {
	Swal.fire({
		titleText: 'Login',
		html: `
		<form name="swal-login">
            <div class="row">
                <div class="col-12">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1"><i class="fas fa-user"></i></span>
                        </div>
                        <input class="form-control required" aria-label="Username" aria-describedby="basic-addon1" name="username" type="text" placeholder="Your Username" required/>
                    </div>
                </div>
                <div class="col-12">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon2"><i class="fas fa-key"></i></span>
                        </div> 
                        <input class="form-control required" aria-label="Password" aria-describedby="basic-addon2" name="password" type="password" placeholder="Your Password" required/>      
                    </div>
                </div> 
                <div class="col-12">
                    <div class="row"> 
                        <div class="col-12 text-right">
                            <p><a href="javascript:void(0);" class="swal-login__forgot-pwd"><small>Forgot Password?</small></a></p>
                        </div>
                    </div>
                </div>
			</div>
		</form>`,
		footer: `View your privacy policy &nbsp;<a href="/p/privacy-policy">here</a>.`,
		customClass: {
			popup: 'swal2-popup--auth',
			confirmButton: 'btn btn-primary'
		},
		buttonsStyling: false,
		confirmButtonText: "Login",
		showLoaderOnConfirm: true,
		backdrop: `rgba(0,0,0,0.5)`,
		showCloseButton: true,
		width: "35rem",
		preConfirm: () => {
			const fields = document.forms["swal-login"].getElementsByClassName("required");
			const { username: { value: username }, password: { value: password } } = fields;

			if (validateFields(fields) === false) {
				return Swal.showValidationMessage(`Please fill all fields.`);
			}

			// Atempt to get token if validation is done
			return afterValidation({ username, password });
		},
		allowOutsideClick: () => !Swal.isLoading()
	}).then(result => {
		if (!result.dismiss) {
			return SwalCheckCredentials();
		}
	});
}

export { SwalToast, SwalAuth, SwalCheckCredentials, SwalInvalidCredentials };
