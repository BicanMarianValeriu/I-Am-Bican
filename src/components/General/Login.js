import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Dropdown } from "react-bootstrap";
import classNames from 'classnames';
import { layer, icon } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser';

import { getToken, userLogout, updateUser } from "./../../redux/actions/user";
import { isAuthentificated, getCurrentUser, isServer } from "./../../utilities/helpers";

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
		const { name } = getCurrentUser();
		const titleText = isAuthentificated() ? `Welcome back ${name}.` : 'You have been logged out.';
		chunk.SwalToast.fire({ icon: 'success', titleText });
	}

	_onMouseOver() {
		const { chunk } = this.state;
		if (chunk !== null) return;
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
		const { user: { authentificated }, userLogout } = this.props;
		// If token exists but not in state, retrieve from Local and update state
		if (isAuthentificated() && authentificated === true) {
			userLogout();
		}
	}

	_afterValidation({ username, password }) {
		const { getToken } = this.props;
		return getToken({ username, password });
	}

	render() {
		const { loading } = this.props;
		const {
			name = '',
			avatar = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
		} = getCurrentUser();

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
				src: avatar,
				alt: `${name}'s Avatar`
			};

			return (
				<>
					{loading && <div className="header-login__mask"><div></div></div>}
					{isAuthentificated() && <img alt="" {...avatarProps} />}
					<div className="header-login__svg" dangerouslySetInnerHTML={{ __html: layers.html[0] }}></div>
				</>
			);
		}

		const wrapperClasses = classNames('header-login', {
			'header-login--loading': loading,
			'header-login--is-auth': isAuthentificated()
		});

		return (
			<>{isAuthentificated() ? (
				<Dropdown className={wrapperClasses}>
					<Dropdown.Toggle onMouseOver={this._onMouseOver} onTouchStart={this._onMouseOver} >
						<UserLoginSVG />
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Header>Howdy {name}</Dropdown.Header>
						<Dropdown.Divider />
						<Dropdown.Item>Dashboard</Dropdown.Item>
						<Dropdown.Item>Courses</Dropdown.Item>
						<Dropdown.Divider />
						<Dropdown.Item className="text-muted" onClick={this._onLogoutClick} >
							<div className="header-logout__svg">
								<i className="fas fa-sign-out-alt"></i>
							</div>
							<span className="header-logout__label">LogOut</span>
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			) : (
				<div className={wrapperClasses}>
					<button id="header-login" className={wrapperClasses}
						onClick={this._onButtonClick}
						onMouseOver={this._onMouseOver}
						onTouchStart={this._onMouseOver}>
						<UserLoginSVG />
					</button>
				</div>
			)}
			</>
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
