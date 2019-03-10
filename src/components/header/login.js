import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
//import { SwalToast } from "../Popups/swal-auth";

import { getToken, authToken, userLogout } from "../../redux/actions/user";
import { isAuthentificated, getAuthToken } from "../../utilities/auth";

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
		this._afterValidationSuccess = this._afterValidationSuccess.bind(this);
		this.toggle = this.toggle.bind(this);
	}

	_onMouseOver() {
		if (this.state.Modal !== null) return;
		import(/* webpackChunkName: "swal-auth" */ "../Popups/swal-auth")
			.then(modal => this.setState({ Modal: modal.default }));
	}

	_onButtonClick() {
		if (this.state.Modal === null) {
			import(/* webpackChunkName: "swal-auth" */ "../Popups/swal-auth")
				.then(modal => this.setState({ Modal: modal.default }))
				.then(() => this.state.Modal({
					afterValidationSuccess: this._afterValidationSuccess
				}));
		}

		this.state.Modal({
			afterValidationSuccess: this._afterValidationSuccess
		}); 
	}

	_onLogoutClick() {
		if (isAuthentificated()) {
			this.props.userLogout();
			//SwalToast.fire({ type: 'success', title: `Logged out. See you soon :).` });
		}
	}

	_afterValidationSuccess({ username, password }) {
		return this.props.getToken({ username, password });
	}

	toggle() {
		this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));
	}

	componentDidMount() {
		if (isAuthentificated()) this.props.authToken(getAuthToken());
	}

	render() {
		const { user } = this.props;

		const { data: { name = '', avatar_urls } } = user;

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

// mapStateToProps
const mapStateToProps = store => {
	const { user } = store;
	return { user };
};

// mapDispatchToProps 
const mapDispatchToProps = dispatch => bindActionCreators({ getToken, authToken, userLogout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
