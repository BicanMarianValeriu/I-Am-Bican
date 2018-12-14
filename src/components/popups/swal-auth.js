import swal from "sweetalert2/dist/sweetalert2.js";
import { validateFields } from "./../../functions/helpers";
import { setAuthToken } from "../../functions/auth";
import Cookies from "js-cookie";
import {
  requestUserToken,
  FETCH_USER_FULFILLED,
  setCurrentUser
} from "../../actions/actions";
import createStore from "./../../store";

const SwalLogin = {
  createToast: swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000
  }),
  renderModal: function() {
    return swal({
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
      confirmButtonText: "Login",
      showLoaderOnConfirm: true,
      backdrop: `rgba(0,0,0,0.2)`,
      showCloseButton: true,
      width: "35rem",
      preConfirm: () => {
        var fields = document.forms["swal-login"].getElementsByClassName(
          "required"
        );
        var username = fields["username"].value;
        var password = fields["password"].value;

        if (validateFields(fields) === false)
          return swal.showValidationMessage(`Please fill all fields.`);

        requestUserToken({ username, password }).then(response => {
          let token = response && response.token;
          if (token) {
            setAuthToken(token);
            Cookies.set("authToken", token, { expires: 7 });
            const { store } = createStore();
            setCurrentUser(token)
              .then(response => {
                store.dispatch({
                  type: FETCH_USER_FULFILLED,
                  payload: response
                });
              })
              .then(
                SwalLogin.createToast({
                  type: "success",
                  title: `Welcome back ${response.user_display_name}.`
                })
              );
          } else {
            swal({
              title: `Something went wrong.`,
              html: `Invalid login credentials.`,
              type: "error",
              showCloseButton: true,
              showCancelButton: true,
              cancelButtonText: "Try Again",
              cancelButtonColor: "#01acf4",
              showConfirmButton: false
            }).then(result => {
              if (result.dismiss === swal.DismissReason.cancel)
                SwalLogin.renderModal();
            });
          }
        });
      },
      allowOutsideClick: () => !swal.isLoading()
    }).then(result => {
      if (result.dismiss) return;
      swal({
        title: `Checking details, please wait...`,
        type: "question",
        showConfirmButton: false,
        allowEscapeKey: false,
        allowOutsideClick: false
      });
    });
  }
};

export default SwalLogin;
