import React, { Component } from "react";
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
			Modal: null,
			dropdownOpen: false
		};
		// Preload the component on mouseover
		this._onMouseOver = this._onMouseOver.bind(this);
		this._onButtonClick = this._onButtonClick.bind(this);
		this._onLogoutClick = this._onLogoutClick.bind(this);
		this._afterValidation = this._afterValidation.bind(this);
		this.toggle = this.toggle.bind(this);
	}

	componentDidMount() {
		if (isAuthentificated()) this.props.authToken(getAuthToken());
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
				.then(() => this.state.Modal({ afterValidation: this._afterValidation }));
		}

		if (this.state.Modal) this.state.Modal({ afterValidation: this._afterValidation });
	}

	_onLogoutClick() {
		if (isAuthentificated() && this.props.user.authentificated) {
			this.props.userLogout();
		}
	}

	_afterValidation({ username, password }) {
		return this.props.getToken({ username, password });
	}

	toggle() {
		this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));
	}

	render() {
		const { user: { data: { name = '' }, authentificated }, loading } = this.props;

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
				<React.Fragment>
					{loading && <div className="header-login__mask"><div></div></div>}
					<div className="header-login__icon-svg" dangerouslySetInnerHTML={{ __html: layers.html[0] }}></div>
				</React.Fragment>
			);
		}

		const classString = classNames('header__login', 'col-auto', 'pl-0', 'header-login', {
			'header-login--loading': loading,
			'header-login--is-auth': isAuthentificated()
		});

		return (
			<div className={classString} >
				{isAuthentificated() && authentificated ? (
					<Dropdown size="lg" direction="left" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
						<DropdownToggle className="header-login__btn">
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
						<button id="header-login" className="header-login__btn float-right btn"
							onClick={this._onButtonClick}
							onMouseOver={this._onMouseOver}
							onTouchStart={this._onMouseOver}>
							<UserLoginSVG />
						</button>
					)}
			</div >
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
