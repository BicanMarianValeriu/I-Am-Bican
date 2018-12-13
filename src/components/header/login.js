import React, { Component } from "react";
import ReactSVG from "react-svg";
import { connect } from "react-redux";
import Cookies from "js-cookie";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import Icon from "../../assets/svg/user.svg";
import Logout from "../../assets/svg/logout.svg";
import {
  isAuthentificated,
  removeAuthToken,
  getAuthToken
} from "../../functions/auth";
import {
  LOGOUT_USER,
  setCurrentUser,
  FETCH_USER_FULFILLED
} from "../../actions/actions";
import SwalLogin from "../popups/swal-auth";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Modal: null,
      dropdownOpen: false
    };
    // Preload the component on mouseover
    this._onMouseOver = this._onMouseOver.bind(this);
    this._onButtonClick = this._onButtonClick.bind(this);
    this._onLogoutClick = this._onLogoutClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  _onMouseOver() {
    if (this.state.Modal !== null) return;
    import(/* webpackChunkName: "swalauth" */ "./../popups/swal-auth").then(
      modal =>
        this.setState({
          Modal: modal.default
        })
    );
  }

  _onButtonClick() {
    if (this.state.Modal === null) {
      import(/* webpackChunkName: "swalauth" */ "./../popups/swal-auth").then(
        modal =>
          this.setState({
            Modal: modal.default
          })
      );
    }
    if (this.state.Modal !== null && !isAuthentificated())
      this.state.Modal.renderModal();
  }

  _onLogoutClick() {
    if (isAuthentificated()) {
      removeAuthToken();
      this.props.dispatch({ type: LOGOUT_USER });
      Cookies.remove("authToken");
      SwalLogin.createToast({
        type: "success",
        title: `Logged out. See you soon :).`
      });
    }
  }

  toggle() {
    this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));
  }

  componentDidMount() {
    const { dispatch } = this.props;
    if (isAuthentificated())
      setCurrentUser(getAuthToken()).then(response => {
        dispatch({ type: FETCH_USER_FULFILLED, payload: response });
      });
  }

  render() {
    const {
      user: { name, avatar_urls }
    } = this.props;
    let classes = [
      "header__login",
      "col-auto",
      "right",
      "pl-0",
      "header-login"
    ];
    if (isAuthentificated()) classes.push(["header-login--is-auth"]);
    return (
      <div className={classes.join(" ")}>
        {isAuthentificated() ? (
          <Dropdown
            isOpen={this.state.dropdownOpen}
            toggle={this.toggle}
            size="lg"
            direction="left"
          >
            <DropdownToggle className="header-login__btn float-right btn">
              {name ? (
                <img
                  src={avatar_urls && avatar_urls[96]}
                  alt={`${name}'s avatar`}
                  className="header-login__btn-avatar"
                />
              ) : (
                <ReactSVG
                  src={Icon}
                  svgClassName="svg-icon svg-icon--header"
                  className="header-login__icon-svg"
                />
              )}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header>Howdy {name}</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem
                className="text-muted"
                onClick={this._onLogoutClick}
              >
                <ReactSVG
                  src={Logout}
                  svgClassName="svg-icon svg-icon--header"
                  className="header-logout__svg"
                />
                <span className="header-logout__label">LogOut</span>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <button
            id="header-login"
            className="header-login__btn float-right btn"
            onClick={this._onButtonClick}
            onMouseOver={this._onMouseOver}
            onTouchStart={this._onMouseOver}
          >
            <ReactSVG
              src={Icon}
              svgClassName="svg-icon svg-icon--header"
              className="header-login__icon-svg"
            />
          </button>
        )}
      </div>
    );
  }
}

// Binds Query / Query Result
const mapStateToProps = store => {
  const {
    api: { user }
  } = store;
  return { user };
};

export default connect(mapStateToProps)(Login);
