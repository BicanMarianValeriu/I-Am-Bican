import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getQuery } from '@redux-requests/core';
import classNames from 'classnames';
import { getMenu, GET_MENU } from './../../redux/actions/menus';

const Navigation = ({ className = '', menuClass, wpMenuId }) => {
    const { pathname } = useLocation();
    const dispatch = useDispatch();

    useEffect(() => dispatch(getMenu(wpMenuId)), [dispatch, wpMenuId]);

    const state = useSelector(state => state);

    const { data, loading } = getQuery(state, {
        type: GET_MENU,
        requestKey: wpMenuId,
    });

    // @todo
    if (loading) return null;

    const { items = [] } = data || {};

    return (
        <nav className={classNames(...[className ? className.split(' ') : 'navigation'])}>
            <ul className={menuClass ? menuClass : 'nav nav-pills justify-content-end'}>
                {items.map(({ children = [], classes, url = '#', title }, index) => {

                    return (
                        <li key={index} className={classNames('nav-item', {
                            'nav-item--has-dropdown': children.length > 0
                        })}>
                            <NavLink exact className={classNames('nav-link', ...[classes ? classes.split(' ') : []], {
                                'active': url !== '/' && pathname.includes(url)
                            })} to={url}>{title}</NavLink>
                            {children.length > 0 && (
                                <ul className="nav-item__dropdown">
                                    {children.map(item => {
                                        const classes = classNames('nav-link', 'nav-link--dropdown', ...[item.classes ? item.classes.split(' ') : []]);
                                        return (
                                            <li key={item.id} className="nav-item">
                                                <NavLink exact className={classes} to={item.url}>{item.title}</NavLink>
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Navigation;