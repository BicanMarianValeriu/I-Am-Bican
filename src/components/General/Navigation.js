import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { frontloadConnect } from 'react-frontload';
import _find from 'lodash/find';
import classNames from 'classnames';
import { getMenu } from '../../redux/actions/menus';

class Navigation extends Component {
    renderItems() {
        const { location: { pathname }, menu: { items = [], ID = false } = {} } = this.props;

        if (this.props.wpMenuId === ID) {
            return items.map((item, index) => {
                const { children = [], classes, url = '' } = item;

                const classString = classNames('nav-link', ...[classes ? classes.split(' ') : []], {
                    'active': url !== '/' && pathname.includes(url)
                });

                const liClasses = classNames('nav-item', {
                    'nav-item--has-dropdown': children.length > 0
                });

                return (
                    <li key={index} className={liClasses} aria-haspopup={item.children && item.children.length}>
                        <NavLink exact className={classString} to={item.url}>{item.title}</NavLink>
                        {children.length > 0 && this.renderDropdownItems(children)}
                    </li>
                );
            });
        }
    }

    renderDropdownItems(items) {
        return (
            <ul className="nav-item__dropdown">
                {items.map(item => {
                    const classes = classNames('nav-link', 'nav-link--dropdown', ...[item.classes ? item.classes.split(' ') : []]);
                    return (
                        <li key={item.id} className="nav-item">
                            <NavLink exact className={classes} to={item.url}>{item.title}</NavLink>
                        </li>
                    );
                })}
            </ul>
        )
    }

    render() {
        const { className, menuClass } = this.props;
        const navClasses = classNames(...[className ? className.split(' ') : 'navigation']);
        return (
            <nav className={navClasses}>
                <ul className={menuClass ? menuClass : 'nav nav-pills justify-content-end'}>
                    {this.renderItems()}
                </ul>
            </nav>
        );
    }
}

// Binds menu items to navigation container
const mapStateToProps = (store, props) => {
    const { menus } = store;
    const { wpMenuId } = props;
    const menu = _find(menus, { ID: wpMenuId });

    return ({ menu });
};

// mapDispatchToProps -> getMenu
const mapDispatchToProps = dispatch => bindActionCreators({ getMenu }, dispatch);

// Server Side Stuff
const frontload = async props => await props.getMenu(props.wpMenuId);

// Export container while connected to store and SSR
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
    frontloadConnect(frontload, { 
        onMount: true, 
        onUpdate: false
    })(Navigation)
));