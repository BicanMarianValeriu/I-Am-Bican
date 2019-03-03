import React, { Component } from "react";
import { connect } from "react-redux"; 
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { isAuthentificated, removeAuthToken, getAuthToken } from "../../api/auth";
import { LOGOUT_USER, setCurrentUser, FETCH_USER_FULFILLED } from "../../api/actions/actions";
import { SwalToast } from "../Popups/swal-auth";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Modal: null,
			dropdownOpen: false,
			isAuthentificated: false
		};
		// Preload the component on mouseover
		this._onMouseOver = this._onMouseOver.bind(this);
		this._onButtonClick = this._onButtonClick.bind(this);
		this._onLogoutClick = this._onLogoutClick.bind(this);
		this.toggle = this.toggle.bind(this);
	}

	_onMouseOver() {
		if (this.state.Modal !== null) return;
		import(/* webpackChunkName: "swalauth" */ "../Popups/swal-auth").then(modal => this.setState({ Modal: modal.default }));
	}

	_onButtonClick() {
		if (this.state.Modal === null) {
			import(/* webpackChunkName: "swalauth" */ "../Popups/swal-auth").then(modal => this.setState({ Modal: modal.default }));
		}
		if (this.state.Modal !== null && !isAuthentificated()) this.state.Modal();
	}

	_onLogoutClick() {
		if (isAuthentificated()) {
			this.props.dispatch({ type: LOGOUT_USER }); 
			removeAuthToken();
			SwalToast.fire({ type: "success", title: `Logged out. See you soon :).` });
		}
	}

	toggle() {
		this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));
	}

	componentDidMount() {
		const { dispatch } = this.props;
		if (isAuthentificated()) setCurrentUser(getAuthToken()).then(response => dispatch({ type: FETCH_USER_FULFILLED, payload: response }));
	}

	render() {
		const { user: { name, avatar_urls } } = this.props;
		let classes = ["header__login", "col-auto", "pl-0", "header-login"];
		if (isAuthentificated()) classes.push(["header-login--is-auth"]);
		let UserIcon = () => {
			return (
				<div className="header-login__icon-svg">
					<i className="far fa-user fa-fw"></i>
				</div>
			)
		}
		let UserImage = () => {
			return (name ?
				<img src={avatar_urls && avatar_urls[96]} alt={`${name}'s avatar`} className="header-login__btn-avatar" /> :
				<UserIcon />
			)
		};

		return (
			<div className={classes.join(" ")} >
				{isAuthentificated() ? (
					<Dropdown size="lg" direction="left" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
						<DropdownToggle className="header-login__btn float-right btn">
							<UserImage />
						</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem header>Howdy {name}</DropdownItem>
							<DropdownItem divider />
							<DropdownItem>Another Action</DropdownItem>
							<DropdownItem divider />
							<DropdownItem className="text-muted" onClick={this._onLogoutClick} >
								<div className="header-logout__svg">
									<i className="fas fa-sign-out-alt"></i>
								</div>
								<span className="header-logout__label">LogOut</span>
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				) : (
						<button id="header-login" className="header-login__btn float-right btn"
							onClick={this._onButtonClick}
							onMouseOver={this._onMouseOver}
							onTouchStart={this._onMouseOver} >
							<UserIcon />
						</button>
					)}
			</div >
		);
	}
}

// Binds Query / Query Result
const mapStateToProps = store => {
	const { api: { user } } = store;
	return { user };
};

export default connect(mapStateToProps)(Login);
