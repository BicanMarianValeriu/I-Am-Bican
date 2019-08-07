import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import classNames from 'classnames';
import { layer, icon } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser';

import { getToken, userLogout, updateUser } from "../../redux/actions/user";
import { isAuthentificated, getCurrentUser } from "../../utilities/auth";
import { isServer } from "../../utilities/helpers";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chunk: null,
			dropdownOpen: false,
			messageShown: false
		};
		// Preload the component on mouseover
		this._onMouseOver = this._onMouseOver.bind(this);
		this._onButtonClick = this._onButtonClick.bind(this);
		this._onLogoutClick = this._onLogoutClick.bind(this);
		this._onUserUpdated = this._onUserUpdated.bind(this);
		this._afterValidation = this._afterValidation.bind(this);

		this._toggle = this._toggle.bind(this);
	}

	componentDidMount() {
		const { user: { authentificated }, updateUser } = this.props;

		// If token exists but not in state, retrieve from Local and update state
		if (isAuthentificated() && authentificated !== true) {
			updateUser({ authentificated: true, data: getCurrentUser() });
		};

		if (!isServer) {
			document.addEventListener('iambican/userUpdated', this._onUserUpdated);
		}
	}

	_onUserUpdated() {
		const { chunk } = this.state;
		if (chunk === null) return;
		const titleText = isAuthentificated() ? `Welcome back ${getCurrentUser().name}.` : 'You have been logged out.';
		chunk.SwalToast.fire({ type: 'success', titleText });
	}

	_onMouseOver() {
		if (this.state.chunk !== null) return;
		import(/* webpackChunkName: "swal-auth" */ "../Popups/swal-auth").then(chunk => this.setState({ chunk }));
	}

	_onButtonClick() {
		const { chunk } = this.state;
		if (chunk === null) {
			import(/* webpackChunkName: "swal-auth" */ "../Popups/swal-auth")
				.then(chunk => this.setState({ chunk }))
				.then(chunk => chunk && chunk.SwalAuth({ afterValidation: this._afterValidation }));
			return;
		}

		return chunk.SwalAuth({ afterValidation: this._afterValidation });
	}

	_onLogoutClick() {
		const { userLogout } = this.props;
		if (isAuthentificated()) {
			userLogout();
		}
	}

	_afterValidation({ username, password }) {
		const { getToken } = this.props;
		return getToken({ username, password });
	}

	_toggle() {
		this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));
	}

	render() {
		const { loading } = this.props;
		const { name: userName = '', avatar_urls = {
			48: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
			96: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
		} } = getCurrentUser();

		const UserLoginSVG = () => {
			const faCircle = {
				icon: [
					512,
					512,
					[],
					'f111',
					'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216z'
				],
				iconName: 'circle',
				prefix: 'far'
			};

			const layers = layer(push => {
				push(icon(faCircle, { transform: { size: 35 } }));
				!isAuthentificated() && push(icon(faUser, { transform: { size: 16, y: -1 } }));
			});

			const avatarProps = {
				className: 'header-login__avatar',
				src: avatar_urls[48],
				alt: `${userName}'s Avatar`
			};

			return (
				<Fragment>
					{loading && <div className="header-login__mask"><div></div></div>}
					{isAuthentificated() && <img alt="" {...avatarProps} />}
					<div className="header-login__svg" dangerouslySetInnerHTML={{ __html: layers.html[0] }}></div>
				</Fragment>
			);
		}

		const btnClasses = classNames('btn', 'header-login', {
			'header-login--loading': loading,
			'header-login--is-auth': isAuthentificated()
		});

		return (
			<Fragment>{isAuthentificated() ? (
				<Dropdown size="lg" direction="left" isOpen={this.state.dropdownOpen} toggle={this._toggle}>
					<DropdownToggle className={btnClasses} onMouseOver={this._onMouseOver} onTouchStart={this._onMouseOver}>
						<UserLoginSVG />
					</DropdownToggle>
					<DropdownMenu right>
						<DropdownItem header>Howdy {userName}</DropdownItem>
						<DropdownItem divider />
						<DropdownItem>Dashboard</DropdownItem>
						<DropdownItem>Courses</DropdownItem>
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
					<button id="header-login" className={btnClasses}
						onClick={this._onButtonClick}
						onMouseOver={this._onMouseOver}
						onTouchStart={this._onMouseOver}>
						<UserLoginSVG />
					</button>
				)}
			</Fragment>
		);
	}
}

// mapStateToProps
const mapStateToProps = store => {
	const { user, ui: { pendingUser } } = store;
	return { user, loading: pendingUser };
};

// mapDispatchToProps 
const mapDispatchToProps = dispatch => bindActionCreators({ getToken, updateUser, userLogout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
