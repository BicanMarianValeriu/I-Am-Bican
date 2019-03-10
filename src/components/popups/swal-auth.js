import Swal from "sweetalert2/dist/sweetalert2.js";
import { validateFields } from "../../utilities/helpers";

const SwalToast = Swal.mixin({
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timer: 3000
});

/**
 * Render Invalid Credentials Modal
 * @param { object } props - Contains the functions passed from the login component
 */
const SwalInvalidCredentials = (props) => {
	return Swal.fire({
		title: `Something went wrong.`,
		html: `Invalid login credentials.`,
		type: "error",
		buttonsStyling: false,
		showConfirmButton: false,
		showCloseButton: true,
		showCancelButton: true,
		cancelButtonClass: 'btn btn-primary',
		cancelButtonText: "Try Again" 
	}).then(result => {
		// Passing Props Back to Login if Try Again is Clicked
		if (result.dismiss === Swal.DismissReason.cancel) SwalAuth(props);
	});
}

const SwalAuth = (props) => {
	return Swal.fire({
		title: `Login`,
		html: `<form name="swal-login">
            <div class="row">
                <div class="col-12">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">User</span>
                        </div>
                        <input class="form-control required" aria-label="Username" aria-describedby="basic-addon1" name="username" type="text" placeholder="Your Username" required/>
                    </div>
                </div>
                <div class="col-12">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon2">Pass</span>
                        </div> 
                        <input class="form-control required" aria-label="Password" aria-describedby="basic-addon2" name="password" type="password" placeholder="Your Password" required/>      
                    </div>
                </div> 
                <div class="col-12">
                    <div class="row"> 
                        <div class="col-12 text-right">
                            <p><a href="javascript:void(0)" class="swal-login__forgot-pwd">Forgot Password?</a></p>
                        </div>
                    </div>
                </div>
            </div></form>`,
		footer: `View your privacy policy &nbsp;<a href="/p/privacy-policy">here</a>.`,
		customClass: "swal-auth",
		buttonsStyling: false,
		confirmButtonClass: 'btn btn-primary',
		confirmButtonText: "Login",
		showLoaderOnConfirm: true,
		backdrop: `rgba(0,0,0,0.2)`,
		showCloseButton: true,
		width: "35rem",
		preConfirm: () => {
			var fields = document.forms["swal-login"].getElementsByClassName("required");
			var username = fields["username"].value;
			var password = fields["password"].value;

			if (validateFields(fields) === false) return Swal.showValidationMessage(`Please fill all fields.`);

			props.afterValidationSuccess({ username, password });

			// On Success
			document.addEventListener('user/get_token_success', (e) => SwalToast.fire(
				{ type: "success", title: `Welcome back ${e.detail.user_display_name}.` }
			));

			// On Error
			document.addEventListener('user/get_token_error', () => SwalInvalidCredentials(props));
		},
		allowOutsideClick: () => !Swal.isLoading()
	}).then(result => {
		if (result.dismiss) return;
		Swal.fire({
			title: `Checking details, please wait...`,
			type: "question",
			showConfirmButton: false,
			allowEscapeKey: false,
			allowOutsideClick: false
		});
	});
}

export default SwalAuth;
export { SwalToast, SwalInvalidCredentials };