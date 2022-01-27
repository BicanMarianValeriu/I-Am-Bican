import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import _find from 'lodash/find';
import { getMenu } from './../../redux/actions/menus';

const Navigation = ({ className = '', menuClass, wpMenuId }) => {
    const { pathname } = useLocation();
    const dispatch = useDispatch();

    useEffect(() => dispatch(getMenu(wpMenuId)), [dispatch, wpMenuId]);

    const { items = [], ID } = useSelector(({ menus }) => _find(menus, { ID: wpMenuId }) || {});

    const navClasses = classNames(...[className ? className.split(' ') : 'navigation']);

    const renderItems = () => {
        if (wpMenuId === ID) {
            return items.map((item, index) => {
                const { children = [], classes, url = '' } = item;

                const classString = classNames('nav-link', ...[classes ? classes.split(' ') : []], {
                    'active': url !== '/' && pathname.includes(url)
                });

                const liClasses = classNames('nav-item', {
                    'nav-item--has-dropdown': children.length > 0
                });

                return (
                    <li key={index} className={liClasses}>
                        <NavLink exact className={classString} to={item.url}>{item.title}</NavLink>
                        {children.length > 0 && renderDropdownItems(children)}
                    </li>
                );
            });
        }
    }

    const renderDropdownItems = (items) => {
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

    return (
        <nav className={navClasses}>
            <ul className={menuClass ? menuClass : 'nav nav-pills justify-content-end'}>
                {renderItems()}
            </ul>
        </nav>
    );
}

export default Navigation;