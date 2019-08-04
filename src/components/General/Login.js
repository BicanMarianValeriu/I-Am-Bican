import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import classNames from 'classnames';
import { layer, icon } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser';

import { getToken, verifyToken, authToken, userLogout } from "../../redux/actions/user";
import { isAuthentificated, getAuthToken } from "../../utilities/auth";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chunk: null,
			dropdownOpen: false
		};
		// Preload the component on mouseover
		this._onMouseOver = this._onMouseOver.bind(this);
		this._onButtonClick = this._onButtonClick.bind(this);
		this._onLogoutClick = this._onLogoutClick.bind(this);
		this._afterValidation = this._afterValidation.bind(this);

		this.toggle = this.toggle.bind(this);
	}

	componentDidUpdate(prevProps) {
		const { user: { authentificated }, authToken } = this.props;
		const { user: { authentificated: _authentificated } } = prevProps;

		if (isAuthentificated()) {
			authToken(getAuthToken());
		};

		if (authentificated !== _authentificated) {
			console.log(this.state)
		}
	}

	shouldComponentUpdate(prevProps) {
		const { user: { authentificated } } = this.props;
		const { user: { authentificated: _authentificated } } = prevProps;

		if (authentificated !== _authentificated) return true;
		return false;
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

	_authToken() {
		const { authToken } = this.props;
		return authToken(getAuthToken());
	}

	toggle() {
		this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));
	}

	render() {
		const { user: { data: { name = '' } }, loading } = this.props;

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
				push(icon(faUser, { transform: { size: 16, y: -1 } }));
			});

			return (
				<Fragment>
					{loading && <div className="header-login__mask"><div></div></div>}
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
				<Dropdown size="lg" direction="left" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
					<DropdownToggle className={btnClasses}>
						<UserLoginSVG />
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
const mapDispatchToProps = dispatch => bindActionCreators({ getToken, verifyToken, authToken, userLogout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
