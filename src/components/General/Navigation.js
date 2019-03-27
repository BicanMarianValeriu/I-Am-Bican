import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { frontloadConnect } from 'react-frontload';
import _find from 'lodash/find';
import { getMenu } from '../../redux/actions/menus';

class Navigation extends Component {
    renderMenuItems(menu) {
        let { pathname } = this.props.location;

        if (this.props.wpMenuId === menu.ID) {
            return menu.items.map((item, index) => {

                let classes = ['nav-link'];
                let _classes = (item.classes.length) ? item.classes.split(' ') : '';
                if (_classes) for (let i = 0; i < _classes.length; i++) classes.push(_classes[i]);
                if (item.url !== '/' && pathname.includes(item.url)) classes.push('active');
                let liClasses = ['nav-item'];
                if (item.children) liClasses.push('nav-item--has-dropdown');

                return (
                    <li key={index} className={liClasses.join(' ')}
                        aria-haspopup={item.children && item.children.length > 0}>
                        <NavLink exact className={classes.join(' ')} to={item.url}>{item.title}</NavLink>
                        {item.children &&
                            <ul className="nav-item__dropdown">
                                {this.renderDropdown(item.children)}
                            </ul>}
                    </li>
                );
            });
        }
    }

    renderDropdown(items) {
        return items.map((item) => {
            let classes = ['nav-link', 'nav-link--dropdown'];
            let _classes = (item.classes.length) ? item.classes.split(' ') : '';
            if (_classes) for (let i = 0; i < _classes.length; i++) classes.push(_classes[i]);
            return (
                <li key={item.id} className="nav-item">
                    <NavLink exact className={classes.join(' ')} to={item.url}>{item.title}</NavLink>
                </li>
            );
        });
    }

    render() {
        let classes = [];
        classes.push(this.props.className ? this.props.className : 'navigation');
        return (
            <nav className={classes.join(' ')}>
                <ul className={this.props.menuClass ? this.props.menuClass : 'nav nav-pills justify-content-end'}>
                    {this.props.menu && this.renderMenuItems(this.props.menu)}
                </ul>
            </nav>
        );
    }
}

// Binds menu items to navigation container
const mapStateToProps = (store, props) => {
    const { menus } = store;
    const { wpMenuId } = props;
    let menu = _find(menus, { ID: wpMenuId });

    return ({ menu });
};

// mapDispatchToProps -> getMenu
const mapDispatchToProps = dispatch => bindActionCreators({ getMenu }, dispatch);

// Server Side Stuff
const frontload = async props => await props.getMenu(props.wpMenuId);

// Export container while connected to store and SSR
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
    frontloadConnect(frontload, { onMount: true, onUpdate: false })(Navigation)
));